"use client"

import { Menu } from "iconoir-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

import { canAccessDashboard, hasPermission } from "@/lib/auth/shared"
import { AppPermissions } from "@/lib/db/models/Role"

export type MarqueeHeaderProps = {
  showBadge?: boolean
  perms: AppPermissions
}


export const PS2Header = ({
  showBadge,
}: MarqueeHeaderProps) => {
  const pathname = usePathname()
  if (showBadge === undefined) {
    showBadge = pathname === "/"
  }

  return (
    <div>
      {showBadge && (<MLHTrustBadge/>)}
    </div>
  );
}

export const MLHTrustBadge = () => {
  return (
    <div style={{position: 'absolute', top:0, right: 0}}>
      <Link href={`https://mlh.io/seasons/2025/events`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/MLH-badge.png" alt="Major League Hacking 2025 Hackathon Season"/>
      </Link>
    </div>
  )
}
