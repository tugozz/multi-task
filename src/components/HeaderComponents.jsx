import React from "react";
import Image from "next/legacy/image";

export const HeaderComponents = () => {
  return (
    <div>
      <div className="p-8">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <h2 className="text-2xl">Join Us! 😎</h2>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
      </div>
    </div>
  );
};
