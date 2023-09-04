import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureAnalytics: React.FC = () => {
  const { landingData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.analytics} />
      <Section.Streamline {...streamlineData.analytics} />
      <Section.AdmissionTable {...tableData.analytics} />
    </AppLayout>
  );
};
