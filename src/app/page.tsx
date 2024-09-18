import './globals.css'
import PS2Carousel from '@/components/PS2Carousel'

// https://beta.nextjs.org/docs/api-reference/segment-config#dynamic
// We read from the database on this route, so this has to be dynamic.
export const dynamic = 'force-dynamic'

export default function LandingPageContent() {
    // Purposely cleaned up this area in favor of a refactor or real carousel implementation
    return (
        <>
            <PS2Carousel />
        </>
    )
}
