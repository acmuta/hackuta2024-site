'use client'
import React, { useRef, useState } from 'react'

const InfoBox = ({
    isOpen,
    toggleOpen,
}: {
    isOpen: boolean
    toggleOpen: () => void
}) => {
    return (
        <div
            className={`absolute top-7 left-7 bg-white rounded-lg shadow-lg border border-gray-300 text-left transition-all duration-300 ${
                isOpen ? 'h-auto opacity-100' : 'h-[40px] opacity-90'
            }`}
            style={{
                width: '200px',
                overflow: 'hidden',
                zIndex: 2,
            }}
        >
            {/* Header with Toggle Button */}
            <div
                className="flex items-center justify-between p-3 cursor-pointer "
                onClick={toggleOpen}
            >
                <h3 className="text-xs font-bold text-black flex items-center">
                    {/* Title will only be visible if the box is open */}
                    PARKING ZONES
                </h3>
                {/* Toggle Button */}
                <button className="ml-2 w-4 h-4 flex items-center justify-center rounded-full bg-slate-950 hover:bg-gray-400 text-white text-xs">
                    {isOpen ? '−' : '+'}
                </button>
            </div>

            {/* Content will be shown or hidden based on isOpen */}
            <div
                className={`transition-all duration-300 p-3 ${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}
            >
                {/* General Parking Row */}
                <div className="flex items-center mt-2 text-xs">
                    <div className="w-3 h-3 bg-[#312f92] rounded-full mr-2"></div>
                    <span className="text-black">General Parking</span>
                </div>
                {/* ADA Accessible Row */}
                <div className="flex items-center mt-1 text-xs">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-black">ADA Accessible</span>
                </div>

                <p className="text-xs text-black mt-2">
                    <strong>Permits required AT ALL TIMES</strong>
                </p>

                <p className="text-xs text-black mt-2">
                    Please make sure you have registered your vehicle to park
                    prior to coming to campus. Vehicles parked outside of the
                    designated areas without the correct permit may be cited or
                    towed at the owner's expense.
                </p>
            </div>
        </div>
    )
}

const Map = ({ src }: { src?: string }) => {
    const imageRef = useRef<HTMLImageElement>(null) // Reference to the image element

    const [scale, setScale] = useState(2.0) // Adjust initial scale for better fit
    const [position, setPosition] = useState({ x: -150.37, y: 50.5926 }) // Initial position

    const [isDragging, setIsDragging] = useState(false) // State to check if the image is being dragged
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 }) // Initial position when dragging starts
    const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(true) // InfoBox state to toggle visibility

    // Handle zoom in and zoom out buttons
    const zoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.1, 3)) // Max zoom 3x
    const zoomOut = () =>
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)) // Min zoom 0.5x
    const resetZoom = () => {
        setScale(2.0) // Reset zoom level to 2.0 (initial scale)
        setPosition({ x: -150.37, y: 50.5926 }) // Reset position to initial values
    }

    // Handle dragging to scroll the image inside its container
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }) // Store initial drag start position
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x, // Calculate new x position
                y: e.clientY - dragStart.y, // Calculate new y position
            })
        }
    }

    const handleMouseUp = () => setIsDragging(false) // Stop dragging

    // Handle zoom with mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()
        const zoomDirection = e.deltaY > 0 ? -0.1 : 0.1
        setScale((prevScale) =>
            Math.min(Math.max(0.5, prevScale + zoomDirection), 3)
        ) // Adjust scale with limits
    }

    // Toggle InfoBox visibility
    const toggleInfoBox = () => setIsInfoBoxOpen((prev) => !prev)

    return (
        <section className="z-100 bg-transparent flex flex-col items-center justify-start pt-0 px-3 md:px-5 box-border gap-[35px_0px] max-w-full text-center text-57xl text-white relative">
            <p className="text-white font-heading text-2xl md:text-4xl mb-4 md:mb-8 text-neon">
                Venue & Parking
            </p>
            <div className="max-[640px]:justify-center flex md:flex-row flex-col items-center justify-start max-w-full text-left font-regular-14 lg:gap-[0px_134px]">
                <div className="relative bg-white/5 backdrop-blur-sm bg-aliceblue box-border max-[640px]:gap-[5px_0px] gap-[20px_0px] flex flex-col items-center justify-center max-w-full border-[1px] border-solid border-white max-[640px]:p-2 md:p-5 p-10 w-full">
                    {/* InfoBox and Zoom Controls positioned outside the Map container */}
                    <InfoBox
                        isOpen={isInfoBoxOpen}
                        toggleOpen={toggleInfoBox}
                    />

                    {/* Zoom Controls Overlay */}
                    <div className="absolute top-2 md:top-6 right-2 md:right-6 flex flex-col items-center gap-1 md:gap-2 z-10">
                        <button
                            onClick={zoomIn}
                            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                            title="Zoom In"
                        >
                            <span className="text-lg md:text-2xl">+</span>
                        </button>
                        <button
                            onClick={zoomOut}
                            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                            title="Zoom Out"
                        >
                            <span className="text-lg md:text-2xl">−</span>
                        </button>
                        <button
                            onClick={resetZoom}
                            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                            title="Reset"
                        >
                            <span className="text-md md:text-xl">↺</span>
                        </button>
                    </div>

                    {/* Container for Image with Initial Position and Scale */}
                    <div
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className="relative overflow-auto bg-gray-800 w-full md:w-[640px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center border border-gray-500"
                        style={{
                            cursor: isDragging ? 'grabbing' : 'grab', // Change cursor on drag
                            backgroundColor: '#f0f0f0', // Background color for the container
                        }}
                    >
                        {/* Image with Initial Position and Scale */}
                        <img
                            ref={imageRef}
                            src={src}
                            alt="Map"
                            className="rounded-lg"
                            style={{
                                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`, // Scale and translate image based on zoom and drag position
                                transformOrigin: 'center center', // Transform origin set to center
                                transition: isDragging
                                    ? 'none'
                                    : 'transform 0.2s ease-out', // Smooth transition if not dragging
                            }}
                        />
                    </div>

                    {/* Description and Links */}
                    <div>
                        <p className="text-xl font-mono text-slate-300">
                            Building of Social Work and Smart Hospital (SWSH
                            104-105)
                        </p>
                        <div className="flex flex-row justify-center gap-2">
                            <img
                                width={'28px'}
                                src="/location.svg"
                                alt="Location Icon"
                            />
                            <a
                                className="text-lg font-mono font-bold"
                                href="https://maps.app.goo.gl/Jg6kQYFpi6mFeSFz7"
                            >
                                Parking: 902 S Oak St, Arlington, TX 76010
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-row max-[640px]:flex-col relative max-[640px]:top-[10px] max-[640px]:gap-2 gap-5 my-4">
                        <a
                            className="font-mono font-extrabold text-[14px] md:text-[20px] px-3 md:px-5 py-2 md:py-3 no-underline bg-white rounded-lg text-center text-blue-900"
                            target="_blank"
                            href="https://www.google.com/maps/place/School+of+Social+Work+and+Smart+Hospital+(SWSH)/@32.7274712,-97.1117394,20.09z/data=!4m12!1m5!3m4!2zMzLCsDQzJzQxLjUiTiA5N8KwMDYnMzkuMCJX!8m2!3d32.7281944!4d-97.1108333!3m5!1s0x864e7d733472202d:0x48ce4f3f6b59840c!8m2!3d32.7273039!4d-97.1113082!16s%2Fg%2F1hdztzc3s?entry=ttu"
                        >
                            Google Maps
                        </a>
                        <a
                            className="font-mono font-extrabold text-[14px] md:text-[20px] px-3 md:px-5 py-2 md:py-3 no-underline bg-white rounded-lg text-center text-blue-900"
                            target="_blank"
                            href="https://maps.apple.com/?address=501%20W%20Mitchell%20St%0AArlington,%20TX%20%2076019%0AUnited%20States&auid=15965471530354566328&ll=32.727529,-97.111612&lsp=9902&q=School%20of%20Social%20Work&t=m"
                        >
                            Apple Maps
                        </a>
                        {src && (
                            <a
                                className="font-mono font-extrabold text-[14px] md:text-[20px] px-3 md:px-5 py-2 md:py-3 no-underline bg-white rounded-lg text-center text-blue-900"
                                href={src}
                                download
                            >
                                Download Map
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Map
