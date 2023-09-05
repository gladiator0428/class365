import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding: 110px 0;
  @media screen and (max-width: 768px) {
    padding: 0 0 56px;
  }
`;

export const FeaturesInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 65px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }
`;

export const FeaturesContentWrapper = styled.div`
  .swiper-slide {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FeaturesSwiper = styled.div`
  display: none;
  .swiper-slide {
    width: fit-content;
    height: auto !important;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FeaturesDescription = styled.div`
  max-width: 482px;
  width: 100%;
  color: #1e2123;
  h2 {
    font-size: 36px;
    font-weight: 700;
    margin: 40px 0 24px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  img {
    width: 48px;
    height: 48px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 18px;
    svg {
      width: 40px;
      height: 40px;
    }
    h2 {
      margin: 16px 0 20px;
      font-size: 24px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const FeatureInfo = styled.div`
  max-width: 509px;
  width: 100%;
  padding: 18px 22px;
  border-radius: 6px;
  background: #f1f6fa;
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 125px;
    height: 125px;
  }
  p {
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
