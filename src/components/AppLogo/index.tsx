import React from "react";
import * as Styled from "./appLogo.styles";
import { AppLogoSVG } from "../SVGs/logo";

export const AppLogo: React.FC = () => {
  return (
    <Styled.AppLogoWrapper to={"/"}>
      <AppLogoSVG />
    </Styled.AppLogoWrapper>
  );
};
