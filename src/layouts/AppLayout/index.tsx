import React from "react";
import * as Styled from "./appLayout.styles";
import { Header } from "./Header";
import * as Section from "../../modules/footer";

type Props = {
  is_new_book?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const AppLayout: React.FC<Props> = ({ children, is_new_book }) => {
  return (
    <Styled.AppLayoutWrapper>
      <Header />
      <Styled.AppContentWrapper>{children}</Styled.AppContentWrapper>
      <Styled.FooterWrapper>
        {is_new_book ? <Section.NewBook /> : <Section.Book />}
        <Section.Navigation />
      </Styled.FooterWrapper>
    </Styled.AppLayoutWrapper>
  );
};
