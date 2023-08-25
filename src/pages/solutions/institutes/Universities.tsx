import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/institutes";
import { Discover } from "../../../modules/home";
import * as Data from "./data";

export const InstitutesUniversities: React.FC = () => {
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
      <Section.Boost {...boostData.universities} />
      <Section.Trusted />
      <Section.Improve />
      <Section.Helping {...helpingData.universities} />
      <Section.Decrease {...decreaseData.universities} />
      <Section.Simplify {...simplifyData.universities} />
      <Section.Toolkit {...toolkitData.universities} />
      <Section.Admission {...admissionData.universities} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
