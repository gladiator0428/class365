import { styled } from "styled-components";

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    padding: 10px 0;
    flex-wrap: wrap;
  }
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
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const SubMenuWrapper = styled.div<{ active?: string }>`
  position: absolute;
  left: 0;
  top: 30px;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: all 0.3s;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00000010;
  padding: 8px 10px;
  border-radius: 8px;
  z-index: 10;
  &.sub-menu {
    right: -260px;
    left: auto;
    top: 0;
  }
  @media screen and (max-width: 1024px) {
    position: static;
    transition: none;
    box-shadow: none;
    width: 100%;
    height: ${({ active }) => (active ? "fit-content" : "0")};
    padding: ${({ active }) => (active ? "8px 10px" : "0")};
    &.sub-menu {
    }
  }
`;

export const SubMenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 10px;
  width: 230px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    svg {
      transform: rotate(90deg);
      margin-left: 4px;
    }
  }
`;
