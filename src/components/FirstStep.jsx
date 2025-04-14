import React from "react";
import { HeaderComponents } from "./HeaderComponents";

export const FirstStep = () => {
  return (
    <div className="flex justify-center pt-[182]">
      <div className="w-120 h-164 bg-[#fff]   rounded-lg">
        <HeaderComponents />

        <div className="text-sm pl-8">
          <label htmlFor="">First name *</label>
          <input
            type="text"
            placeholder="Your first name"
            class="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            name="firstName"
            value
          ></input>
        </div>
      </div>
    </div>
  );
};
