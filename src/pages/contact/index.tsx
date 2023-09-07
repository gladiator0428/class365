import React from "react";
import * as Section from "../../modules/contact";
import { AppLayout } from "../../layouts";

export const ContactUs: React.FC = () => {
  return (
    <AppLayout>
      <Section.ContactForm />
      <Section.Location />
    </AppLayout>
  );
};
