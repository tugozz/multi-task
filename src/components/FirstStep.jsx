import React from "react";
import { HeaderComponents, Input } from "./";
import { motion } from "framer-motion";

const isEmpty = (value) => !value?.trim();

const validateStepOne = ({ firstName, lastName, userName }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Нэрээ оруулна уу";
  }

  if (isEmpty(lastName)) {
    validationErrors.lastName = "Овгоо оруулна уу";
  }

  if (isEmpty(userName)) {
    validationErrors.userName = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const FirstStep = ({
  addStep,
  handleInputChange,
  formValues,
  formErrors,
  updateFormErrors,
}) => {
  const { firstName = "", lastName = "", userName = "" } = formValues || {};
  const {
    firstName: errorFirstName,
    lastName: errorLastName,
    userName: errorUserName,
  } = formErrors || {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isFormValid, validationErrors } = validateStepOne(formValues);

    if (isFormValid) {
      addStep();
    } else {
      updateFormErrors(validationErrors);
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
        className="flex-col justify-center items-center w-[480px] h-[655px] bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
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
                errorMessage={errorFirstName}
                label="First name"
                className="w-[380px] h-[56px] text-base px-4 py-3"
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                name="lastName"
                type="text"
                placeholder="Your last name"
                value={lastName}
                errorMessage={errorLastName}
                onChange={handleInputChange}
                label="Last name"
              />
            </div>
            <div className="space-y-2 pl-8">
              <Input
                type="text"
                name="userName"
                placeholder="Your username"
                value={userName}
                errorMessage={errorUserName}
                onChange={handleInputChange}
                label="Username"
              />
            </div>
          </div>
          <div className="pl-8 mt-[120px]">
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-xl mt-4 px-4 w-[416px]"
            >
              Continue 1/3
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
