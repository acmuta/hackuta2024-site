import { HackathonCalendar } from '@/components/Schedule/calendar'
import { Program } from '@acmuta/planby'
export const revalidate = 10

export function Calendar({ events }: { events: Program[] }) {
    const startDate = new Date('2024-10-12T08:00:00.000-05:00')
    const endDate = new Date('2024-10-13T17:00:00.000-05:00')

    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8 md:p-16 w-full">
            <section className="flex flex-col self-start gap-2">
                <h2 className="flex flex-col items-center gap-2 font-heading text-white text-4xl">
                    Schedule
                </h2>
                <div className="font-rhd flex flex-nowrap text-white tracking-wider uppercase">
                    <HackathonCalendar
                        startDate={startDate}
                        endDate={endDate}
                        events={events}
                    />
                </div>
            </section>
        </div>
    )
}
