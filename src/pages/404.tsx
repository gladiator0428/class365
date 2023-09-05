import React from "react";
import { AppLayout } from "../layouts";
import * as Section from "../modules/404";

export const NotFound: React.FC = () => {
  return (
    <AppLayout>
      <Section.NotFound />
    </AppLayout>
  );
};
