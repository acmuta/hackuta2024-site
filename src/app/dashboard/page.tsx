import classNames from 'classnames'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { Box } from '@/components/Box'
import { getEnhancedSession } from '@/lib/utils/server'

import { canAccessDashboard } from '@/lib/auth/shared'

export default async function Dashboard() {
    const { user, perms } = getEnhancedSession(headers())
    if (!user) {
        redirect('/api/auth/signin?callbackUrl=%2Fdashboard')
    } else if (!canAccessDashboard(user, perms)) {
        redirect('/apply')
    }

    return (
        <Box
            direction="column"
            className={classNames('pagePadding w-full text-white text-2xl')}
            style={{ flex: 1 }}
            gap="1rem"
        >
            <div className="text-center p-10">
                <p>
                    {' '}
                    Thanks for applying! Your application is currently being
                    reviewed. You will receive an email once your application
                    has been approved.{' '}
                </p>
            </div>
            <Box
                direction="row"
                alignItems="start"
                wrap="wrap"
                className={classNames('flex-1 gap-8')}
            ></Box>
        </Box>
    )
}
