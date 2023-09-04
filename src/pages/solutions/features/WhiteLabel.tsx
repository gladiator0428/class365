import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureWhiteLabel: React.FC = () => {
  const { landingData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.white} />
      <Section.Streamline {...streamlineData.white} />
      <Section.AdmissionTable {...tableData.white} />
    </AppLayout>
  );
};
