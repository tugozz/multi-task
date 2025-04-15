"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initialFormValues } from "./constants/constant";
import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { ThirdStep } from "@/components/ThirdStep";
import { SubmitComponents } from "@/components/SubmitComponents";

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  console.log("formValues", formValues);

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrentStepComponent = [FirstStep, SecondStep, ThirdStep][currentStep];

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#f3f4f6]">
      <AnimatePresence mode="wait">
        <CurrentStepComponent
          addStep={addStep}
          previousStep={previousStep}
          handleInputChange={handleInputChange}
          formValues={formValues}
        />
      </AnimatePresence>
    </div>
  );
};

export default page;
