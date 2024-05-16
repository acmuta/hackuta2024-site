import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth/options'


import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/db'
import { getServerUser } from '@/lib/auth/options'
import { getUserPerms } from '@/lib/auth/server'
import { randomInt } from 'crypto'
import User from '@/lib/db/models/User'
import logger from '@/lib/logger'
import { BuiltInRoles, EnhancedSession } from "@/lib/auth/server"
import { NextRequest, NextResponse } from 'next/server'


async function auth(req: NextApiRequest, res: NextApiResponse) {
    // https://next-auth.js.org/tutorials/avoid-corporate-link-checking-email-provider
    if (req.method === 'HEAD') {
        return res.status(200).end()
    }


    const routeName = 'enhanced-session'
    if (
        req.query.nextauth?.length === 1 && req.query.nextauth[0] === routeName
    ) {
        console.log('auth helooooo')
        try {
            const client = await clientPromise
            // This is the only place where getServerUser should be used
            // All other instances of getServerUser should be replaced by getEnhancedSession
            const user = await getServerUser(client, req, res)
            const perms = await getUserPerms(user)
            if (user?.application) {
                user.application.resume = user.application.resume ? 'exists' : ''
            }
            if (user && (!user.checkInPin || user.checkInPin < 100_000)) {
                // Generate check-in PIN
                for (let i = 0; i < 3; i++) {
                    // Retry at most two times.
                    try {
                        const pin = randomInt(100_000, 999_999)
                        await client
                            .db()
                            .collection<User>('users')
                            .updateOne(
                                { email: user.email },
                                { $set: { checkInPin: pin } },
                            )
                        user.checkInPin = pin
                        break
                    } catch (_ignored) {
                        // Ignore
                    }
                }
            }
            return res.status(200).json({
                user,
                perms,
            })
        } catch (e) {
            logger.error(e, `[/api/auth/${routeName}]`)
            console.error("enhanced session", e)
            return res.status(200).json(
                {
                    user: null,
                    perms: BuiltInRoles['@@base'],
                } satisfies EnhancedSession,
            )
        }
    }

    return NextAuth(req, res, authOptions)
}

// const handler = auth()
export const GET = auth
export const POST = auth

// export default auth
// export { handler as GET, handler as POST }

