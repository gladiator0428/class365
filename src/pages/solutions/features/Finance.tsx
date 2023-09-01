import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureFinance: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.finance} />
      <Section.Grid data={gridData.finance} />
      <Section.Streamline {...streamlineData.finance} />
      <Section.AdmissionTable {...tableData.finance} />
    </AppLayout>
  );
};
