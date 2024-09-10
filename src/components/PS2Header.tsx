'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AppPermissions } from '@/lib/db/models/Role'

export type MarqueeHeaderProps = {
    showBadge?: boolean
    perms: AppPermissions
}

export const PS2Header = ({ showBadge }: MarqueeHeaderProps) => {
    const pathname = usePathname()
    if (showBadge === undefined) {
        showBadge = pathname === '/'
    }

    return (
        <div style={{ position: 'relative', height: '60px' }}>
            <img src="/HackUTA_Logo.png"></img>
            {showBadge && <MLHTrustBadge />}
        </div>
    )
}

export const MLHTrustBadge = () => {
    return (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <Link href={`https://mlh.io/seasons/2025/events`}>
                <img
                    src="/MLH-badge.png"
                    alt="Major League Hacking 2025 Hackathon Season"
                />
            </Link>
        </div>
    )
}
