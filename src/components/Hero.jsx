import React from "react";
import hero from "../accets/hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-[1200px] h-[650px] flex justify-center items-center mx-auto py-[28px]">
        <div className="flex flex-col gap-[50px]">
          <p className="text-[64px] font-semibold leading-[83.2px]">
            Need Residential Proxies!
          </p>
          <div className="flex gap-[30px]">
            <button className="border-[1px] rounded-lg w-[192px] h-[50px] bg-gradient-to-r from-[#1300D2] to-[#7B10A0] text-white">
              Buy Now
            </button>
            <button className="border-[4px] rounded-lg w-[192px] h-[50px] border-[#4970FF]">
              See Pricing
            </button>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
