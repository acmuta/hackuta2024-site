import { ReactNode } from 'react'
import { DivProps, HtmlProps, SVGProps } from 'react-html-props'
import { twJoin } from 'tailwind-merge'

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
                'flex flex-row flex-wrap justify-between items-center',
                'text-hackuta-beige',
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
        <section className={twJoin('flex')} {...props}>
            <h3 className={'font-heading text-4xl'}>{title}</h3>
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
