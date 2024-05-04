import React from "react";
import cus1 from '../accets/cus1.jpg'
import cus2 from '../accets/cus2.jpg'
import cus3 from '../accets/cus3.jpg'
import cus4 from '../accets/cus4.jpg'
import cus5 from '../accets/cus5.jpg'
import cus6 from '../accets/cus6.jpg'
import cus7 from '../accets/cus7.jpg'
import cus8 from '../accets/cus8.jpg'
import cus9 from '../accets/cus9.jpg'
import cus10 from '../accets/cus10.jpg'
import cus11 from '../accets/cus11.jpg'
import cus12 from '../accets/cus12.jpg'
import cus13 from '../accets/cus13.jpg'
import cus14 from '../accets/cus14.jpg'

const Customers = () => {
  return (
    <div className="flex flex-col gap-[91px] h-[443px] w-auto">
        <span className='text-[36px] text-center font-semibold tracking-[-3%] text-[#1300D2]'>Trusted by 25,000+ customers worldwide</span>
        <div className="flex items-center flex-wrap gap-[90px] mx-auto w-[1200px] h-[136px]">
          <img src={cus1} alt="logo" />
          <img src={cus2} alt="logo" />
          <img src={cus3} alt="logo" />
          <img src={cus4} alt="logo" />
          <img src={cus5} alt="logo" />
          <img src={cus6} alt="logo" />
          <img src={cus7} alt="logo" />
          <img src={cus8} alt="logo" />
          <img src={cus9} alt="logo" />
          <img src={cus10} alt="logo" />
          <img src={cus11} alt="logo" />
          <img src={cus12} alt="logo" />
          <img src={cus13} alt="logo" />
          <img src={cus14} alt="logo" />
        </div>
    </div>
  );
};

export default Customers;
