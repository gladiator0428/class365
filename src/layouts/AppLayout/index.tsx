import React from "react";
import * as Styled from "./appLayout.styles";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <Styled.AppLayoutWrapper>
      <Header />
      <Styled.AppContentWrapper>{children}</Styled.AppContentWrapper>
      <Footer />
    </Styled.AppLayoutWrapper>
  );
};
