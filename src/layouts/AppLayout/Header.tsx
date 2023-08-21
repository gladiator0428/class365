import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./appLayout.styles";
import * as Comp from "../../components";
import * as Data from "./data";

export const Header: React.FC = () => {
  const { headerLeftNavs, headerRightNavs } = Data;
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderNavWrapper>
        <Comp.AppLogo />
        <Styled.HeaderNavContainer>
          {headerLeftNavs.map((nav, index) => (
            <Comp.NavItem {...nav} key={index} />
          ))}
        </Styled.HeaderNavContainer>
      </Styled.HeaderNavWrapper>
      <Styled.HeaderNavContainer>
        {headerRightNavs.map((nav, index) => (
          <Comp.NavItem {...nav} key={index} />
        ))}
        <Comp.Button size="sm">
          <span>Try it Free</span>
          <BsArrowRight />
        </Comp.Button>
      </Styled.HeaderNavContainer>
    </Styled.HeaderWrapper>
  );
};
