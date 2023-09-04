import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureStudent: React.FC = () => {
  const { landingData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.student} />
      <Section.Streamline {...streamlineData.student} />
      <Section.AdmissionTable {...tableData.student} />
    </AppLayout>
  );
};
