import { styled } from "styled-components";

export const NavigationWrapper = styled.div`
  max-width: 1320px;
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
