import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureAlumni: React.FC = () => {
  const { titleData, gridData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Title {...titleData.alumni} />
      <Section.Grid data={gridData.alumni} />
      <Section.Streamline {...streamlineData.alumni} />
      <Section.AdmissionTable {...tableData.alumni} />
    </AppLayout>
  );
};
