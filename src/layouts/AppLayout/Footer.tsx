import React from "react";
import * as Styled from "./appLayout.styles";
import * as Section from "../../modules/footer";

export const Footer: React.FC = () => {
  return (
    <Styled.FooterWrapper>
      <Section.Book />
      <Section.Navigation />
    </Styled.FooterWrapper>
  );
};
