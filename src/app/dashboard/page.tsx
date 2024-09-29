import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { getEnhancedSession } from '@/lib/utils/server'

import { canAccessDashboard } from '@/lib/auth/shared'
import Cards from './Cards'
import Users from './score'

// https://beta.nextjs.org/docs/api-reference/segment-config#dynamic
// We read from the database on this route, so this has to be dynamic.
export const dynamic = 'force-dynamic'

export default async function Dashboard() {
    const { user, perms } = getEnhancedSession(headers())
    if (!user) {
        redirect('/api/auth/signin?callbackUrl=%2Fdashboard')
    } else if (!canAccessDashboard(user, perms)) {
        redirect('/apply')
    }

    return (
        <div
            className={
                'flex flex-row flex-wrap gap-3 justify-center items-start  p-3  '
            }
        >
            <Cards />
            {user ? <Users /> : <></>}
        </div>
    )
}
