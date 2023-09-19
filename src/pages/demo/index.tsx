import React from "react";
import * as Footer from "../../modules/footer";
import * as Section from "../../modules/demo";
import { Trusted } from "../../modules/solution/institutes";

export const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Section.Landing />
      <Section.Schedule />
      <Section.Videos />
      <Section.Calendar />
      <Section.Access />
      <Trusted />
      <Footer.Navigation />
    </React.Fragment>
  );
};
