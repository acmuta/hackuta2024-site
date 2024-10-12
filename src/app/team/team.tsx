'use client'
import React, { useRef } from 'react'
import { GlareCard } from '@/components/ui/glare-card'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TechTeamIMG = () => (
    <Image
        src="/Teams/techTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)

const CorpTeamIMG = () => (
    <Image
        src="/Teams/corporateTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)

const ExpeTeamIMG = () => (
    <Image
        src="/Teams/experienceTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)

const CreatTeamIMG = () => (
    <Image
        src="/Teams/creativeTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)

const AdvisorIMG = () => (
    <Image
        src="/Teams/advisorTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)
const LogisticsTeamIMG = () => (
    <Image
        src="/Teams/logisticsTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)
const ExeTeamIMG = () => (
    <Image
        src="/Teams/exeTeam.svg"
        alt=""
        className="bg-cover"
        width={1024}
        height={780}
        quality={100}
    />
)

const MeetTeam = () => {
    const sliderRef = useRef(null)

    const Team = [
        {
            id: 1,
            team: 'Executive',
            component: ExeTeamIMG,
            description:
                'We oversee the operations of HackUTA and we take care of different organizing teams. We offer a helping hand to all our directors using our previous experience as directors',
        },
        {
            id: 2,
            team: 'Advisors',
            component: AdvisorIMG,
            description:
                'Hi y’all, I’m Patrick, but most people call me Pchang. I helped start HackUTA back in 2022, and have been here helping the event grow to what it is today! I’m really here just for Bobby to take good photos of me but if you want to catch an L in pickleball let me know',
        },
        {
            id: 3,
            team: 'Tech',
            component: TechTeamIMG,
            description:
                "The Tech Team: Turning coffee (except for Sandro) into code and ideas into reality. We may or may not have tried to fix a toaster with JavaScript—spoiler alert: it didn’t work. But when it comes to HackUTA, we've got your back!",
        },
        {
            id: 4,
            team: 'Logistics',
            component: LogisticsTeamIMG,
            description:
                'The Logistics team is the backbone of HackUTA! We take care of so many things from delicious food, the amazing venue, tasty snacks, and so much more! Every part of HackUTA involves Logistics and we love making HackUTA come to life!',
        },
        {
            id: 5,
            team: 'Creative',
            component: CreatTeamIMG,
            description:
                'From the makers of “Code Me Everything” the creative team of HackUTA 2024 is proud to bring you an exciting and fresh theme for those in love with nostalgia. HackUTA: Turn of the Millennium.',
        },
        {
            id: 6,
            team: 'Corporate',
            component: CorpTeamIMG,
            description:
                'Raining money on the HackUTA team, Milton style. May, Izzy, Dev, Yash, Bridge, Thanh, and us from corporate are so excited and PUMPED to see you serve y2k builds and inspired projects, get out there and MAKE IT RAIN',
        },
        {
            id: 1,
            team: 'Experience',
            component: ExpeTeamIMG,
            description:
                'The Experience Team is dedicated to making every moment of HackUTA extraordinary and memorable! We host our mini-events, add flair with fun décor, and keep the good times rolling. Give us a shout if you ever need a helping hand. We are here to make your EXPERIENCE here at HackUTA the best it can possibly be!',
        },
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
            <div className="w-full flex-col flex justify-center  items-center py-5 gap-5 px-3">
                <div>
                    <p className="font-heading text-white text-4xl">
                        Meet the Team
                    </p>
                </div>
                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="flex justify-center items-center custom-slider w-[85%] lg:w-[95%] lg:max-w-screen-lg md:scale-100"
                    slidesToShow={3}
                >
                    {Team.map((data) => (
                        <div
                            key={data.id}
                            className="flex justify-center items-center scale-[0.8] md:scale-100"
                        >
                            <GlareCard className="flex flex-col items-center justify-center w-fit">
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
                                <p className="text-xs text-white font-heading text-center pb-1 pl-1 pr-1">
                                    {data.description}
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
