'use client'
import React, { useRef } from 'react'
import { GlareCard } from '@/components/ui/glare-card'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TechTeamIMG = () => (
    <Image
        src="/Teams/techTeam.png"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)

const CorpTeamIMG = () => (
    <Image
        src="/Teams/corporateTeam.png"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)

const ExpeTeamIMG = () => (
    <Image
        src="/Teams/experienceTeam.jpg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)

const CreatTeamIMG = () => (
    <Image
        src="/Teams/creativeTeam.jpg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)

const AdvisorIMG = () => (
    <Image
        src="/Teams/advisorTeam.jpg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)
const LogisticsTeamIMG = () => (
    <Image
        src="/Teams/logisticsTeam.png"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)
const ExeTeamIMG = () => (
    <Image
        src="/Teams/exeTeam.png"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
        unoptimized
    />
)


const MeetTeam = () => {
    const sliderRef = useRef(null)

    const Team = [
        { id: 1, team: 'Advisors', component: AdvisorIMG },
        { id: 2, team: 'Tech', component: TechTeamIMG },
        { id: 3, team: 'Logistics', component: LogisticsTeamIMG },
        { id: 4, team: 'Creative', component: CreatTeamIMG },
        { id: 5, team: 'Experience', component: ExpeTeamIMG },
        { id: 6, team: 'Corporate', component: CorpTeamIMG },
        { id: 7, team: 'Exec', component: ExeTeamIMG },
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

    //   useEffect(() => {
    //     const handleResize = () => {
    //       if (sliderRef.current) {
    //         sliderRef.current.slickGoTo(sliderRef.current.innerSlider.state.currentSlide);
    //       }
    //     };

    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

    return (
        <>
            <div className="w-full flex-col flex justify-start items-center py-5 gap-5">
                <div>
                    <p className="font-heading text-white text-4xl">
                        Meet the Team
                    </p>
                </div>
                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="flex justify-center items-center w-full max-w-screen-lg custom-slider "
                    slidesToShow={3}
                >
                    {Team.map((data) => (
                        <div key={data.id} className="custom-slide">
                            <GlareCard className="flex flex-col items-center">
                                {data.component ? (
                                    <data.component />
                                ) : (
                                    <Image
                                        src="/Teams/techteam.png"
                                        alt=""
                                        className="bg-cover"
                                        width={1024}
                                        height={780}
                                        quality={100}
                                    />
                                )}
                                <p className="text-2xl text-white font-heading text-center">
                                    {data.team}
                                </p>
                                <p className="text-md text-white font-heading text-center">
                                    Hi we're corporate and we're cool
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
                    transform: scale(1);
                    z-index: 3;
                    opacity: 1;
                }
                .custom-slider .slick-slide img {
                    display: block;
                    margin: 0 auto;
                    image-rendering: auto;
                }
                .custom-slider .slick-slide.slick-active {
                    pointer-events: auto;
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
