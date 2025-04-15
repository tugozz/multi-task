import React from "react";
import { HeaderComponents, Input } from "./";
import { motion } from "framer-motion";

export const ThirdStep = ({
  previousStep,
  addStep,
  handleInputChange,
  formValues,
}) => {
  const { dateOfBirth } = formValues;
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
                name="dateOfBirth"
                type="date"
                label=" Date of Birth "
                value={dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={previousStep}
              className=" bg-gray-300 p-2 rounded-xl mt-4 px-4 text-black"
            >
              Back
            </button>

            <button
              onClick={addStep}
              className=" bg-black text-white p-2 rounded-xl mt-4 px-4"
            >
              Submit 3/3
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
