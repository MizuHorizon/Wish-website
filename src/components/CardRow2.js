import Image from "next/image";
import React from "react";

const CardRow2 = ({ image, title, description }) => {
  return (
    <div className="bg-gradient-to-b from-[#95959C] hover:bg-gradient-to-t from-[#95959C] w-10/12 md:w-6/12 lg:w-4/12 md:px-[0.70px] md:pt-[0.70px] px-[0.70px]">
      <div className="bg-[#0E0D0D] hover:bg-gradient-to-t from-zinc-600/25 size-full">
        <div className="px-8 py-4">
          <Image src={image} alt="image" className="pb-4 w-screen"/>
          <h1 className="text-[#A9A5A5] font-medium text-[20px] pb-2">{title}</h1>
          <p className="text-[#B5B5B5] md:text-[14px] lg:text-[16px] font-regular lg:w-[25vw] pb-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardRow2;
