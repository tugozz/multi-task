"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { initialFormValues } from "./constants/constant";
import { FirstStep, SubmitComponents } from "@/components";
import { SecondStep } from "@/components";
import { ThirdStep } from "@/components";

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const inputImageRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewLink, setPreviewLink] = useState("");

  const updateFormErrors = (errors) => {
    setFormErrors((previousErrors) => ({ ...previousErrors, ...errors }));
  };

  const handleErrorChange = (event) => {
    const { name, value } = event.target;

    setFormErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const openBrowse = () => {
    inputImageRef.current?.click();
  };

  const handleFileInput = (event) => {
    const file = Array.from(event.target.files)[0];
    setPreviewLink(URL.createObjectURL(file));
    setFormValues((previous) => ({ ...previous, profileImage: file }));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = Array.from(event.dataTransfer.files)[0];
    setPreviewLink(URL.createObjectURL(file));
    setIsDragging(false);
  };

  useEffect(() => {
    const datas = localStorage.getItem("formData");
    if (datas) {
      const parsed = JSON.parse(datas);
      setFormValues(parsed);
      setCurrentStep(parsed.step);
    }
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const addStep = () => {
    setCurrentStep((prev) => prev + 1);
    if (currentStep === 2) {
      localStorage.removeItem("formData");
      setFormValues(initialFormValues);
    }
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
          inputImageRef={inputImageRef}
          previewLink={previewLink}
          openBrowse={openBrowse}
          formErrors={formErrors}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          isDragging={isDragging}
          updateFormErrors={updateFormErrors}
          handleFileInput={handleFileInput}
          currentStep={currentStep}
          setFormValues={setFormValues}
        />
      </AnimatePresence>
    </div>
  );
};

export default page;
