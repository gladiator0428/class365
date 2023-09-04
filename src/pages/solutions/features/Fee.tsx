import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureFee: React.FC = () => {
  const { landingData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.fee} />
      <Section.Streamline {...streamlineData.fee} />
      <Section.AdmissionTable {...tableData.fee} />
    </AppLayout>
  );
};
