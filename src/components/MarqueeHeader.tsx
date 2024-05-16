'use client'

// import { Menu } from 'iconoir-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'
// import { SVGProps } from 'react-html-props'
// import { twMerge } from 'tailwind-merge'

// import { canAccessDashboard, hasPermission } from '@/lib/auth/shared'
import { AppPermissions } from '@/lib/db/models/Role'
import { JsonUser } from '@/lib/db/models/User'

export type MarqueeHeaderProps = {
	// showBadge?: boolean
	user: JsonUser | null
	perms: AppPermissions
}



export const MarqueeHeader = (
	{  user, perms, ...props }: MarqueeHeaderProps,
) => {
	

	return (
        console.log("in header",user),
        <div>
            {!user?.application && (
						<Link href="/apply" >
							Apply
						</Link>
					)}
					{/* {dashboardAccess && (
						<HeaderLink href="/dashboard" onClick={closeMenu}>
							Dashboard
						</HeaderLink>
					)} */}
					{/* <HeaderLink href="/faq" onClick={closeMenu}>FAQ</HeaderLink> */}
					{/* <HeaderLink href="/schedule" onClick={closeMenu}>
						Schedule
					</HeaderLink> */}
					<Link
						href={user ? '/api/auth/signout' : '/api/auth/signin'}
						// onClick={closeMenu}
					>
						{user ? 'Sign Out' : 'Sign In'}
					</Link>
            
        </div>
		
	)
}



