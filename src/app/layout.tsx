import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-teal/theme.css'
import './globals.css'

import { Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Box } from '@/components/Box'
import { PS2Header } from '@/components/PS2Header'
import { getEnhancedSession, siteName } from '@/lib/utils/server'

import { headers } from 'next/headers'
import SiteFooter from './SiteFooter'
import { Viewport, Metadata } from 'next'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-nunito',
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
        <html lang="en" className={twMerge(nunito.className)}>
            {/* <html lang="en" className={twMerge(nunito.variable)}> */}
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
                <BackgroundGradientAnimation className="z-0 h-screen">
                    <div className="relative z-50 h-full overflow-y-auto">
                        <PS2Header user={user} perms={perms} />
                        <main className="flex-[1] z-100">{children}</main>
                        <SiteFooter />
                    </div>
                </BackgroundGradientAnimation>
            </Box>
        </html>
    )
}
