import React from "react";
import { Trusted, Boost } from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";

export const TeamRegister: React.FC = () => {
  const {
    boostData,
    enjoyData,
    manageData,
    powerfulData,
    recommendedData,
    registrationData,
  } = Data;
  return (
    <AppLayout>
      <Boost {...boostData.register} />
      <Trusted />
      <Section.Manage {...manageData.register} />
      <Section.Registration {...registrationData.register} />
      <Section.Powerful {...powerfulData.register} />
      <Section.Recommended {...recommendedData.register} />
      <Section.Enjoy {...enjoyData.register} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
