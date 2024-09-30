'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export default function Component() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date('2024-10-12T08:00:00').getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                )
                const seconds = Math.floor((difference % (1000 * 60)) / 1000)

                setTimeLeft({ days, hours, minutes, seconds })
            } else {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="p-8 rounded-2xl backdrop-blur-3xl shadow-lg text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div
                            className="text-4xl font-bold mb-2"
                            aria-live="polite"
                        >
                            {value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm uppercase tracking-wide">
                            {unit}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
