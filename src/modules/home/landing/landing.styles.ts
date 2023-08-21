import { styled } from "styled-components";

export const LandingSectionWrapper = styled.div`
  padding: 60px 0 160px;
  width: 95%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    span {
      color: #9de01f;
    }
  }
  p {
    color: #3b3f42;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; /* 150% */
    max-width: 715px;
    margin: auto;
    margin-top: 24px;
  }
`;

export const LandingButtonWrapper = styled.div`
  display: flex;
  margin: 32px 0 40px;
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export const LandingVideoWrapper = styled.div`
  background: #6772e5;
  border-radius: 12px;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  height: 554px;
  position: relative;
  img {
    position: absolute;
    bottom: -30px;
    right: -30px;
  }
`;
