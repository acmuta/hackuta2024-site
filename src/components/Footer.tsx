import { ReactNode } from 'react'
import { DivProps, HtmlProps } from 'react-html-props'
import { twJoin } from 'tailwind-merge'

import local from 'next/font/local'

const PS2Font = local({ src: '../../public/fonts/btseps2.woff2' })

export type FooterProps = HtmlProps & {
    children?: ReactNode
}

export type FooterNavProps = DivProps & {
    title: ReactNode
    links: ReactNode[]
    linkClassName?: string
}

export const Footer = ({ children, className, ...props }: FooterProps) => {
    return (
        <footer
            className={twJoin(
                'flex flex-row flex-wrap justify-between items-center ',
                'text-white',
                className
            )}
            {...props}
        >
            <div className="flex justify-around w-full">{children}</div>
        </footer>
    )
}

export const FooterNav = ({
    title,
    links,
    linkClassName,
    ...props
}: FooterNavProps) => {
    return (
        <section
            className={twJoin(
                'flex flex-col justify-center items-center gap-2'
            )}
            {...props}
        >
            <h3
                className={`${PS2Font.className} text-3xl md:text-5xl lg:text-6xl`}
            >
                {title}
            </h3>
            <ul className={linkClassName}>
                {links.map((link, index) => (
                    <li className={'font-body'} key={index}>
                        {link}
                    </li>
                ))}
            </ul>
        </section>
    )
}
