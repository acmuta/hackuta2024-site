'use client'
import { GlareCard } from '@/components/ui/glare-card'
import Image from 'next/image'

const TechTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/techTeam.png'}
                alt=""
                className=" bg-cover"
                width={1024}
                height={780}
                unoptimized
            />
        </div>
    )
}
const CorpTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/experienceTeam.jpg'}
                alt=""
                className=" bg-cover"
                width={1024}
                height={780}
                unoptimized
            />
        </div>
    )
}
const ExpeTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/corporateTeam.jpg'}
                alt=""
                className=" bg-cover"
                width={1024}
                height={780}
                unoptimized
            />
        </div>
    )
}

const MeetTeam = () => {
    const Team = [
        { id: 1, team: 'Advisors' },
        { id: 1, team: 'Tech', compoenent: TechTeamIMG },
        { id: 1, team: 'Logistics' },
        { id: 1, team: 'Creative' },
        { id: 1, team: 'experience', compoenent: ExpeTeamIMG },
        { id: 1, team: 'corporate', compoenent: CorpTeamIMG },
        { id: 1, team: 'Exec' },
    ]
    return (
        <>
            <div className=" w-full flex-col   flex justify-start items-center py-5 gap-5 ">
                <div className=" ">
                    <p className="font-heading text-white text-4xl">
                        Meet the Team
                    </p>
                </div>
                <div className="flex flex-wrap gap-5 px-10 justify-center">
                    {Team.map((data) => {
                        return (
                            <div className="" key={data.id}>
                                <GlareCard
                                    className=""
                                    children={
                                        <>
                                            {data.compoenent ? (
                                                <data.compoenent />
                                            ) : (
                                                <div>
                                                    <Image
                                                        src={
                                                            '/Teams/techteam.png'
                                                        }
                                                        alt=""
                                                        className=" bg-cover"
                                                        width={1024}
                                                        height={780}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    }
                                />
                                <p className="text-2xl text-white font-heading text-center">
                                    {data.team}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MeetTeam
