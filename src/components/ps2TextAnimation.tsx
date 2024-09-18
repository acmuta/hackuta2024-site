'use client'
import React, { useEffect, useRef, useState } from 'react'
// import soundFile from '../../public/sounds/ps2sound.mp3'
import useSound from 'use-sound'
import local from 'next/font/local'
const PS2Font = local({ src: '../../public/fonts/btseps2.woff2' })

const AudioPlayer = ({ src }: { src: string }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // audioRef.current?.play();
    }, [])
    useEffect(() => {
        audioRef.current = new Audio(src)
        audioRef.current.onended = () => setIsPlaying(false)

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [src])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <button
            onClick={togglePlay}
            className={'bg-white/20 h-10 w-10 absolute left-10 bottom-10'}
        >
            {isPlaying ? 'Pause' : 'Play'}
        </button>
    )
}

const Ps2TextAnimation: React.FC = () => {
    const [play] = useSound('/sounds/ps2sound.mp3')
    const [isVisible, setIsVisible] = useState(true)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        play() // Play the sound when the component mounts

        // Start fading out after 3 seconds (adjust as needed)
        const fadeOutTimer = setTimeout(() => {
            setOpacity(0)
        }, 3000)

        // Hide the component after fade-out (500ms for transition + 100ms buffer)
        const hideTimer = setTimeout(() => {
            setIsVisible(false)
        }, 3900)

        // Cleanup timers
        return () => {
            clearTimeout(fadeOutTimer)
            clearTimeout(hideTimer)
        }
    }, [play])

    if (!isVisible) return null

    return (
        <div
            className={`absolute bg-black h-screen w-full flex z-30`}
            style={{
                opacity: opacity,
                transition: 'opacity 0.8s ease-out',
            }}
        >
            <AudioPlayer src="/sounds/ps2sound.mp3" />
            <h2 className="ps2 h-full w-full flex flex-1 justify-center items-center">
                <div
                    className={`${PS2Font.className}"flex flex-1 w-full text-center text-3xl sm:text-3xl md:text-[80px] lg:text-[130px] justify-center --font-rhd`}
                >
                    <p>HackUTA 2024</p>
                </div>
            </h2>
        </div>
    )
}

export default Ps2TextAnimation
