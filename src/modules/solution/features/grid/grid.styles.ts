import { styled } from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & > :nth-child(odd) {
    & > div:first-child {
      background: #a389f4;
    }
    & > div:last-child {
      background: #fafafa;
    }
  }
  & > :nth-child(even) {
    & > div:first-child {
      background: #6772e5;
    }
    & > div:last-child {
      background: #f1f6fa;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItemWrapper = styled.div`
  & > div:first-child {
    padding-top: 43px;
    height: 436px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      max-width: 310px;
      margin: 0 auto;
      text-align: center;
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    & > div {
      display: flex;
      justify-content: center;

      width: 100%;
      max-height: 300px;
      margin: 0 auto;
      img {
        width: 98%;
        max-width: 295px;
        height: auto;
      }
    }
  }
  &:first-child > div > div {
    justify-content: flex-start;
    img {
      max-width: 340px;
    }
  }
  &:last-child > div > div {
    justify-content: flex-end;
    img {
      max-width: 340px;
    }
  }

  & > div:last-child {
    padding: 24px 30px;
    align-items: center;
    display: flex;
    p {
      margin-right: 16px;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      height: 66px;
      overflow: hidden;
      text-overflow: ellipsis;
      &.active {
        height: 100%;
      }
    }
    div {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    &:first-child > div > div,
    &:last-child > div > div {
      justify-content: center;
    }
  }
`;
