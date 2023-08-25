import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import * as Data from "./data";

export const InstitutesAcademies: React.FC = () => {
  const {
    boostData,
    helpingData,
    decreaseData,
    simplifyData,
    toolkitData,
    admissionData,
  } = Data;
  return (
    <AppLayout>
      <Section.Boost {...boostData.academies} />
      <Section.Trusted />
      <Section.Improve />
      <Section.Helping {...helpingData.academies} />
      <Section.Decrease {...decreaseData.academies} />
      <Section.Simplify {...simplifyData.academies} />
      <Section.Toolkit {...toolkitData.academies} />
      <Section.Admission {...admissionData.academies} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
