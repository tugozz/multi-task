import React, { useState } from "react";
import { HeaderComponents, Input } from "./";
import { motion } from "framer-motion";

export const SecondStep = ({
  previousStep,
  addStep,
  handleInputChange,
  formValues,
  emailError,
  phoneError,
  passwordError,
  confirmPasswordError,
  currentStep,
}) => {
  const {
    email = "",
    phoneNumber = "",
    password = "",
    confirmPassword = "",
  } = formValues || {};

  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Мэйл хаягаа зөв оруулна уу.";
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
    } else if (!/^\d{8}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Утасны дугаар 8 оронтой байх ёстой.";
    }

    if (!password.trim() || password.length < 6) {
      newErrors.password = "Нууц үг дор хаяж 6 тэмдэгттэй байх ёстой.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
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
      <form
        onSubmit={handleSubmit}
        className="flex-col justify-center items-center w-[480px] h-[655px] bg-white rounded-lg"
      >
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
                label="Email"
                errorMessage={emailError || errors.email}
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                name="phoneNumber"
                type="text"
                placeholder="Your phone number"
                value={phoneNumber}
                onChange={handleInputChange}
                label="Phone number"
                errorMessage={phoneError || errors.phoneNumber}
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={handleInputChange}
                label="Password"
                errorMessage={passwordError || errors.password}
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleInputChange}
                label="Confirm password"
                errorMessage={confirmPasswordError || errors.confirmPassword}
              />
            </div>
          </div>

          <div className="flex gap-4 pl-8 pr-7 mt-8">
            <button
              type="button"
              onClick={previousStep}
              className="bg-gray-300 p-2 rounded-xl mt-4 px-4 text-black w-32"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-xl mt-4 px-4 flex-1"
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
