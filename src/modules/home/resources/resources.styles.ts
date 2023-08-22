import { styled } from "styled-components";

export const ResourcesWrapper = styled.div`
  max-width: 1180px;
  width: 95%;
  margin: auto;
  margin-bottom: 160px;
  & > h2 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 72px;
  }
`;

export const ResourcesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 72px;
  margin-bottom: 48px;
`;

export const SeeMore = styled.a`
  color: #6772e5;
  font-size: 20px;
  font-weight: 500;
  text-decoration-line: underline;
  display: flex;
  align-items: center;
  width: fit-content;
  margin: auto;
  span {
    margin-right: 8px;
  }
`;
