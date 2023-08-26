import React from "react";
import { Trusted, Boost } from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";

export const TeamTeachers: React.FC = () => {
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
      <Boost {...boostData.teachers} />
      <Trusted />
      <Section.Manage {...manageData.teachers} />
      <Section.Registration {...registrationData.teachers} />
      <Section.Powerful {...powerfulData.teachers} />
      <Section.Recommended {...recommendedData.teachers} />
      <Section.Enjoy {...enjoyData.teachers} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
