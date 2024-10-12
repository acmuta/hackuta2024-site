import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { getEnhancedSession } from '@/lib/utils/server'
// import { ApplicationForm } from './ApplicationForm'

export default function Home() {
    const { user } = getEnhancedSession(headers())
    if (!user) {
        redirect('/api/auth/signin?callbackUrl=%2Fapply')
    } else if (user.applied) {
        redirect('/dashboard')
    } else {
        return (
            <p style={{ color: 'white', textAlign: 'center' }}>
                Applications are now closed. Thanks for you interest in HackUTA
                6!
            </p>
        )
    }
}
