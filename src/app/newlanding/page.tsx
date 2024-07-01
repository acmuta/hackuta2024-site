"use client";
import { HeroHighlight } from "@/components/hero-highlight/hero-highlight";
import React from "react";
import UnderConstruction from "./underConstruction";
import Countdown from "@/components/Countdown";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
export interface Props {}

const FillerWords = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <>
          <h1 className="text-2xl font-semibold text-violet-200 ">Innovate</h1>
          <h1 className="text-lg px-1"> · </h1>
        </>

        <>
          <h1 className="text-2xl font-semibold text-violet-400 ">Design</h1>
          <h1 className="text-lg px-1">·</h1>
        </>

        <>
          <h1 className="text-2xl font-semibold text-violet-600 ">Build</h1>
        </>
      </div>
    </>
  );
};
const TypingAnimation = () => {
  return (
    <>
      <div className="min-w-[790px]">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "HACKUTA 2024",
            1000,
            "Hackathon",
            1000,
            "MLH Sponsored",
            1000,
            "HACKUTA 2024",
            1000,
          ]}
          wrapper="span"
          speed={7}
          style={{ fontSize: "6em", display: "inline-block" }}
          repeat={Infinity}
          className="text-8xl font-extrabold from-white to-neutral-600 bg-clip-text text-transparent bg-gradient-to-b"
        />
      </div>
    </>
  );
};
const Page = () => {
  return (
    <div className="flex flex-col flex-1 h-screen justify-center">
      <UnderConstruction />
      <HeroHighlight
        children={
          <div className="text-white flex flex-col items-center justify-center">
            {/* hello */}
            <div className="mb-5">
              <TypingAnimation />
              {/* <h1 className="text-8xl font-bold from-white to-neutral-600 bg-clip-text text-transparent bg-gradient-to-b">
                HACKUTA 2024
              </h1> */}
              <FillerWords />
              <p className="text-white/50 max-w-[800px] break-words text-sm justify-center text-center mb-4">
                Welcome to HackUTA 2024, the premier university hackathon of the
                year! This event is a melting pot of creativity, innovation, and
                technical prowess, where students from diverse backgrounds come
                together to collaborate on groundbreaking projects. Whether
                you’re a seasoned coder, a design enthusiast, or someone with a
                passion for problem-solving, HackUTA 2024 offers the perfect
                platform to unleash your potential
              </p>
              <Countdown />
            </div>

            <Link
              href="/api/auth/signin"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {"Apply Now"}
              </span>
            </Link>

      
          </div>
        }
      />
      {/* <HeroHighlight children={<></>} /> */}
    </div>
  );
};
export default Page;
