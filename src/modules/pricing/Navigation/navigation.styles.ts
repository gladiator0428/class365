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
  @media screen and (max-width: 1024px) {
    text-align: left;
    & > h1 {
      margin: 0;
      margin-bottom: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 20px;
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
  @media screen and (max-width: 1024px) {
    padding-top: 32px;
  }
`;

export const BlurNavigationWrapper = styled.div`
  &::before {
    content: "";
    position: absolute;
    height: 98px;
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
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  min-height: 275px;
  padding-bottom: 50px;
  margin-top: -530px;
  & > img {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 30px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s;
  }
  &.is-sticky {
    padding-bottom: 20px;
    & > img {
      opacity: 0;
      visibility: hidden;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
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
  height: fit-content;
  width: 100%;
`;

export const NavContentWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  z-index: 3;
  display: flex;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.is-sticky {
    h2 {
      display: none;
    }
    h1 {
      margin: 0 0 24px;
    }
    flex-direction: row;
  }
  .handle-label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
  h2 {
    color: #1e2123;
    text-align: center;
    font-size: 24px;
    transition: all 0.3s;
    margin-bottom: 35px;
    font-weight: 700;
  }
  .horizontal-slider {
    max-width: 730px;
    width: 100%;
  }
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    margin: 28px auto;
    span {
      color: #1e2123;
      font-size: 24.86px;
      font-weight: 700;
    }
  }
`;

export const SwitchWrapper = styled.div`
  user-select: none;
  &.is-sticky {
    position: absolute;
    top: -80px;
    right: 0;
    background: #f1f6fa;
  }
  span {
    flex: 1;
    display: inline-flex;
    justify-content: center;
  }
  width: 207px;
  height: 44px;
  padding: 3px;
  border-radius: 9999px;
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 45px;
  font-weight: 700;
  div {
    position: absolute;
    display: flex;
    align-items: center;
    width: 106px;
    height: 38px;
    background-color: #98b5cd;
    justify-content: center;
    border-radius: 9999px;
    color: #fff;
    transition: all 0.3s;
    left: 3px;
    right: auto;
    &.checked {
      right: 3px;
      left: auto;
    }
  }
  span {
    color: #6772e5;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  .is-sticky {
    display: none;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 224px;
    &:first-child {
      span::before {
        width: 14px;
        left: -14px;
        border-radius: 100px 0 0 100px;
      }
    }
    &:last-child {
      span::after {
        width: 14px;
        right: -14px;
        border-radius: 0 100px 100px 0;
      }
    }
  }
  p {
    color: #6772e5;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 7px;
  }
  span {
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s;
    background-color: #6772e5;
    &.active {
      background-color: #4ed163;
      box-shadow: 0px 4px 20px rgba(84, 84, 84, 0.25);
    }
    &::before,
    &::after {
      content: "";
      background: #6772e5;
      height: 4px;
      position: absolute;
      width: 100px;
    }
    &::after {
      right: -100px;
    }
    &::before {
      left: -100px;
    }
  }
`;
