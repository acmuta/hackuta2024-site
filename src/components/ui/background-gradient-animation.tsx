'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = 'rgb(0, 0, 0)',
    gradientBackgroundEnd = 'rgb(0, 8, 41)',
    firstColor = '74, 60, 227',
    secondColor = '18, 113, 255',
    thirdColor = '74, 60, 227',
    fourthColor = '18, 113, 255',
    fifthColor = '18, 113, 255',
    pointerColor = '140, 100, 255',
    size = '20%',
    blendingValue = 'hard-light',
    children,
    className,
    containerClassName,
}: {
    gradientBackgroundStart?: string
    gradientBackgroundEnd?: string
    firstColor?: string
    secondColor?: string
    thirdColor?: string
    fourthColor?: string
    fifthColor?: string
    pointerColor?: string
    size?: string
    blendingValue?: string
    children?: React.ReactNode
    className?: string
    interactive?: boolean
    containerClassName?: string
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null)

    const [curX, setCurX] = useState(0)
    const [curY, setCurY] = useState(0)
    const [tgX, setTgX] = useState(0)
    const [tgY, setTgY] = useState(0)
    useEffect(() => {
        document.body.style.setProperty(
            '--gradient-background-start',
            gradientBackgroundStart
        )
        document.body.style.setProperty(
            '--gradient-background-end',
            gradientBackgroundEnd
        )
        document.body.style.setProperty('--first-color', firstColor)
        document.body.style.setProperty('--second-color', secondColor)
        document.body.style.setProperty('--third-color', thirdColor)
        document.body.style.setProperty('--fourth-color', fourthColor)
        document.body.style.setProperty('--fifth-color', fifthColor)
        document.body.style.setProperty('--pointer-color', pointerColor)
        document.body.style.setProperty('--size', size)
        document.body.style.setProperty('--blending-value', blendingValue)
    }, [])

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return
            }
            setCurX(curX + (tgX - curX) / 20)
            setCurY(curY + (tgY - curY) / 20)
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`
        }

        move()
    }, [tgX, tgY])

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect()
            setTgX(event.clientX - rect.left)
            setTgY(event.clientY - rect.top)
        }
    }

    const [isSafari, setIsSafari] = useState(false)
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    }, [])

    return (
        <div
            className={cn(
                'min-h-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
                containerClassName
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn('min-h-screen', className)}>{children}</div>
            <div
                className={cn(
                    'gradients-container min-h-screen w-full blur-lg absolute',
                    isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
                )}
            >
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[-700px] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-first`,
                        `opacity-90`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[-600px] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(30%-400px)]`,
                        `animate-second`,
                        `opacity-855`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[-500px] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(30%+200px)]`,
                        `animate-third`,
                        `opacity-90`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[-600px] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(30%-400px)]`,
                        `animate-fourth`,
                        `opacity-70`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[-400px] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-500px)_calc(50%+500px)]`,
                        `animate-fifth`,
                        `opacity-85`
                    )}
                ></div>
            </div>
        </div>
    )
}
