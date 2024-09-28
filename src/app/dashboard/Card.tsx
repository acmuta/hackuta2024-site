import React from 'react'
import Link from 'next/link'

interface CardProps {
    children: React.ReactNode
    href?: string
    className?: string
}

const Card: React.FC<CardProps> = ({ children, href, className = '' }) => {
    const cardContent = (
        <div
            className={`p-4 w-full h-fit bg-black/10 backdrop-blur-2xl text-white rounded-lg shadow-md ${className} md:p-8 bg-gradient-to-tl from-black/10 to-violet-400/10 `}
        >
            {children}
        </div>
    )

    return href ? (
        <Link href={href} className="block hover:no-underline">
            {cardContent}
        </Link> 
    ) : (
        cardContent
    )
}

export default Card
