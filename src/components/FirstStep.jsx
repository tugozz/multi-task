import React from "react";
import { HeaderComponents, Input } from "./";
import { motion } from "framer-motion";

export const FirstStep = ({ addStep, handleInputChange, formValues }) => {
  const { firstName = "", lastName = "", userName = "" } = formValues || {};
  return (
    <motion.div
      initial={{ opacitiy: 0, x: 100 }}
      animate={{ opacitiy: 1, x: 0 }}
      exit={{ opacitiy: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex-col justify-center items-center w-[480px] h-[655px] bg-white rounded-lg">
        <div className="space-y-2 mb-7">
          <HeaderComponents />
          <div className="flex flex-col flex-grow gap-y-3">
            <div className="space-y-2 pl-8">
              <Input
                name="firstName"
                type="text"
                placeholder="Your first name"
                value={firstName}
                onChange={handleInputChange}
                label="First name "
                className="w-[380px] h-[56px] text-base px-4 py-3"
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                name="lastName"
                type="text"
                placeholder="Your last name"
                value={lastName}
                onChange={handleInputChange}
                label="Last name "
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="text"
                name="userName"
                placeholder="Your username"
                value={userName}
                onChange={handleInputChange}
                label="Username "
              />
            </div>
          </div>
          <button
            className=" bg-black text-white p-2 rounded-xl mt-4 px-4  w-full"
            onClick={addStep}
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </motion.div>
  );
};
