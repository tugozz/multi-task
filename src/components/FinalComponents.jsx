import React from "react";
import Image from "next/legacy/image";

export const FinalComponents = () => {
  return (
    <div>
      <div className="p-8">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="Picture of the author"
        />
        <h2 className="text-2xl">You're All Set 🔥</h2>
        <p className="text-lg text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
