import React, { useState } from "react";
import { HeaderComponents, Input, SubmitComponents } from "./";
import { motion } from "framer-motion";
import Image from "next/image";

export const ThirdStep = ({
  previousStep,
  handleInputChange,
  formValues,
  inputImageRef,
  previewLink,
  openBrowse,
  formErrors,
  handleDrop,
  handleDragOver,
  handleDragLeave,
  isDragging,
  handleFileInput,
  dateOfBirthError,
  currentStep,
  setCurrentStep,
  setFormValues,
}) => {
  const { dateOfBirth, profileImage } = formValues;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const isValid = validateInputs();

    if (isValid) {
      setIsSubmitted(true);
    }
  };

  const validateInputs = () => {
    const newErrors = {};
    const now = new Date();

    if (!dateOfBirth?.trim()) {
      newErrors.dateOfBirth = "Төрсөн огноогоо оруулна уу.";
    } else if (new Date(dateOfBirth) > now) {
      newErrors.dateOfBirth = "Нас хэтэрсэн байна.";
    } else if (now - new Date(dateOfBirth) < 18 * 365 * 24 * 60 * 60 * 1000) {
      newErrors.dateOfBirth = "18 нас хүрээгүй байна.";
    }

    if (!profileImage) {
      newErrors.profileImage = "Зураг оруулна уу.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleJJSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formValues, step: currentStep + 1 })
    );
    if (validateInputs()) {
      addStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div
        onSubmit={handleJJSubmit}
        className="flex flex-col justify-center items-center w-[480px] h-[655px] bg-white rounded-lg"
      >
        <div className="space-y-2 mb-7">
          <HeaderComponents />

          <div className="flex flex-col flex-grow gap-y-3">
            <div className="space-y-2 pl-8 pr-7">
              <Input
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                value={dateOfBirth}
                onChange={handleInputChange}
                errorMessage={dateOfBirthError || errors.dateOfBirth}
              />
              {formErrors.dateOfBirth && (
                <p className="text-red-600 text-sm mt-1">
                  {formErrors.dateOfBirth}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-8">
            <input
              ref={inputImageRef}
              type="file"
              hidden
              onChange={handleFileInput}
            />

            <label className="text-[12px] font-bold text-black mb-2">
              Profile Image <span className="text-red-600">*</span>
            </label>

            <div
              className={`bg-gray-200 w-[416px] h-60 rounded-md border flex items-center justify-center text-center cursor-pointer transition relative ${
                isDragging ? "border-red-500" : "border-yellow-300"
              }`}
              onClick={openBrowse}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {previewLink ? (
                <Image
                  src={previewLink}
                  layout="fill"
                  alt="Preview"
                  className="rounded-lg object-cover"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <img src="./image.svg" alt="placeholder" />
                  Add image
                </div>
              )}
            </div>

            {formErrors.profileImage && (
              <p className="text-red-600 text-sm mt-2">
                {formErrors.profileImage}
              </p>
            )}
          </div>

          <div className="flex gap-4 pl-8 pr-7">
            <button
              onClick={previousStep}
              className="bg-gray-300 p-2 rounded-xl mt-4 px-4 text-black w-32"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              className="bg-black text-white p-2 rounded-xl mt-4 px-4 flex-1"
            >
              Submit 3/3
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
