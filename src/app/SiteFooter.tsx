import { Discord, Instagram, Safari } from 'iconoir-react'
import Link from 'next/link'

import { Footer, FooterNav } from '@/components/Footer'
// import Image from 'next/image'

export default function SiteFooter() {
    return (
        <div>
            <div className={'flex flex-col mt-40 sm:mt-0 py-20 lg:px-32 z-100'}>
                <Footer>
                    <div
                        className={`flex text-white sm:justify-around md:items-baseline flex-col md:flex-row lg:flex-row md:flex-1 md:w-screen gap-5 sm:gap-0 lg:justify-center lg:gap-52`}
                    >
                        <FooterNav
                            title={'Socials'}
                            linkClassName={`flex flex-row gap-1 text-white`}
                            links={[
                                <Link
                                    key="discord"
                                    href={'/discord'}
                                    className="no-underline text-white"
                                >
                                    <Discord
                                        width={'32px'}
                                        aria-label="HackUTA 2024 Discord"
                                    />
                                </Link>,
                                <Link
                                    key="instagram"
                                    href={'https://instagram.com/hack.uta'}
                                    className="no-underline text-white"
                                >
                                    <Instagram
                                        width={'32px'}
                                        aria-label="Instagram @hack.uta"
                                    />
                                </Link>,
                                // <Link key="twitter" href={'https://twitter.com/utadatathon'}>
                                // 	<Twitter width={'32px'} aria-label="Twitter @utadatathon" />
                                // </Link>,
                            ]}
                        />
                        <FooterNav
                            title={'ACM'}
                            linkClassName={'flex flex-row gap-1'}
                            links={[
                                <Link
                                    key="website"
                                    href={'https://acm.uta.edu'}
                                    className="no-underline text-white"
                                >
                                    <Safari
                                        width={'32px'}
                                        aria-label="ACM UTA Website"
                                    />
                                </Link>,
                                <Link
                                    key="discord"
                                    href={'https://discord.gg/nwUCt6tfCK'}
                                    className="no-underline text-white"
                                >
                                    <Discord
                                        width={'32px'}
                                        aria-label="ACM UTA Discord"
                                    />
                                </Link>,
                                <Link
                                    key="instagram"
                                    href={'https://instagram.com/acmuta'}
                                    className="no-underline text-white"
                                >
                                    <Instagram
                                        width={'32px'}
                                        aria-label="Instagram @acmuta"
                                    />
                                </Link>,
                            ]}
                        />
                        <FooterNav
                            title={'Policy'}
                            links={[
                                <Link
                                    key="acm"
                                    href={'https://www.acm.org/code-of-ethics'}
                                    className="no-underline text-white"
                                >
                                    ACM Code of Ethics
                                </Link>,
                                <Link
                                    key="mlh"
                                    href={'https://hackp.ac/coc'}
                                    className="no-underline text-white"
                                >
                                    MLH Code of Conduct
                                </Link>,
                            ]}
                        />
                    </div>
                </Footer>
            </div>
            {/* <div className="z-90">
                <Image
                    height={0}
                    width={0}
                    className="h-[50%] w-full mx-auto px-4 sm:px-20 relative"
                    src={'Assets/logo.svg'}
                    alt=""
                />
            </div> */}
        </div>
    )
}
