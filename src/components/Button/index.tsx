import React from "react";
import * as Styled from "./button.styles";
import type { IButtonProps } from "../../types";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  bg = "#6772E5",
  border = "#6772E5",
  font = "#ffffff",
  className,
  size = "md",
  children,
}) => {
  return (
    <Styled.ButtonWrapper
      className={className}
      size={size}
      onClick={onClick}
      bg={bg}
      border={border}
      font={font}
    >
      {children}
    </Styled.ButtonWrapper>
  );
};
