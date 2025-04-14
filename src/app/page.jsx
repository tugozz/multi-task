"use client";

import { useState } from "react";
import { FirstStep } from "../components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { ThirdStep } from "../components/ThirdStep";
import { SubmitComponents } from "../components/SubmitComponents";

const Home = () => {
  return (
    <div>
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <SubmitComponents />
    </div>
  );
};

export default Home;
