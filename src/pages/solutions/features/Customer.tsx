import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureCustomer: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.customer} />
      <Section.Grid data={gridData.customer} />
      <Section.Streamline {...streamlineData.customer} />
      <Section.AdmissionTable {...tableData.customer} />
    </AppLayout>
  );
};
