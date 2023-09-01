import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureLearning: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.learning} />
      <Section.Grid data={gridData.learning} />
      <Section.Streamline {...streamlineData.learning} />
      <Section.AdmissionTable {...tableData.learning} />
    </AppLayout>
  );
};
