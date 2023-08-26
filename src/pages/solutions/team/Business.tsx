import React from "react";
import { AppLayout } from "../../../layouts";
import * as Section from "../../../modules/solution/team";
import * as Data from "./data";
import { Discover } from "../../../modules/home";

export const TeamBusiness: React.FC = () => {
  const { landingData, recommendedData, enjoyData, integrateData } = Data;
  return (
    <AppLayout>
      <Section.Landing {...landingData.business} />
      <Section.Features />
      <Section.Recommended
        {...recommendedData.business}
        bg="#F1F6FA"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Section.Enjoy {...enjoyData.business} />
      <Section.Integrate {...integrateData.business} />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};
