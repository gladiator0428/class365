import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";
import { Discover } from "../../../modules/home";
import { Admission } from "../../../modules/solution";

export const TeamAdministrator: React.FC = () => {
  const {
    landingData,
    recommendedData,
    enjoyData,
    integrateData,
    featuresData,
  } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.administrator} />
      <Section.Features {...featuresData.administrator} />
      <Section.Recommended
        {...recommendedData.administrator}
        bg="#F4FAF1"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Admission {...enjoyData.administrator} />
      <Section.Integrate {...integrateData.administrator} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
