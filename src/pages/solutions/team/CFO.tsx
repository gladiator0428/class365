import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";
import { Discover } from "../../../modules/home";
import { Admission } from "../../../modules/solution/institutes";

export const TeamCFO: React.FC = () => {
  const {
    landingData,
    recommendedData,
    enjoyData,
    integrateData,
    featuresData,
  } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.cfo} />
      <Section.Features {...featuresData.cfo} />
      <Section.Recommended
        {...recommendedData.cfo}
        bg="#F4FAF1"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Admission {...enjoyData.cfo} />
      <Section.Integrate {...integrateData.cfo} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
