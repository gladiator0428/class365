import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureApps: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.apps} />
      <Section.Grid data={gridData.apps} />
      <Section.Streamline {...streamlineData.apps} />
      <Section.AdmissionTable {...tableData.apps} />
    </AppLayout>
  );
};
