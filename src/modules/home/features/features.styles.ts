import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding: 110px 0;
`;

export const FeaturesInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 65px;
  margin-bottom: 65px;
`;

export const FeaturesContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
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
`;
