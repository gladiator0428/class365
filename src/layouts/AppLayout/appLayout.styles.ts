import { styled } from "styled-components";

export const AppLayoutWrapper = styled.div``;

export const AppContentWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 48px;
  }
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 32px;
  }
`;

export const FooterWrapper = styled.div``;
