'use client'
import { GlareCard } from '@/components/ui/glare-card'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/techTeam.png'}
                alt=""
                className="bg-cover"
                width={1024}
                height={780}
                quality={100} // Ensure image is rendered in high quality
                unoptimized
            />
        </div>
    )
}
const CorpTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/corporateTeam.jpg'}
                alt=""
                className="bg-cover"
                width={1024}
                height={780}
                quality={100} // Ensure image is rendered in high quality
                unoptimized
            />
        </div>
    )
}
const ExpeTeamIMG = () => {
    return (
        <div>
            <Image
                src={'/Teams/experienceTeam.jpg'}
                alt=""
                className="bg-cover"
                width={1024}
                height={780}
                quality={100} // Ensure image is rendered in high quality
                unoptimized
            />
        </div>
    )
}

const MeetTeam = () => {
    const Team = [
        { id: 1, team: 'Advisors' },
        { id: 2, team: 'Tech', component: TechTeamIMG },
        { id: 3, team: 'Logistics' },
        { id: 4, team: 'Creative' },
        { id: 5, team: 'Experience', component: ExpeTeamIMG },
        { id: 6, team: 'Corporate', component: CorpTeamIMG },
        { id: 7, team: 'Exec' },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    }

    return (
        <>
            <div className="w-full flex-col flex justify-start items-center py-5 gap-5">
                <div>
                    <p className="font-heading text-white text-4xl">Meet the Team</p>
                </div>
                <Slider {...settings} className="w-full max-w-screen-lg px-10 custom-slider">
                    {Team.map((data) => (
                        <div key={data.id} className="custom-slide">
                            <GlareCard className="flex flex-col items-center">
                                {data.component ? (
                                    <data.component />
                                ) : (
                                    <div>
                                        <Image
                                            src={'/Teams/techteam.png'}
                                            alt=""
                                            className="bg-cover"
                                            width={1024}
                                            height={780}
                                            quality={100} // Ensure image is rendered in high quality
                                        />
                                    </div>
                                )}
                                <p className="text-2xl text-white font-heading text-center">
                                    {data.team}

                                </p>
                                <p className="text-md text-white font-heading text-center">
                                    Hi we're coporate and we're cool

                                </p>
                            </GlareCard>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
                .custom-slider .slick-slide {
                    transition: transform 0.5s ease-in-out;
                    opacity: 0.6;
                    transform: scale(0.8);
                    z-index: 1;
                    position: relative;
                }
                .custom-slider .slick-center {
                    transform: scale(1.2) translateY(-20px);
                    z-index: 3; /* Ensure middle image is always on top */
                    opacity: 1;
                }
                .custom-slider .slick-slide img {
                    display: block;
                    margin: 0 auto;
                    image-rendering: auto; /* Prevent quality loss */
                }
                .custom-slider .slick-slide.slick-active {
                    pointer-events: none;
                }
                .custom-slider .slick-prev,
                .custom-slider .slick-next {
                    z-index: 4;
                }
                .custom-slider .slick-prev:before,
                .custom-slider .slick-next:before {
                    font-size: 30px;
                    color: white;
                }
                .custom-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    )
}

export default MeetTeam
