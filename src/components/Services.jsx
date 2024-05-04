import React from "react";
import image from "../accets/image.jpg";

const Services = () => {
  return (
    <div className="h-[1048px] w-[1270px] mx-[30px]">
      <div className=" flex flex-col h-[776px] gap-[48px]">
        <span className="text-[36px] text-center font-semibold tracking-[-3%] text-[#1300D2]">
          Appexio Proxy Type
        </span>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="w-[664px] h-[664px] border-[1px] rounded-lg p-[48px] row-span-3 flex flex-col gap-[32px]">
            <p className="text-[24px]">Mobile Proxy</p>
            <p className="text-[18px] tracking-[-4%]">
              GoProxies gives you access to the largest pool of genuine LP
              address from real users so you can easily collect information like
              a local user.
            </p>
            <p className="text-[18px] tracking-[-4%]">
              Target complex website from a variety of source.
            </p>
            <img className="w-[482px] h-[360px]" src={image} alt="logo" />
          </div>
          <div className="w-[588px] h-[296px] border-[1px] rounded-lg p-[48px] col-span-2 flex flex-col gap-[32px]">
            <p className="text-[24px]">Residential Proxy</p>
            <p className="text-[18px] tracking-[-4%]">
              Browse without blocking headaches. Many website hosts actively
              defend against rotating ISP proxies or rotating datacenter proxies
              by banning inauthentic users.
            </p>
            <p className="text-[18px] tracking-[-4%]">
              That is why our proxies are ethically source genuine residential
              IPs.
            </p>
          </div>
          <div className="w-[588px] h-[344px] border-[1px] rounded-lg p-[48px] row-span-2 col-span-2 flex flex-col gap-[32px]">
            <p className="text-[24px]">Static Proxy</p>
            <p className="text-[18px] tracking-[-4%]">
              Rotating residential IPs are for use cases that require more
              intensive data collection without any limits.
            </p>
            <p className="text-[18px] tracking-[-4%]">
              With real residential proxies, you can access any website with
              higher frequency and speed to gain and maintain your competitive
              edge.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[379px] bg-[#2148FD] flex justify-center items-center">
        <div className="w-[960px] h-[219px] flex flex-col items-center gap-[20px]">
          <p className="font-mediam text-[40px]">
            Sign up in minutes. Join the movement.
          </p>
          <p className="text-[17.3px] font-normal text-center text-white">
            Appexio Proxy goal is to protect what’s most precious to
            entrepreneurs: their time, energy and focus. We are creating the
            future of mobile proxies, IPs and we’d love you to join us.{" "}
          </p>
          <div className="flex gap-8 mt-6">
            <button className="w-[189.9px] h-[51px] rounded-md bg-[#FFFFFF] text-[#0103ECD1]">
              Open an account
            </button>
            <button className="w-[189.9px] h-[51px] rounded-md border-[1px] text-[#FFFFFF]">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
