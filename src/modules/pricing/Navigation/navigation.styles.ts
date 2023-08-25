import { styled } from "styled-components";

export const NavigationWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding-top: 50px;
  text-align: center;
  & > h1 {
    color: #1e2123;
    max-width: 878px;
    margin: auto;
    margin-bottom: 28px;
    font-size: 36px;
    font-weight: 700;
  }
  & > p {
    color: #3b3f42;
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    text-align: left;
    & > h1 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const StickyNavigationWrapper = styled.div``;

export const GradientBG = styled.div`
  position: sticky;
  top: 100px;
  max-width: 1320px;
  width: 95%;
  margin: auto;
  border-radius: 22px;
  background: linear-gradient(180deg, #a389f4 0%, rgba(137, 244, 205, 0) 100%);
  height: 432px;
  width: 100%;
`;

export const NavigationContainer = styled.div`
  padding-top: 120px;
`;

export const BlurNavigationWrapper = styled.div`
  &::before {
    content: "";
    position: absolute;
    height: 100px;
    top: 0;
    background-color: #fff;
    width: 100vw;
  }
  &::after {
    content: "";
    width: 100%;
    fill: rgba(244, 237, 255, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 0 12px 12px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    height: calc(100% - 74px);
  }
  display: flex;
  justify-content: center;
  padding-top: 20px;
  position: sticky;
  top: 0;
  z-index: 2;
  max-width: 1240px;
  width: 100%;
  margin: auto;
  min-height: 275px;
  margin-top: -530px;
  & > img {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 30px;
  }
`;

export const NavItemWrapper = styled.a`
  height: 64px;
  width: 250px;
  background-image: url("/assets/images/nav.png");
  color: #3b3f42;
  z-index: 0;
  &.active {
    z-index: 1;
    color: #1e2123;
    background-image: url("/assets/images/nav-active.png");
  }

  background-repeat: no-repeat;

  background-size: cover;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  padding-right: 30px;
  &:not(:first-child) {
    margin-left: -10px;
  }
`;

export const NavItems = styled.div`
  position: relative;
  z-index: 1;
  top: 0;
  display: flex;
  flex: 1;
`;
