import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import * as Styled from "./navItem.styles";
import type * as Type from "../../types";

export const NavItem: React.FC<Type.INavItemProps> = ({
  label,
  to,
  subMenu,
}) => {
  const router = useNavigate();

  const handleNavClick = () => {
    if (subMenu) {
    } else {
      router(to);
    }
  };

  return (
    <Styled.NavItemWrapper onClick={handleNavClick}>
      <Styled.NavLabel>
        <span>{label}</span>
        {subMenu && <BsChevronDown size={11} />}
      </Styled.NavLabel>
      <Styled.SubMenuWrapper></Styled.SubMenuWrapper>
    </Styled.NavItemWrapper>
  );
};
