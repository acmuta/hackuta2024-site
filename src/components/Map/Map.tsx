'use client'
import React, { useRef, useState } from 'react';

const Map = ({ src }: { src?: string }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    // Handle zoom in and zoom out buttons
    const zoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.1, 3));
    const zoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
    const resetZoom = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    // Handle dragging to scroll the image inside its container
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }); // Store initial drag start position
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x, // Calculate new x position
                y: e.clientY - dragStart.y, // Calculate new y position
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false); // Stop dragging

    // Handle zoom with mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const zoomDirection = e.deltaY > 0 ? -0.1 : 0.1;
        setScale((prevScale) => Math.min(Math.max(0.8, prevScale + zoomDirection), 3)); // Adjust scale with limits
    };

    return (
        <section className="z-100 bg-transparent flex flex-col items-center justify-start pt-0 px-5 box-border gap-[35px_0px] max-w-full text-center text-57xl text-white">
            <p className="text-white font-heading text-4xl mb-8 text-neon">Venue & Parking</p>
            <div className="max-[640px]:justify-center flex md:flex-row flex-col items-center justify-start max-w-full text-left font-regular-14 lg:gap-[0px_134px]">
                <div className="rounded-lg bg-white/5 backdrop-blur-sm bg-aliceblue box-border max-[640px]:gap-[5px_0px] gap-[20px_0px] flex flex-col items-center justify-center max-w-full border-[1px] border-solid border-white max-[640px]:p-5 p-10 w-full">
                    {/* Container for Image with Fixed Size */}
                    <div
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        className="relative overflow-hidden bg-gray-800 w-[640px] h-[450px] rounded-lg flex items-center justify-center border border-gray-500"
                        style={{
                            cursor: isDragging ? 'grabbing' : 'grab', // Change cursor on drag
                            backgroundColor: '#f0f0f0', // Background color for the container
                        }}
                    >
                        {/* Image with Zoom and Pan */}
                        <img
                            ref={imageRef}
                            src={src}
                            alt="Map"
                            className="rounded-lg"
                            style={{
                                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`, // Scale and translate image based on zoom and drag position
                                transformOrigin: 'center center',
                                transition: isDragging ? 'none' : 'transform 0.2s ease-out', // Smooth transition if not dragging
                            }}
                        />

                        {/* Zoom Controls Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col items-center gap-2">
                            <button
                                onClick={zoomIn}
                                className="flex items-center justify-center w-10 h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                                title="Zoom In"
                            >
                                {/* Plus Icon */}
                                <span className="text-2xl">+</span>
                            </button>
                            <button
                                onClick={zoomOut}
                                className="flex items-center justify-center w-10 h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                                title="Zoom Out"
                            >
                                {/* Minus Icon */}
                                <span className="text-2xl">−</span>
                            </button>
                            <button
                                onClick={resetZoom}
                                className="flex items-center justify-center w-10 h-10 bg-transparent text-black rounded-full focus:outline-none border border-black hover:bg-gray-200 transition-all"
                                title="Reset"
                            >
                                {/* Reset Icon */}
                                <span className="text-xl">↺</span>
                            </button>
                        </div>
                    </div>

                    {/* Description and Links */}
                    <div>
                        <p className="text-2xl font-mono text-slate-300">Building of Social Work and Smart Hospital (SWSH)</p>
                        <div className="flex flex-row justify-center gap-2">
                            <img width={'28px'} src="/location.svg" alt="Location Icon" />
                            <p className="text-2xl font-mono font-bold">Room no. 104 & 105</p>
                        </div>
                    </div>
                    <div className="flex flex-row max-[640px]:flex-col relative max-[640px]:top-[10px] max-[640px]:gap-2 gap-5">
                        <a
                            className="font-mono font-extrabold lg:text-[20px] px-5 py-3 no-underline bg-white rounded-lg text-center text-blue-900"
                            target="_blank"
                            href="https://www.google.com/maps/place/School+of+Social+Work+and+Smart+Hospital+(SWSH)/@32.7274712,-97.1117394,20.09z/data=!4m12!1m5!3m4!2zMzLCsDQzJzQxLjUiTiA5N8KwMDYnMzkuMCJX!8m2!3d32.7281944!4d-97.1108333!3m5!1s0x864e7d733472202d:0x48ce4f3f6b59840c!8m2!3d32.7273039!4d-97.1113082!16s%2Fg%2F1hdztzc3s?entry=ttu"
                        >
                            Google Maps
                        </a>
                        <a
                            className="font-mono font-extrabold lg:text-[20px] px-5 py-3 p-5 no-underline bg-white rounded-lg text-center text-blue-900"
                            target="_blank"
                            href="https://maps.apple.com/?address=501%20W%20Mitchell%20St%0AArlington,%20TX%20%2076019%0AUnited%20States&auid=15965471530354566328&ll=32.727529,-97.111612&lsp=9902&q=School%20of%20Social%20Work&t=m"
                        >
                            Apple Maps
                        </a>
                        {/* Download Link */}
                        {src && (
                            <a
                                className="font-mono font-extrabold lg:text-[20px] px-5 py-3 no-underline bg-white rounded-lg text-center text-blue-900"
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
    );
};

export default Map;
