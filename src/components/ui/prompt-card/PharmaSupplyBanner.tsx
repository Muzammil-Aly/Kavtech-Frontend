import React from "react";
import Link from "next/link";
import SupplyChainMVP from "./SupplyChainMVP";
const PharmaSupplyBanner: React.FC = () => {
  return (
    <>
      <div className="bg-black mt-10 text-white py-16 px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h1
          className="font-sans font-normal text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-snug sm:leading-[60px] md:leading-[72px] lg:leading-[80px] max-w-[90%] md:max-w-[800px] lg:max-w-[1040px] tracking-tight"
          style={{
            fontFamily: "SF Pro",
            transform: "rotate(0deg)",
            opacity: 1,
          }}
        >
          Digitizing your pharma supply & distribution chain starts here.
        </h1>

        {/* Subtext */}
        <p className="font-sans font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed tracking-normal max-w-[90%] md:max-w-[822px] mt-6">
          You mentioned the need for warehouse stock management, order-taking,
          and agent monitoring apps. Here’s how we can turn that into a tailored
          solution.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <div className="pr-6 hidden md:flex">
            <Link
              href="/contact"
              className="
           w-[158px] h-[41px]   
           flex items-center justify-center
           rounded-[12px]
           text-[15px] font-medium text-[#E48242]
           px-4 py-2
            bg-[radial-gradient(231.94%_231.94%_at_50%_100%,rgba(228,130,66,0.25)_0%,rgba(228,130,66,0)_25.24%)]
            border border-[#3a3a3a]
            shadow-[0_2px_10px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.05)]
            transition-transform duration-200 hover:scale-[1.03]
            "
            >
              Explore my MVP
            </Link>
          </div>
          <button
            className={`
            w-[169px] h-[41px]                /* width & height */
            px-4 py-2                          /* padding: top/bottom 8px, left/right 16px */
            rounded-[12px]                     /* border-radius */
            border border-[#707070]            /* 1px border */
            text-[16px]                        /* font size */
            font-medium                         /* approximate 510 weight */
    leading-[26px]                     /* line-height */
    text-center                         /* text-align */
    flex items-center justify-center    /* center vertically & horizontally */
    font-sans                           /* SF Pro or fallback */
    opacity-100
    transition-transform duration-200
    hover:scale-[1.03]                  /* subtle hover scale */
    `}
            style={{ fontFamily: "SF Pro, ui-sans-serif, system-ui" }}
          >
            Consult an expert
          </button>
        </div>
      </div>
      <SupplyChainMVP />
    </>
  );
};

export default PharmaSupplyBanner;
