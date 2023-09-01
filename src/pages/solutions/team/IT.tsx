import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";
import { Discover } from "../../../modules/home";
import { Admission } from "../../../modules/solution/institutes";

export const TeamIT: React.FC = () => {
  const {
    landingData,
    recommendedData,
    enjoyData,
    integrateData,
    featuresData,
  } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.it} />
      <Section.Features {...featuresData.it} />
      <Section.Recommended
        {...recommendedData.it}
        bg="#F5F1FA"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Admission {...enjoyData.it} />
      <Section.Integrate {...integrateData.it} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
