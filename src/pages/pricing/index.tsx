import React from "react";
import { AppLayout } from "../../layouts";
import * as Section from "../../modules/pricing";

export const Pricing: React.FC = () => {
  return (
    <AppLayout>
      <Section.Navigation />
      <Section.CoreModules />
      <Section.AddonModules />
      <Section.FAQs />
    </AppLayout>
  );
};
