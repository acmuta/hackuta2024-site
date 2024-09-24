import Link from 'next/link'
import { ArrowDown, ArrowRight } from 'iconoir-react'
import Timer from '@/components/Timer'
import { SVGProps } from 'react-html-props'

interface info {
    title: string
    url: string
    content: React.FC<SVGProps>
}
const SubContent = (info: info, i: number) => {
    const ContentComponent = info.content
    return (
        <Link key={i} href={info.url} className="no-underline">
            <div className="cursor-pointer ">
                <div className="border-white min-w-20 min-h-20 hover:scale-110 transition duration-200 md:min-w-32 md:min-h-32 lg:min-h-36 lg:min-w-36">
                    <ContentComponent className="h-full w-full" />
                </div>
                <div className="flex flex-1 justify-center items-center mt-1">
                    <p className="text-sm md:text-lg text-white/60">
                        {info.title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default function PS2Carousel() {
    const SubContentInfo = [
        {
            title: 'Apply',
            url: '/apply',
            content: ApplyIcon,
        },
        {
            title: 'FAQ',
            url: '/faq',
            content: FaqIcon,
        },
        {
            title: 'About Us',
            url: '/about',
            content: AboutIcon,
        },
        {
            title: 'Dashboard',
            url: '/dashboard',
            content: DashboardIcon,
        },
        {
            title: 'Discord',
            url: '/discord',
            content: DiscordIcon,
        },
    ]
    return (
        <div className="block sm:flex h-[70vh] justify-center items-center">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row w-full justify-center lg:items-start items-b sm:items-center sm:pt-0">
                <div className="flex justify-center items-center">
                    <div>
                        <div className="flex flex-1 flex-col border-white border-2 rounded-2xl p-3 ustify-center items-center">
                            <HackUTALogoIcon className="w-40 h-auto sm:min-w-40 lg:min-w-80 p-5"></HackUTALogoIcon>
                            <div className="flex flex-1 justify-center items-center">
                                <ArrowRight
                                    strokeWidth={4}
                                    className="w-[52px] h-[52px] text-white hidden md:hidden lg:inline"
                                />
                                <ArrowDown
                                    strokeWidth={4}
                                    className="w-[52px] h-[52px] text-white lg:hidden"
                                />
                            </div>
                        </div>
                        <div className="flex flex-1 justify-center items-center mt-5">
                            <p className="text-xl text-white/60">
                                Official HackUTA CountDown
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-start items-center lg:flex-col">
                    <div className=" flex gap-5 flex-wrap sm:flex-nowrap items-center lg:justify-start lg:items-baseline justify-center sm:scale-75 px-10 lg:scale-100">
                        {SubContentInfo.map((data, i) => {
                            return SubContent(data, i)
                        })}
                    </div>
                    <div className="flex flex-1 flex-col">
                        <div className="flex items-center mt-5">
                            <Timer />
                        </div>
                        <div className="flex items-center mt-5 justify-center text-white">
                            <Link
                                href={'https://forms.gle/Drc1FNLbuvBA1U29A'}
                                className="no-underline text-white"
                            >
                                <div className="flex flex-row gap-1 justify-center cursor-pointer">
                                    <p>calling for Volunteers</p>
                                    <ArrowRight style={{ rotate: '-45deg' }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ApplyIcon = (props: SVGProps) => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10V33C0 38.5228 4.47715 43 10 43H33C38.5228 43 43 38.5228 43 33V10C43 4.47715 38.5228 0 33 0H10ZM10 28.4999C9.17157 28.4999 8.5 29.1715 8.5 29.9999C8.5 30.8284 9.17157 31.4999 10 31.4999H21.5H34C34.8284 31.4999 35.5 30.8284 35.5 29.9999C35.5 29.1715 34.8284 28.4999 34 28.4999H21.5H10ZM14 17.4999C14 19.4329 12.6569 20.9999 11 20.9999C9.34315 20.9999 8 19.4329 8 17.4999C8 15.5669 9.34315 13.9999 11 13.9999C12.6569 13.9999 14 15.5669 14 17.4999ZM33 20.9999C34.6569 20.9999 36 19.4329 36 17.4999C36 15.5669 34.6569 13.9999 33 13.9999C31.3431 13.9999 30 15.5669 30 17.4999C30 19.4329 31.3431 20.9999 33 20.9999ZM16.4772 11.0375C16.2467 11.8332 15.4148 12.2913 14.6191 12.0608L11.8426 11.2564L8.68043 10.5669C7.87102 10.3904 7.35794 9.59116 7.53444 8.78175C7.71093 7.97235 8.51016 7.45927 9.31957 7.63576L12.531 8.33603C12.5639 8.3432 12.5965 8.35147 12.6289 8.36084L15.4539 9.1793C16.2496 9.40983 16.7078 10.2418 16.4772 11.0375ZM29.3565 8.13503C28.6457 8.56054 28.4145 9.4817 28.84 10.1925C29.2655 10.9033 30.1866 11.1346 30.8974 10.7091L31.1275 10.5714C32.8433 9.5442 34.9591 9.44305 36.7651 10.3018C37.5133 10.6576 38.4082 10.3395 38.7639 9.59136C39.1197 8.84321 38.8016 7.94832 38.0534 7.59256C35.3411 6.30279 32.1635 6.4547 29.5866 7.99733L29.3565 8.13503Z"
                fill="url(#paint0_linear_183_337)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_337"
                    x1="21.5"
                    y1="0"
                    x2="21.5"
                    y2="50.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const FaqIcon = (props: SVGProps) => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.47715 4.47715 0 10 0H33C38.5228 0 43 4.47715 43 10V33C43 38.5228 38.5228 43 33 43H10C4.47715 43 0 38.5228 0 33V10ZM14 15.5C14 16.8807 13.1046 18 12 18C10.8954 18 10 16.8807 10 15.5C10 14.1193 10.8954 13 12 13C13.1046 13 14 14.1193 14 15.5ZM32 18C33.1046 18 34 16.8807 34 15.5C34 14.1193 33.1046 13 32 13C30.8954 13 30 14.1193 30 15.5C30 16.8807 30.8954 18 32 18ZM15 10H10C8.34315 10 7 11.3431 7 13V18C7 19.6569 8.34315 21 10 21H15C16.6569 21 18 19.6569 18 18V13C18 11.3431 16.6569 10 15 10ZM10 8C7.23858 8 5 10.2386 5 13V18C5 20.7614 7.23858 23 10 23H15C17.7614 23 20 20.7614 20 18V17H24V18C24 20.7614 26.2386 23 29 23H34C36.7614 23 39 20.7614 39 18V13C39 10.2386 36.7614 8 34 8H29C26.2386 8 24 10.2386 24 13V15H20V13C20 10.2386 17.7614 8 15 8H10ZM29 10H34C35.6569 10 37 11.3431 37 13V18C37 19.6569 35.6569 21 34 21H29C27.3431 21 26 19.6569 26 18V13C26 11.3431 27.3431 10 29 10ZM14.2425 30.0299C13.7067 29.8959 13.1638 30.2217 13.0299 30.7575C12.8959 31.2933 13.2217 31.8362 13.7575 31.9701C15.1679 32.3228 16.5954 32.5835 18.0309 32.7523C18.0107 32.8315 18 32.9145 18 33V35C18 35.5523 18.4477 36 19 36H21C21.5523 36 22 35.5523 22 35C22 35.5523 22.4477 36 23 36H25C25.5523 36 26 35.5523 26 35V33C26 32.9145 25.9893 32.8315 25.9691 32.7523C27.4046 32.5835 28.8321 32.3228 30.2425 31.9701C30.7783 31.8362 31.1041 31.2933 30.9701 30.7575C30.8362 30.2217 30.2933 29.8959 29.7575 30.0299C24.6642 31.3032 19.3358 31.3032 14.2425 30.0299ZM22.5004 32.9812C23.4889 32.9666 24.477 32.9089 25.4618 32.8081C25.4864 32.8672 25.5 32.932 25.5 33V35C25.5 35.2761 25.2761 35.5 25 35.5H23C22.7239 35.5 22.5 35.2761 22.5 35V33C22.5 32.9937 22.5001 32.9874 22.5004 32.9812ZM22.0001 32.9848C22 32.9848 22 32.9848 21.9999 32.9848L22 33C22 32.9949 22 32.9899 22.0001 32.9848ZM18.5 33C18.5 32.932 18.5136 32.8672 18.5382 32.8081C19.523 32.9089 20.5111 32.9666 21.4996 32.9812C21.4999 32.9874 21.5 32.9937 21.5 33V35C21.5 35.2761 21.2761 35.5 21 35.5H19C18.7239 35.5 18.5 35.2761 18.5 35V33Z"
                fill="url(#paint0_linear_183_334)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_334"
                    x1="21.5"
                    y1="-4.5"
                    x2="21.5"
                    y2="50.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const AboutIcon = (props: SVGProps) => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10V33C0 38.5228 4.47715 43 10 43H33C38.5228 43 43 38.5228 43 33V10C43 4.47715 38.5228 0 33 0H10ZM10 28.4999C9.17157 28.4999 8.5 29.1715 8.5 29.9999C8.5 30.8284 9.17157 31.4999 10 31.4999H21.5H34C34.8284 31.4999 35.5 30.8284 35.5 29.9999C35.5 29.1715 34.8284 28.4999 34 28.4999H21.5H10ZM14 17.4999C14 19.4329 12.6569 20.9999 11 20.9999C9.34315 20.9999 8 19.4329 8 17.4999C8 15.5669 9.34315 13.9999 11 13.9999C12.6569 13.9999 14 15.5669 14 17.4999ZM33 20.9999C34.6569 20.9999 36 19.4329 36 17.4999C36 15.5669 34.6569 13.9999 33 13.9999C31.3431 13.9999 30 15.5669 30 17.4999C30 19.4329 31.3431 20.9999 33 20.9999ZM16.4772 11.0375C16.2467 11.8332 15.4148 12.2913 14.6191 12.0608L11.8426 11.2564L8.68043 10.5669C7.87102 10.3904 7.35794 9.59116 7.53444 8.78175C7.71093 7.97235 8.51016 7.45927 9.31957 7.63576L12.531 8.33603C12.5639 8.3432 12.5965 8.35147 12.6289 8.36084L15.4539 9.1793C16.2496 9.40983 16.7078 10.2418 16.4772 11.0375ZM29.3565 8.13503C28.6457 8.56054 28.4145 9.4817 28.84 10.1925C29.2655 10.9033 30.1866 11.1346 30.8974 10.7091L31.1275 10.5714C32.8433 9.5442 34.9591 9.44305 36.7651 10.3018C37.5133 10.6576 38.4082 10.3395 38.7639 9.59136C39.1197 8.84321 38.8016 7.94832 38.0534 7.59256C35.3411 6.30279 32.1635 6.4547 29.5866 7.99733L29.3565 8.13503Z"
                fill="url(#paint0_linear_183_337)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_337"
                    x1="21.5"
                    y1="0"
                    x2="21.5"
                    y2="50.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const DashboardIcon = (props: SVGProps) => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10V33C0 38.5228 4.47715 43 10 43H33C38.5228 43 43 38.5228 43 33V10C43 4.47715 38.5228 0 33 0H10ZM9.32087 29.2445C8.62751 28.7911 7.6979 28.9857 7.24455 29.6791C6.79119 30.3724 6.98576 31.302 7.67913 31.7554L12.8165 35.1145C18.1387 38.5944 24.885 39.0648 30.6387 36.3572C31.3883 36.0044 31.71 35.1108 31.3572 34.3612C31.0045 33.6117 30.1109 33.29 29.3613 33.6427C24.55 35.9068 18.9087 35.5135 14.4583 32.6035L9.32087 29.2445ZM14 17.4999C14 19.4329 12.6569 20.9999 11 20.9999C9.34315 20.9999 8 19.4329 8 17.4999C8 15.5669 9.34315 13.9999 11 13.9999C12.6569 13.9999 14 15.5669 14 17.4999ZM33 20.9999C34.6569 20.9999 36 19.4329 36 17.4999C36 15.5669 34.6569 13.9999 33 13.9999C31.3431 13.9999 30 15.5669 30 17.4999C30 19.4329 31.3431 20.9999 33 20.9999ZM16.4772 11.0375C16.2467 11.8332 15.4148 12.2913 14.6191 12.0608L11.8426 11.2564L8.68043 10.5669C7.87102 10.3904 7.35794 9.59117 7.53444 8.78176C7.71093 7.97235 8.51016 7.45927 9.31957 7.63577L12.531 8.33603C12.5639 8.3432 12.5965 8.35148 12.6289 8.36084L15.4539 9.17931C16.2496 9.40984 16.7078 10.2418 16.4772 11.0375ZM31.9816 6.24684C31.1533 6.25698 30.49 6.93673 30.5001 7.7651C30.5103 8.59346 31.19 9.25676 32.0184 9.24661L32.2865 9.24333C34.2861 9.21883 36.1655 10.1958 37.2943 11.8466C37.7619 12.5305 38.6954 12.7057 39.3792 12.2381C40.063 11.7705 40.2383 10.8371 39.7707 10.1533C38.0755 7.67408 35.2529 6.20676 32.2497 6.24355L31.9816 6.24684Z"
                fill="url(#paint0_linear_183_336)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_336"
                    x1="21.5"
                    y1="0"
                    x2="21.5"
                    y2="47.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const DiscordIcon = (props: SVGProps) => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.47715 4.47715 0 10 0H33C38.5228 0 43 4.47715 43 10V33C43 38.5228 38.5228 43 33 43H10C4.47715 43 0 38.5228 0 33V10ZM35.3927 29.4429C35.7004 30.2121 35.3263 31.085 34.5571 31.3927L33.7001 31.7355C25.8775 34.8645 17.1284 34.735 9.40191 31.3756C8.64219 31.0453 8.29408 30.1616 8.6244 29.4019C8.95471 28.6422 9.83836 28.2941 10.5981 28.6244C17.5899 31.6643 25.5072 31.7816 32.586 28.9501L33.4429 28.6073C34.2121 28.2996 35.085 28.6737 35.3927 29.4429ZM11 18.9999C12.6569 18.9999 14 17.4329 14 15.4999C14 13.5669 12.6569 11.9999 11 11.9999C9.34315 11.9999 8 13.5669 8 15.4999C8 17.4329 9.34315 18.9999 11 18.9999ZM36 15.4999C36 17.4329 34.6569 18.9999 33 18.9999C31.3431 18.9999 30 17.4329 30 15.4999C30 13.5669 31.3431 11.9999 33 11.9999C34.6569 11.9999 36 13.5669 36 15.4999ZM21.3598 40.4665C21.7307 40.7755 22.2693 40.7755 22.6402 40.4665L25.8781 37.7682C26.5966 37.1694 26.1732 35.9999 25.2379 35.9999H18.762C17.8268 35.9999 17.4033 37.1694 18.1219 37.7682L21.3598 40.4665ZM15.4772 10.0375C15.2467 10.8332 14.4148 11.2913 13.6191 11.0608L10.8426 10.2564L7.68043 9.56689C6.87102 9.39039 6.35794 8.59116 6.53444 7.78175C6.71093 6.97235 7.51016 6.45927 8.31957 6.63576L11.531 7.33603C11.5639 7.3432 11.5965 7.35147 11.6289 7.36084L14.4539 8.1793C15.2496 8.40983 15.7078 9.24176 15.4772 10.0375ZM28.3565 7.13503C27.6457 7.56054 27.4145 8.4817 27.84 9.1925C28.2655 9.9033 29.1866 10.1346 29.8974 9.70907L30.1275 9.57136C31.8433 8.5442 33.9591 8.44305 35.7651 9.30185C36.5133 9.65761 37.4082 9.33951 37.7639 8.59136C38.1197 7.84321 37.8016 6.94832 37.0534 6.59256C34.3411 5.30279 31.1635 5.4547 28.5866 6.99733L28.3565 7.13503Z"
                fill="url(#paint0_linear_183_338)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_338"
                    x1="21.5"
                    y1="0"
                    x2="21.5"
                    y2="52"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const HackUTALogoIcon = (props: SVGProps) => {
    return (
        <svg
            width="250"
            height="250"
            viewBox="0 0 1363 1414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0 1135.85V348.148C0 333.301 8.54251 319.778 21.9504 313.401L207.919 224.953C233.45 212.81 262.921 231.427 262.921 259.7V1013.01C262.921 1028.64 272.375 1042.72 286.843 1048.63L508.082 1139.03C533.392 1149.37 561.111 1130.76 561.111 1103.41V881.224C561.111 865.956 570.14 852.132 584.12 845.994L770.089 764.349C795.514 753.187 824.032 771.811 824.032 799.58V1255.81C824.032 1270.25 815.948 1283.47 803.096 1290.06L577.599 1405.56C567.179 1410.89 554.897 1411.19 544.227 1406.38L22.6453 1170.92C8.86054 1164.7 0 1150.98 0 1135.85Z"
                fill="url(#paint0_linear_183_357)"
            />
            <path
                d="M1362.7 278.148V1065.85C1362.7 1080.7 1354.16 1094.22 1340.75 1100.6L1154.78 1189.05C1129.25 1201.19 1099.78 1182.57 1099.78 1154.3V400.986C1099.78 385.356 1090.32 371.28 1075.86 365.368L854.617 274.97C829.306 264.628 801.587 283.245 801.587 310.587V532.776C801.587 548.045 792.559 561.869 778.578 568.007L592.61 649.651C567.184 660.814 538.667 642.189 538.667 614.421V158.189C538.667 143.75 546.751 130.526 559.603 123.944L785.1 8.44502C795.519 3.10835 807.801 2.80537 818.471 7.62202L1340.05 243.079C1353.84 249.302 1362.7 263.023 1362.7 278.148Z"
                fill="url(#paint1_linear_183_357)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_183_357"
                    x1="387.78"
                    y1="342.083"
                    x2="387.78"
                    y2="2113.91"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_183_357"
                    x1="974.919"
                    y1="7.31043e-05"
                    x2="974.919"
                    y2="2026.41"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D2C85" />
                    <stop offset="1" stopColor="#03B1E0" />
                </linearGradient>
            </defs>
        </svg>
    )
}
