import React from "react";
import { Link } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-white border-b-[1px] border-white">
      <div className="flex justify-between items-center py-3 px-28">
        <Link to="/">
          <span className=" text-blue-800 font-bold text-[28px] tracking-[-4%]">
            Appexio Proxy
          </span>
        </Link>

        <div className="flex gap-6 text-[16px] tracking-[-3%]">
          <Link to="/proxies">Proxies</Link>
          <Link to="/pricing" className="flex cursor-pointer">
            <samp>Pricing</samp>
            <RiArrowDropDownLine className="w-[24px] h-[24px]" />
          </Link>
          <Link to="/resource">Resource</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex gap-2 text-[16px] tracking-[-3%]">
          <div className="flex items-center gap-4 border-[1px] rounded-full py-[8px] px-[16px] cursor-pointer">
            <GiWorld className="w-[24px] h-[24px]" />
            <span>English</span>
            <RiArrowDropDownLine className="w-[24px] h-[24px]" />
          </div>
          <Link to="/signin">
            <button className="border-[1px] rounded-full py-[8px] px-[16px]">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="border-[1px] rounded-full py-[8px] px-[16px] bg-gradient-to-r from-[#1300D2] to-[#7B10A0] text-white">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
