import React from "react";
import { resource } from "../data/Resources";

const Resources = () => {
  return (
    <div className="flex flex-col text-center h-[895px] gap-[91px]">
      <div className="h-[275px] h-[]1100px p-[50px] flex flex-col gap-[20px]">
        <p className="text-[36px] text-center font-semibold tracking-[-3%] text-[#1300D2]">
          You can do it all with Appexio Proxy
        </p>
        <p className="font-[IBM Plex Sans] text-[20px] leading-[27px] w-[785px] h-[135px] mx-auto">
          Welcome to the Resources and Tutorials section of DesignForge—a
          treasure trove of knowledge and inspiration for digital artists and
          enthusiasts. Whether you're looking to sharpen your skills, learn new
          techniques, or dive deeper into the world of digital art, you'll find
          everything you need right here. Explore our collection of resources,
          tutorials, and guides curated to help you unlock your creative
          potential and take your artistry to the next level.
        </p>
      </div>
      <div className="h-[1204px] flex gap-[20px]">
        {resource.map((item) => (
          <div className="flex flex-col justify-between text-left w-[277px] h-[420px] border-t-[1px] border-[#0103EC] py-8 mx-auto">
            <img className="w-[55.25px] h-[55.25px]" src={item.url} alt="" />
            <div className="font-[IBM Plex Sans Hebrew]">
              <p className="text-semibold text-[31px]">{item.title}</p>
              <p className="text-[20px] font-normal text-[#51564E]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
