"use client";
import React from "react";
import Countdown, { isCountdownOver } from "./Countdown";
import local from "next/font/local";
// import local from "next/font/local";

const Digital = local({
  src: "../../public/fonts/DigitalNumbers-Regular.woff",
});

export interface Props {}

const Timer = () => {
  const countdownOver = false && isCountdownOver();

  return (
    <div
      className={`my-2.5 px-4 gap-0.5 flex flex-col font-semibold text-3xl text-white ${Digital.className} scale-[0.45] md:scale-[0.6] lg:scale-100`}
    >
      {countdownOver ? <></> : <Countdown />}
    </div>
  );
};
export default Timer;
