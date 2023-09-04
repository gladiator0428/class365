import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/features";
import * as Data from "./data";

export const FeatureEcommerce: React.FC = () => {
  const { landingData, streamlineData, tableData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.ecommerce} />
      <Section.Streamline {...streamlineData.ecommerce} />
      <Section.AdmissionTable {...tableData.ecommerce} />
    </AppLayout>
  );
};
