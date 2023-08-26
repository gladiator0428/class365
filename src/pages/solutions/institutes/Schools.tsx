import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import * as Data from "./data";

export const InstitutesSchools: React.FC = () => {
  const {
    boostData,
    helpingData,
    decreaseData,
    simplifyData,
    toolkitData,
    admissionData,
    improveData,
  } = Data;
  return (
    <AppLayout>
      <Section.Boost {...boostData.schools} />
      <Section.Trusted />
      <Section.Improve {...improveData.schools} />
      <Section.Helping {...helpingData.schools} />
      <Section.Decrease {...decreaseData.schools} />
      <Section.Simplify {...simplifyData.schools} />
      <Section.Toolkit {...toolkitData.schools} />
      <Section.Admission {...admissionData.schools} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
