"use client";

import React, { useEffect, useState } from "react";
import right from "../../../public/Ellipse.svg";
import Image from "next/image";

const Video = () => {
  return (
    <section className="w-full">
        <div className="relative inset-0 m-auto">
          <div className=" w-[80%] inset-0 max-w-6xl  mx-auto my-8 rounded-xl border border-zinc-600/50 hover:border-zinc-600/75 overflow-hidden lg:px-10 lg:py-10 px-5 py-5 backdrop-filter backdrop-blur-xl bg-zinc-500/5 hover:bg-zinc-600/25">
            <video className="w-full rounded-xl" autoPlay muted loop>
              <source src="Wish.mp4" />
            </video>
          </div>
        <Image
          src={right}
          alt="left linears"
          className="absolute left-0 top-0 md:left-0 md:top-32"
        />
        <Image
          src={right}
          alt="left linears"
          className="hidden md:block absolute right-0 top-0 md:right-0 md:top-0"
        />
        </div>
    </section>
  );
};

export default Video;
