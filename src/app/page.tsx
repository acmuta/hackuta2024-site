import './globals.css'
import PS2Carousel from '@/components/PS2Carousel'
import Schedule from './schedule/page'
import Sponsors from '@/components/Sponsors/Sponsors'
import FAQ from './faq/page'
import AboutUs from './about/page'

// https://beta.nextjs.org/docs/api-reference/segment-config#dynamic
// We read from the database on this route, so this has to be dynamic.
export const dynamic = 'force-dynamic'

export default function LandingPageContent() {
    // Purposely cleaned up this area in favor of a refactor or real carousel implementation
    return (
        <>
            <PS2Carousel />
            <div className="py-5">
                <Schedule />
            </div>
            <div className="py-5" id="faq-section">
                <FAQ />
            </div>
            <div className="py-5" id="aboutUs-section">
                <AboutUs />
            </div>
            <div className="py-5">
                <Sponsors />
            </div>
        </>
    )
}
