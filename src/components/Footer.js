import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="text-[#0E0D0D] w-full lg:px-24 py-8 flex md:flex-row flex-col items-center justify-center gap-8 lg:gap-16">
        <Link href={"/Terms"} className="text-[#D0D5DD] font-regular hover:text-[#8E8B8B] text-[16px]" target="_blank">
          Terms & Conditions
        </Link>
        <Link href={"/Policy"} className="text-[#D0D5DD] font-regular hover:text-[#8E8B8B] text-[16px]" target="_blank">
          Private Policy
        </Link>
        <a href="https://twitter.com/wiisssshh" className="text-[#D0D5DD] hover:text-[#8E8B8B] text-[16px]" target="_blank">
          Contact us
        </a>
        <h1 className="text-[#D0D5DD] text-[16px]">© 2024 MizuHorizon. All rights reserved.</h1>
      </div>
    </section>
  );
};

export default Footer;
