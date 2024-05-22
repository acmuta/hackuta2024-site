// import NextAuth from 'next-auth'
// import { authOptions } from '@/lib/auth/options'

// import { NextApiRequest, NextApiResponse } from 'next'
// import clientPromise from '@/lib/db'
// import { getServerUser } from '@/lib/auth/options'
// import { getUserPerms } from '@/lib/auth/server'
// import { randomInt } from 'crypto'
// import User from '@/lib/db/models/User'
// import logger from '@/lib/logger'
// import { BuiltInRoles, EnhancedSession } from "@/lib/auth/server"
// import { NextRequest, NextResponse } from 'next/server'

// async function auth(req: NextApiRequest, res: NextApiResponse) {
//     // https://next-auth.js.org/tutorials/avoid-corporate-link-checking-email-provider
//     if (req.method === 'HEAD') {
//         return res.status(200).end()
//     }

//     const routeName = 'enhanced-session'
//     if (
//         req.query.nextauth?.length === 1 && req.query.nextauth[0] === routeName
//     ) {
//         console.log('auth helooooo')
//         try {
//             const client = await clientPromise
//             // This is the only place where getServerUser should be used
//             // All other instances of getServerUser should be replaced by getEnhancedSession
//             const user = await getServerUser(client, req, res)
//             const perms = await getUserPerms(user)
//             if (user?.application) {
//                 user.application.resume = user.application.resume ? 'exists' : ''
//             }
//             if (user && (!user.checkInPin || user.checkInPin < 100_000)) {
//                 // Generate check-in PIN
//                 for (let i = 0; i < 3; i++) {
//                     // Retry at most two times.
//                     try {
//                         const pin = randomInt(100_000, 999_999)
//                         await client
//                             .db()
//                             .collection<User>('users')
//                             .updateOne(
//                                 { email: user.email },
//                                 { $set: { checkInPin: pin } },
//                             )
//                         user.checkInPin = pin
//                         break
//                     } catch (_ignored) {
//                         // Ignore
//                     }
//                 }
//             }
//             return res.status(200).json({
//                 user,
//                 perms,
//             })
//         } catch (e) {
//             logger.error(e, `[/api/auth/${routeName}]`)
//             console.error("enhanced session", e)
//             return res.status(200).json(
//                 {
//                     user: null,
//                     perms: BuiltInRoles['@@base'],
//                 } satisfies EnhancedSession,
//             )
//         }
//     }

//     return NextAuth(req, res, authOptions)
// }

// // const handler = auth()
// export const GET = auth
// export const POST = auth

// // export default auth
// // export { handler as GET, handler as POST }

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient, WithId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { BuiltInRoles, EnhancedSession, getUserPerms } from "@/lib/auth/server";
import clientPromise from "@/lib/db";
import User from "@/lib/db/models/User";
import sendEmail from "@/lib/email";
import logger from "@/lib/logger";
import { getUser, siteName } from "@/lib/utils/server";
import { randomInt } from "crypto";

import { Adapter } from "next-auth/adapters";

const { NEXTAUTH_SECRET: secret, NEXTAUTH_DISABLE_EMAIL: disableEmail } =
  process.env;
if (!secret) {
  throw new Error('Invalid/Missing environment variable: "NEXTAUTH_SECRET"');
}

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    // ...getOAuthProviders(),
    // ...(disableEmail === 'true'
    //     ? []
    //     : [
    EmailProvider({
      async sendVerificationRequest(params) {
        console.log("sendVerificationRequest", params);
        const { identifier, url } = params;
        try {
          await sendEmail({
            to: [{ email: identifier }],

            subject: `Sign in to your ${siteName} account`,

            html: `<body>
<p>Hello,</p>
<p>Follow this link to sign in to your ${siteName} account.</p>
<p><a href="${url}">${url}</a></p>
<p>
Thanks,<br>
${siteName} Team
</p>
</body>`,
            text: `Hello,

Follow this link to sign in to your ${siteName} account.

${url}

Thanks,
${siteName} Team`,
          });
        } catch (e) {
          logger.error(e, "[NextAuth] send email");
          // console.error(e)
        }
      },
    }),
    // ]),
  ],
  secret,
};

/**
 * @deprecated use {@link import('@/lib/utils/server').getEnhancedSession}
 */
export async function getServerUser(
  client: MongoClient,
  req?: NextApiRequest,
  res?: NextApiResponse<any>
): Promise<WithId<User> | null> {
  try {
    const session = await getServerSession(
      ...(req && res ? [req, res, authOptions] : [authOptions])
    );
    if (!session?.user?.email) {
      return null;
    }
    return getUser(client, session.user.email);
  } catch (e) {
    logger.error(e, "[getServerUser]");
    // console.log(e)
    return null;
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // https://next-auth.js.org/tutorials/avoid-corporate-link-checking-email-provider
  if (req.method === "HEAD") {
    return res.status(200).end();
  }

  const routeName = "enhanced-session";
  if (req.query.nextauth?.length === 1 && req.query.nextauth[0] === routeName) {
    console.log("auth helooooo");
    try {
      const client = await clientPromise;
      // This is the only place where getServerUser should be used
      // All other instances of getServerUser should be replaced by getEnhancedSession
      const user = await getServerUser(client, req, res);
      const perms = await getUserPerms(user);
      if (user?.application) {
        user.application.resume = user.application.resume ? "exists" : "";
      }
      if (user && (!user.checkInPin || user.checkInPin < 100_000)) {
        // Generate check-in PIN
        for (let i = 0; i < 3; i++) {
          // Retry at most two times.
          try {
            const pin = randomInt(100_000, 999_999);
            await client
              .db()
              .collection<User>("users")
              .updateOne({ email: user.email }, { $set: { checkInPin: pin } });
            user.checkInPin = pin;
            break;
          } catch (_ignored) {
            // Ignore
          }
        }
      }
      return res.status(200).json({
        user,
        perms,
      });
    } catch (e) {
      logger.error(e, `[/api/auth/${routeName}]`);
      console.error("enhanced session", e);
      return res.status(200).json({
        user: null,
        perms: BuiltInRoles["@@base"],
      } satisfies EnhancedSession);
    }
  }

  return NextAuth(req, res, authOptions);
}
