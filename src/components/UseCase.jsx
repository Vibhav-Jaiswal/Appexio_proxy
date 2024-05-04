import React from "react";
import { useCase } from "../data/UseCase";

const UseCase = () => {
  return (
    <div className="h-[1298px] text-center flex flex-col">
      <span className="text-[36px] text-center font-semibold tracking-[-3%] text-[#1300D2] py-24">
        Appexio proxy for any use case
      </span>
      <div className="flex flex-wrap justify-center gap-[30px]">
        {useCase.map((item) => (
          <div key={item.id} className="w-[368px] h-[298px] rounded-lg shadow-lg flex flex-col justify-evenly items-center p-[30px]">
            <img
              className="h-[40px] w-[40px]"
              src={item.url}
              alt=""
            />
            <p className="text-[21px] font-semibold">{item.title}</p>
            <p className="text-[16px] font-normal text-[#6F6B80]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCase;
