import React from "react";
import * as Styled from "./appLogo.styles";

export const AppLogo: React.FC = () => {
  return (
    <Styled.AppLogoWrapper to={"/"}>
      <img src={"/assets/images/logo.png"} alt="App Logo" />
    </Styled.AppLogoWrapper>
  );
};
