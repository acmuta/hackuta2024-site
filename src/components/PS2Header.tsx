'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { LocalTime } from './LocalTime'
import { SVGProps } from 'react-html-props'
import { JsonUser } from '@/lib/db/models/User'
import { AppPermissions } from '@/lib/db/models/Role'
import { hasPermission } from '@/lib/auth/shared'
import local from 'next/font/local'

const PS2Font = local({ src: '../../public/fonts/btseps2.woff2' })

export type MarqueeHeaderProps = {
    showBadge?: boolean
    user: JsonUser | null
    perms: AppPermissions
}

export const PS2Header = ({ showBadge, user, perms }: MarqueeHeaderProps) => {
    const pathname = usePathname()
    if (showBadge === undefined) {
        showBadge = pathname === '/'
    }
    return (
        <div className={`${PS2Font.className} mb-2 sticky z-100 top-0`}>
            <div
                className={twMerge(
                    'flex flex-row',
                    'text-white text-4xl',
                    'my-2 py-5 px-10'
                )}
            >
                <div className="flex-wrap flex flex-row flex-1 justify-between no-underline items-center content-start gap-8 gap-y-2 py-4">
                    <a href="/">
                        <img src="/HackUTA_Logo.png"></img>
                    </a>
                    <ul className="flex flex-row items-center gap-44">
                        {/* <div className="flex flex-row items-start gap-3"> */}
                        <HeaderLink href="/dashboard">
                            <NotificationIcon></NotificationIcon>
                            <span>Updates</span>
                        </HeaderLink>
                        {/* </div> */}
                        <HeaderLink
                            href={
                                user ? '/api/auth/signout' : '/api/auth/signin'
                            }
                        >
                            <UserIcon></UserIcon>
                            <span>{user ? 'Sign Out' : 'Sign In'}</span>
                        </HeaderLink>
                        {hasPermission(perms, { administration: {} }) && (
                            <HeaderLink href="/admin">
                                <AdminGear></AdminGear>
                                <span>Admin</span>
                            </HeaderLink>
                        )}
                    </ul>
                    <div className="text-white text-2xl items-center pr-[calc(min(1vw,10px)+100px)]">
                        <LocalTime date={Date.now()}></LocalTime>
                    </div>
                </div>

                {showBadge && (
                    <MLHTrustBadge
                        color="white"
                        imageClassName={twMerge(
                            'md:w-[100px] block w-[50px] absolute max-w-[100px] min-w-[60px] md:right-[min(1vw,10px)] z-50 top-0 right-0'
                        )}
                    />
                )}
            </div>
        </div>
    )
}

export type MLHTrustBadgeColor = MLHTrustBadgeProps['color']

export type MLHTrustBadgeProps = {
    color: 'white' | 'black' | 'gray' | 'red' | 'blue' | 'yellow'
    imageClassName?: string
}

export const MLHTrustBadge = ({
    color,
    imageClassName,
}: MLHTrustBadgeProps) => {
    return (
        <Link
            href={`https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=${color}`}
        >
            <img
                src={`https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-${color}.svg`}
                alt="Major League Hacking 2025 Hackathon Season"
                className={imageClassName}
            />
        </Link>
    )
}

interface HeaderLinkProps {
    href: string
    children: ReactNode
    onClick?: () => void
}

const HeaderLink = ({ href, children, onClick }: HeaderLinkProps) => {
    return (
        <li>
            <Link
                href={href}
                className="flex flex-row text-white items-start gap-3 hover:opacity-85 no-underline transition-all"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    )
}

export type NotificationProps = SVGProps
const NotificationIcon = (props: NotificationProps) => {
    return (
        <svg
            width="51"
            height="51"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58172 0 0 3.58172 0 8V35C0 39.4183 3.58172 43 8 43H34.7155L45.6247 46.0147C46.436 46.2388 47.1444 45.4217 46.8074 44.6504L42.9567 35.8378C42.9853 35.5624 43 35.2829 43 35V8C43 3.58172 39.4183 0 35 0H8Z"
                fill="url(#paint0_linear_5_451)"
            />
            <path
                d="M21 33L21 22"
                stroke="black"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <circle cx="21" cy="10" r="5" fill="black" />
            <defs>
                <linearGradient
                    id="paint0_linear_5_451"
                    x1="23.4466"
                    y1="0"
                    x2="23.4466"
                    y2="46.0523"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8088FF" />
                    <stop offset="1" stopColor="#2551AB" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export type UserProps = SVGProps
const UserIcon = (props: NotificationProps) => {
    return (
        <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_d_5_443)">
                <rect x="4" width="43" height="43" rx="10" fill="#D9D9D9" />
                <path
                    d="M14 30V30C21.3592 33.1996 29.6923 33.3231 37.143 30.3428L38 30"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <ellipse cx="15" cy="15.5" rx="3" ry="3.5" fill="black" />
                <ellipse cx="37" cy="15.5" rx="3" ry="3.5" fill="black" />
            </g>
            <defs>
                <filter
                    id="filter0_d_5_443"
                    x="0"
                    y="0"
                    width="51"
                    height="51"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5_443"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5_443"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

export type AdminProps = SVGProps
const AdminGear = (props: AdminProps) => {
    return (
        <svg
            width="51px"
            height="51px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            {...props}
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z"
                    fill="#ffffff"
                />{' '}
            </g>
        </svg>
    )
}
