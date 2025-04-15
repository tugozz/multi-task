import React from "react";
import { HeaderComponents, Input } from "./";
import { motion } from "framer-motion";

export const SecondStep = ({
  previousStep,
  addStep,
  handleInputChange,
  formValues,
}) => {
  const {
    email = "",
    phoneNumber = "",
    password = "",
    confirmPassword = "",
  } = formValues || {};
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
                name="email"
                type="text"
                placeholder="Your email"
                value={email}
                onChange={handleInputChange}
                label=" Email "
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                name="phoneNumber"
                type="text"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={handleInputChange}
                label="Phone number "
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="text"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={handleInputChange}
                label="Password  "
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="text"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleInputChange}
                label="Confirm password   "
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={previousStep}
              className="  bg-gray-300 p-2 rounded-xl mt-4 px-4 text-black"
            >
              Back
            </button>
            <button
              className="  bg-black text-white p-2 rounded-xl mt-4 px-4"
              onClick={addStep}
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
