import { keyframes, styled } from "styled-components";

const bubbleAnim = keyframes`
  50% {
    transform: translateY(-10px) rotate(26.368deg);
  }
`;

export const LandingSectionWrapper = styled.div`
  padding: 60px 0 110px;
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
  svg {
    position: absolute;
    bottom: -20px;
    right: -20px;
    transform: translateY(0px) rotate(26.368deg);
    animation: ${bubbleAnim} 2s infinite ease-in-out;
  }
`;

export const LandingShapeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  svg {
    position: absolute;
    transform: translateY(0px) rotate(26.368deg);
    animation: ${bubbleAnim} 2s infinite ease-in-out;
  }
  .shape-1 {
    top: 14%;
    left: 5%;
  }
  .shape-2 {
    top: 8%;
    right: 8%;
  }
  .shape-3 {
    top: 50%;
    left: 4%;
  }
  .shape-4 {
    top: 45%;
    right: 0;
  }
  .shape-5 {
    bottom: 0%;
    left: 50%;
  }
`;
