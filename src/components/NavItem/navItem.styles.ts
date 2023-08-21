import { styled } from "styled-components";

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const NavLabel = styled.div`
  color: #1e2123;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 4px;
  }
`;

export const SubMenuWrapper = styled.div``;
