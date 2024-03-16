import Image from "next/image";
import React from "react";
import CTA from "../../../public/cta.svg";
import PhoneCTA from "../../../public/PhoneCta.svg";
import arrow from "../../../public/arrow.svg"

const Cta = () => {
  return (
    <section className="w-full">
      <div className="relative max-h-screen xl:min-h-[80vh] md:min-h-[20vh] flex items-start justify-center flex-col w-full md:py-0 2xl:py-10">
        <div>
          <Image
            src={CTA}
            alt="call to action section"
            className="hidden md:block w-full"
          />
        </div>
        <div className="relative">
          <Image
            src={PhoneCTA}
            alt="call to action section"
            className="block md:hidden w-full"
          />
        </div>
        <div className="absolute top-[35%] left-[13%] lg:top-[40%] lg:left-[35%] md:top-[30%] md:left-[30%] flex flex-col justify-center items-center">
          <h1 className="overflow-hidden leading-normal tracking-wider flex font-bold text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#8B8B8B] to-[#191919] pb-[4px] md:pb-[12px] lg:pb-[16px]">
            Make A Wish
          </h1>
          <p className="text-[#B5B5B5] lg:text-[20px] text-[14px] md:text-[16px] font-regular text-center">
            With our free Starter plan, you get any of your five <br /> products
            prices tracked.
          </p>
        <button className="flex flex-row items-center justify-center gap-4 text-[16px] md:text-[18px] bg-transparent w-8/12 md:w-10/12 lg:mt-[24px] md:mt-[20px] mt-[16px] border-[#323136] border-2 rounded-lg text-white on bg-gradient-to-tr from-[#616169] to-[#B5B5B5 opacity-0] md:px-4 py-2 px-2 hover:bg-none">
          Download Now
          <Image
              src={arrow}
              alt="arrow"
              className="rotate-0 hover:-rotate-45 duration-300 ease-in-out transform origin-center"
            />
        </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
