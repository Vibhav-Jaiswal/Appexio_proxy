import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col text-center w-[1195px] h-[386px] px-[88px]">
        <p className="font-[IBM Plex Sans Hebrew] text-[36px] uppercase tracking-[15%] leading-[46.8px] font-bold text-[#1300D2]">
          About Appexio Proxy
        </p>
        <p className="font-[IBM Plex Sans] text-[20px] leading-[27px] w-[785px] h-[135px] mx-auto">
          Proxies is a one-stop solution for companies that need to get data all
          over the web from any source. No need to check and look up for
          proxies. No need to launch multiple scraping instances. No need to
          handle and support the overwhelming infrastructure. Get exactly what
          you need - DATA. With the most effortless way. And all this with the
          pay-as-you-go market leading pricing model.
        </p>
        <div className="flex gap-[10px] justify-between text-[30px] mt-[30px] font-semibold">
          <span>
            <p className="leading-[24px]">Partner Organizations</p>
            <p>700 +</p>
          </span>
          <span>
            <p className="leading-[24px]">NGOs</p>
            <p>140 +</p>
          </span>
          <span>
            <p className="leading-[24px]">Public Sector Bodies</p>
            <p>30</p>
          </span>
          <span>
            <p className="leading-[24px]">Experience</p>
            <p>5 yrs</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
