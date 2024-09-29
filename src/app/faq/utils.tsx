import { WithId } from 'mongodb'

import { Accordion } from '@/components/Accordion'
import { WavyPattern } from '@/components/WavyPattern'
import clientPromise from '@/lib/db'
import { FaqModel } from '@/lib/db/models/Faq'
import logger from '@/lib/logger'

import { MarkDownRenderer } from '../admin/post/MarkDownRenderer'

interface FAQProps {
    faqs: readonly FaqModel[] | []
}
const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    // Dynamically calculate the number of columns based on array length
    const columnCount = Math.min(3, Math.ceil(faqs.length / 2)) // Adjust based on how many columns you want

    return (
        <div className={`flex flex-wrap justify-start gap-6 `}>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`w-full ${columnCount === 2 ? 'md:w-[calc(50%-1rem)]' : columnCount === 3 ? 'lg:w-[calc(33.333%-1rem)]' : ''} transition-all duration-300 ease-in-out`}
                >
                    <Accordion
                        className="rounded-md relative z-10 overflow-visible border-l-4 border-blue-600 pl-4 w-full transition-all duration-300 ease-in-out hover:shadow-lg pb-[1px]"
                        arrowClassName=" "
                        summaryClassName="text-xl font-body font-semibold"
                        contentClassName="font-body mb-4"
                        summary={faq.q}
                    >
                        <MarkDownRenderer>{faq.a}</MarkDownRenderer>
                    </Accordion>
                </div>
            ))}
        </div>
    )
}

export function FaqSection({
    faqs,
}: {
    faqs: readonly FaqModel[] | undefined
}) {
    const content = !faqs ? (
        <>Failed loading FAQs. Please try again later.</>
    ) : (
        <>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...faqs]
                    // .sort((a, b) => a._id - b._id)
                    .map((faq) => (
                        <div className="w-full">
                            <Accordion
                                className="rounded-md relative z-10 overflow-visible border-l-4 border-blue-600 pl-4 w-full max-w-full transition-all duration-300 ease-in-out hover:shadow-lg"
                                arrowClassName=" "
                                summaryClassName="text-xl font-body font-semibold"
                                contentClassName="font-body mb-4 w-full"
                                key={`${faq.q}-${faq.a}`}
                                summary={faq.q}
                            >
                                <div className="w-full max-w-md">
                                    <MarkDownRenderer>{faq.a}</MarkDownRenderer>
                                </div>
                            </Accordion>
                        </div>
                    ))}
            </div> */}
            <FAQ faqs={faqs} />
        </>
    )

    // return <PageSection heading="FAQ">{content}</PageSection>
    return (
        <div className="flex flex-col items-center justify-start gap-8 p-8 md:p-16 w-full">
            <h2 className="flex flex-col items-center gap-2 font-heading drop-shadow-hackuta text-white text-4xl">
                Frequently Asked
                <WavyPattern className="w-32" />
            </h2>
            <div className="flex flex-row flex-wrap gap-4 items-start justify-center">
                {content}
            </div>
        </div>
    )
}

export async function getFaqs(): Promise<WithId<FaqModel>[] | undefined> {
    try {
        const client = await clientPromise
        const faqs = await client
            .db()
            .collection<FaqModel>('faqs')
            .find()
            .toArray()

        // Convert the linked list into an array.

        // I have discovered a truly marvelous O(N) solution for this,
        // which the space between the comments is too small to contain.

        // O(N^2) brute force:
        const head = faqs.find(
            (head) =>
                !faqs.find((v) => v.next?.toString() === head._id.toString())
        )
        const ans: typeof faqs = []
        let node = head
        while (node) {
            ans.push(node)
            node = faqs.find((v) => v._id.toString() === node!.next?.toString())
        }
        return ans
    } catch (e) {
        logger.error(e, 'getFaqs')
        return undefined
    }
}
