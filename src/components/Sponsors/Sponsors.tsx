'use client'
import Image from 'next/image'
import { sponsorsList } from './sponsorsList'

const Sponsors = () => {
    return (
        <div className="flex justify-center items-center flex-col ">
            <p className="text-white font-heading text-4xl my-3">Sponsor</p>
            <div className="flex flex-wrap flex-1  justify-center items-center gap-5 px-20">
                {sponsorsList.map((data, index) => {
                    return (
                        <div className="bg-white min-h-32 min-w-32 rounded-lg flex-1 flex justify-center items-center" key={index}>
                            <div className="">
                                <div className="p-5 rounded-md  backdrop-blur-md ">
                                    <Image
                                        src={data.imageUrl}
                                        width={100}
                                        height={0}
                                        // unoptimized
                                        className=""
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sponsors
