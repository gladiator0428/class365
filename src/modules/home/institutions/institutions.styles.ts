import { styled } from "styled-components";

export const InstitutionsWrapper = styled.div`
  background: #6772e5;
  padding: 90px 0;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const InstitutionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  & > div {
    max-width: 545px;
    width: 100%;
  }
  h6 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 72px;
    max-width: 430px;
  }
`;

export const InstitutionImageWrapper = styled.div<{ bg: string }>`
  max-width: calc(100% - 580px);
  width: 55%;
  margin-left: auto;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: 100% 100%;
  image-rendering: pixelated;
  transition: all 0.3s;
  img {
    opacity: 0;
    width: 100%;
  }
`;

export const InstitutionListWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 24px;
  }
`;

export const InstitutionItemWrapper = styled.div`
  &.active {
    div {
      color: #1e2123;
      box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
      background: #fff;
    }
    p {
      height: fit-content;
      opacity: 1;
      padding: 20px 0 16px;
    }
  }
  div {
    cursor: pointer;
    width: fit-content;
    padding: 16px 64px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 37px;
    white-space: nowrap;
    border: 1px solid #fff;
    background: transparent;
    transition: all 0.3s;
    color: #fff;
  }
  p {
    height: 0;
    overflow: hidden;
    opacity: 0;
    color: #fff;
    transition: all 0.3s;
    font-size: 18px;
    font-weight: 500;
  }
`;
