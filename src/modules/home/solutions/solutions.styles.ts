import { styled } from "styled-components";

export const SolutionsWrapper = styled.div`
  background: #f9f9ff;
  padding: 90px 0;
`;

export const SolutionTitleWrapper = styled.div`
  max-width: 648px;
  width: 95%;
  margin: auto;
  text-align: center;
  margin-bottom: 80px;
  h5 {
    color: #6772e5;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h1 {
    color: #1e2123;
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
  }
`;

export const SolutionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  & > div {
    max-width: 476px;
    width: 40%;
    margin-left: auto;
  }
`;

export const SolutionCardWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 34px;
  }
  padding: 0 24px 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
  cursor: pointer;
  &.active {
    padding: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #f0f0f000;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 2px 20px 0px #e1e1e1;
  }
  &.active p {
    padding-top: 16px;
    height: fit-content;
    opacity: 1;
  }
  h3 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 500;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    overflow: hidden;
    transition: all 0.3s;
    opacity: 0;
    height: 0;
    padding-top: 0;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
`;

export const SolutionContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SolutionImageWrapper = styled.div<{ bg: string }>`
  width: 100%;
  div {
    transition: all 0.3s;
    width: calc(60% - 36px);
    background: url(${({ bg }) => bg}) no-repeat;
    background-size: 100% 100%;
    image-rendering: pixelated;
    img {
      opacity: 0;
      width: 100%;
    }
  }
`;
