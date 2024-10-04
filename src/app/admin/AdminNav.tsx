'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { hasRoutePermission } from '@/lib/auth/shared'
import { AppPermissions } from '@/lib/db/models/Role'
import { twJoin } from 'tailwind-merge'

const Links = {
    '/admin': 'Root',
    '/admin/applications': 'Applications',
    '/admin/email': 'Email',
    '/admin/faq': 'FAQ',
    '/admin/post': 'Post',
    '/admin/role': 'Role',
    '/admin/scanner': 'Scanner',
    '/admin/schedule': 'Schedule',
    // '/admin/shop': 'Shop',
    '/admin/user': 'User',
}

export interface AdminNavProps {
    perms: AppPermissions
}

export function AdminNavBar({ perms }: AdminNavProps) {
    const selectedSegment = useSelectedLayoutSegment()
    const selectedPath = `/admin${selectedSegment ? `/${selectedSegment}` : ''}`
    return (
        <nav className="flex flex-wrap w-full gap-4 lg:flex-col">
            {Object.entries(Links)
                .filter(([path]) => hasRoutePermission(path, perms))
                .map(([path, name]) => (
                    <Link
                        key={path}
                        href={path}
                        className={twJoin(
                            'flex h-9 w-40 items-center justify-center rounded-lg transition-colors',
                            selectedPath === path
                                ? 'bg-white text-black hover:bg-gradient-to-br hover:from-[#5b5b5b] hover:to-[#7a7a7a]'
                                : 'bg-black to-[#6a6a6a] text-white hover:bg-gradient-to-br hover:from-[#5b5b5b] hover:to-[#7a7a7a]'
                        )}
                        prefetch={false}
                    >
                        <span className="ml-2 text-sm font-medium">{name}</span>
                    </Link>
                ))}
        </nav>
    )
}
