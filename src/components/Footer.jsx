import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#2A2BEF] text-white px-4 py-6">
      <div className=" h-[217.59px] flex justify-between">
        <div className="w-[400px]">
          <p className="text-[42.56px] font-semibold">Appexio Proxy</p>
          <p className="text-[24px] font-normal">
            Appexio Proxy - the global Web data provider
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button className="w-[448px] h-[50px] rounded-full bg-white text-[#2A2BEF]">
            See Demo
          </button>
          <button className="w-[448px] h-[50px] rounded-full border-[1px]">
            Explore Pricing
          </button>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div>
          <p className="text-[22px] mb-2 font-semibold">GET IN TOUCH</p>
          <p>General: hello@appexioproxy.com</p>
          <p>Support: Support@appexioproxy.com</p>
          <p>Career: career@appexioproxy.com</p>
        </div>
        <div>
          <p className="text-[22px] mb-2 font-semibold">Proxy Types</p>
          <p>Mobile Proxy</p>
          <p>Residential Proxy</p>
          <p>Static Proxy</p>
        </div>
        <div>
          <p className="text-[22px] mb-2 font-semibold">Resource</p>
          <p>Privacy</p>
          <p>FAQ</p>
          <p>About Us</p>
          <p>Tools</p>
          <p>Docs</p>
        </div>
        <div>
          <p className="text-[22px] mb-2 font-semibold">Pricing</p>
          <p>Mobile Proxy</p>
          <p>Residential Proxy</p>
          <p>Static Proxy</p>
        </div>
        <div>
          <p className="text-[22px] mb-2 font-semibold">Contact us</p>
          <p>Help</p>
          <p>How It Works</p>
          <p>FAQ</p>
        </div>
      </div>

      <div className="flex justify-between mt-24">
        <div className="text-[14px] flex gap-4">
          <span>© Appexio Proxy 2024</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex gap-4">
          <BsFacebook className="w-[40px] h-[40px]" />
          <BsTwitterX className="w-[40px] h-[40px] bg-white text-[#2A2BEF] rounded-full object-cover p-1" />
          <FaLinkedinIn className="w-[40px] h-[40px] bg-white text-[#2A2BEF] rounded-full  object-cover p-1" />
          <FaInstagram className="w-[40px] h-[40px] bg-white text-[#2A2BEF] rounded-full  object-cover p-1" />
          <button className="flex items-center gap-4 border-[1px] rounded-lg py-[8px] px-[16px] cursor-pointer bg-black">
            <FaApple className="w-[40px] h-[40px]"/>
            <span className="text-start leading-4">
              <p className="text-[10px]">Download on the</p>
              <p className="text-[24px]">App Store</p>
            </span>
          </button>
          <button className="flex items-center gap-4 border-[1px] rounded-lg py-[8px] px-[16px] cursor-pointer bg-black">
            <FaGooglePlay className="w-[40px] h-[40px]"/>
            <span className="text-start leading-4">
              <p className="text-[10px]">GET IT ON</p>
              <p className="text-[24px]">Google Play</p>
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10 font-normal text-[14px]">
        <p>Appexio Proxy collect and processes your personal data to better respond to your requests.</p>
        <p>Learn more about how we manage your data and your rights.</p>
      </div>
    </div>
  );
};

export default Footer;
