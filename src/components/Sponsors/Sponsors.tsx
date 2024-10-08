'use client'
import Image from 'next/image'
import { sponsorsList } from './sponsorsList'
import './sponsor.module.css'

const Sponsors = () => {
    return (
        <div className="flex justify-center items-center flex-col mb-10">
            <p className="text-white font-heading text-4xl mb-8 text-neon">
                Our Sponsors
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 px-10">
                {sponsorsList.map((data, index) => (
                    <div
                        className="bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-600 min-h-[150px] min-w-[150px] rounded-lg flex justify-center items-center p-5 shadow-[0_0_15px_5px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        key={index}
                    >
                        <div className="flex justify-center items-center p-5 rounded-xl bg-white hover:animate-flicker">
                            <Image
                                src={data.imageUrl}
                                width={100}
                                height={100}
                                className="object-contain"
                                alt="sponsor"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors
