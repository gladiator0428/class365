import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeaturePreAdmission: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.pre} />
      <Section.Grid data={gridData.pre} />
      <Section.Streamline {...streamlineData.pre} />
      <Section.AdmissionTable {...tableData.pre} />
    </AppLayout>
  );
};
