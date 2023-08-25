import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import * as Data from "./data";

export const InstitutesCorporate: React.FC = () => {
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
      <Section.Boost {...boostData.corporate} />
      <Section.Trusted />
      <Section.Improve />
      <Section.Helping {...helpingData.corporate} />
      <Section.Decrease {...decreaseData.corporate} />
      <Section.Simplify {...simplifyData.corporate} />
      <Section.Toolkit {...toolkitData.corporate} />
      <Section.Admission {...admissionData.corporate} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
