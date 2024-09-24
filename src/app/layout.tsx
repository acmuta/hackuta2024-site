import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import './globals.css'

import {
    Atkinson_Hyperlegible,
    Nunito_Sans,
    Red_Hat_Display,
    Red_Hat_Mono,
} from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Box } from '@/components/Box'
import { PS2Header } from '@/components/PS2Header'
import { getEnhancedSession, siteName } from '@/lib/utils/server'

import { headers } from 'next/headers'
// import { ViewAsRoleBanner } from "./admin/role/ViewAsRoleBanner"
import SiteFooter from './SiteFooter'
import { Viewport, Metadata } from 'next'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

const nunito = Nunito_Sans({
    subsets: ['latin-ext'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-nunito',
})
const rhd = Red_Hat_Display({
    subsets: ['latin-ext'],
    weight: ['900'],
    variable: '--font-rhd',
})

const atkinson = Atkinson_Hyperlegible({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
    variable: '--font-atkinson',
})
const rhm = Red_Hat_Mono({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
    variable: '--font-rhm',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: siteName,
    description: siteName,
    icons: [
        {
            rel: 'icon',
            type: 'image/svg',
            sizes: '32x32',
            url: '/favicon-32x32.svg',
        },
        {
            rel: 'icon',
            type: 'image/svg',
            sizes: '16x16',
            url: '/favicon-16x16.svg',
        },
    ],
    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = decodeURIComponent(
        headers().get('x-middleware-pathname') ?? ''
    )
    const { user, perms } = getEnhancedSession(headers())

    return (
        <html
            lang="en"
            className={twMerge(
                rhd.variable,
                atkinson.variable,
                rhm.variable,
                nunito.variable
            )}
        >
            <head>
                {(pathname || '/') === '/' && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Event',
                                name: 'HackUTA 2024',
                                image: 'https://hackuta.org/android-chrome-512x512.png',
                                url: 'https://hackuta.org',
                                location: {
                                    type: 'Place',
                                    address:
                                        '501 W. Mitchell, Arlington, TX 76010',
                                    name: 'SWSH',
                                },
                                description:
                                    "HackUTA, one of North Texas' largest hackathons, is a 24-hour marathon for students to design, develop, and pitch a project from scratch.",
                                organizer: {
                                    type: 'Organization',
                                    name: 'The Association for Computing Machinery at UTA',
                                    url: 'https://acm.uta.edu',
                                },
                                startDate: '2024-10-12',
                                endDate: '2024-10-13',
                            }),
                        }}
                    />
                )}
            </head>
            <Box as="body" direction="column" className="p-0 m-0 min-h-screen">
                {/* <ViewAsRoleBanner user={user} /> */}

                <BackgroundGradientAnimation className="z-0">
                    <div className="relative z-50">
                        <PS2Header user={user} perms={perms} />
                        <main className="flex-[1] z-100 font-body">{children}</main>
                        <SiteFooter />
                    </div>
                </BackgroundGradientAnimation>
            </Box>
        </html>
    )
}
