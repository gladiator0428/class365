import { styled } from "styled-components";

export const NavigationWrapper = styled.div`
  background: #393c59;
  color: #fff;
`;

export const NavigationContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding-top: 70px;
`;

export const FooterLogo = styled.img`
  margin-bottom: 56px;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 49px;
`;

export const NavigationListWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 64px;
  }
  padding-bottom: 70px;
`;

export const NavigationListContent = styled.div`
  color: #fff;
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #f1f6fa;
    font-size: 16px;
    font-weight: 400;
    &:not(:first-child) {
      margin-bottom: 18px;
    }
  }
`;

export const DownloadButtonWrapper = styled.div`
  display: flex;
  a {
    &:not(:first-child) {
      margin-left: 12px;
    }
  }
  img {
    image-rendering: pixelated;
  }
`;

export const CopyrightWrapper = styled.div`
  border-top: 1px solid #5b5e81;
  padding-top: 24px;
  padding-bottom: 46px;
  display: flex;
  justify-content: space-between;
  & > p {
    color: #f1f6fa;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SocialsNavWrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #f1f6fa;
    text-decoration: none;
    display: block;
    &.social-link {
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #292c45;
      color: #b9bdc3;
      border-radius: 9999px;
    }
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
`;
