import styled from "styled-components";

export const VideosWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding: 100px 0;
  & > h1 {
    color: #1e2123;
    font-size: 36px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 80px;
  }
  & > div {
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
`;

export const VideoTabWrapper = styled.div`
  max-width: 440px;
  width: 40%;
  margin-right: 50px;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const VideoSliderWrapper = styled.div`
  max-width: 700px;
  width: 70%;
  .mySwiper {
    padding-bottom: 50px;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      margin: 0 6px;
      &.swiper-pagination-bullet-active {
        background-color: #6772e5;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const VideoTabItem = styled.div<{ active?: string }>`
  border-radius: 12px;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 20px 0px rgba(84, 84, 84, 0.25)" : "none"};
  border: ${({ active }) => (active ? "none" : "1px solid #555")};
  background: ${({ active }) => (active ? "#fafafa" : "#fff")};
  transition: all 0.3s;
  &:not(:first-child) {
    margin-top: 16px;
  }
  h3 {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    height: 76px;
    padding: 0 26px;
    color: #3b3f42;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      height: 28px;
      border-radius: 999px;
      background: ${({ active }) => (active ? "#6772E5" : "transparent")};
      color: ${({ active }) => (active ? "#fff" : "#7c7c7c")};
    }
  }
  & > div {
    transition: all 0.3s;
    height: ${({ active }) => (active ? "fit-content" : "0px")};
    padding: 0 26px;
    overflow: hidden;
    opacity: ${({ active }) => (active ? "1" : "0")};
    padding-bottom: ${({ active }) => (active ? "25px" : "0px")};
    p {
      color: #3b3f42;
      font-size: 16px;
      cursor: pointer;
      font-weight: 400;
      line-height: 24px;
      &.active {
        color: #6772e5;
      }
    }
    & > div {
      display: none;
      width: 100%;
      padding-top: 20px;
      .mySwiper {
        padding-bottom: 50px;
        .swiper-slide {
          display: flex;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          &.swiper-pagination-bullet-active {
            background-color: #6772e5;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    & > div {
      & > div {
        display: flex;
      }
    }
  }
`;

export const VideoSliderItem = styled.div`
  border-radius: 16px;
  background: #3b3f42;
  display: flex;
  flex-direction: column;
  padding: 0 8px 30px;
  & > div {
    padding: 22px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
    }
    button {
      outline: none;
      border: none;
      padding: 8px 12px;
      border-radius: 6px;
      background: #ac3939;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
  video {
    width: 100%;
    border: 1px solid red;
    border-radius: 14px;
  }
  @media screen and (max-width: 1024px) {
    width: 98%;
    margin: auto;
  }
`;
