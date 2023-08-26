import React from "react";
import { Trusted, Boost } from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";

export const TeamMarketing: React.FC = () => {
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
      <Boost {...boostData.marketing} />
      <Trusted />
      <Section.Manage {...manageData.marketing} />
      <Section.Registration {...registrationData.marketing} />
      <Section.Powerful {...powerfulData.marketing} />
      <Section.Recommended {...recommendedData.marketing} />
      <Section.Enjoy {...enjoyData.marketing} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
