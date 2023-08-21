import { styled } from "styled-components";

export const BookSectionWrapper = styled.div`
  background-color: #6772e5;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BookSectionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 500;
  }
  h1 {
    color: #ffe92c;
    font-size: 48px;
    font-weight: 600;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin: 18px 0 40px;
    max-width: 480px;
    width: 100%;
  }
`;

export const BookImageWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  display: flex;
  padding-top: 16px;
  img {
    width: 100%;
    image-rendering: pixelated;
  }
`;

export const BookButtoWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;
