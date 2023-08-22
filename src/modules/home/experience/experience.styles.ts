import { styled } from "styled-components";

export const ExperienceSectionWrapper = styled.div``;

export const TitleWrapper = styled.div`
  padding: 50px 0 30px;
  top: 0;
  background-color: #fff;
  z-index: 1;
  position: sticky;
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    max-width: 648px;
    margin: auto;
    width: 95%;
  }
`;

export const ExperienceContentWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 40px 0;
  max-width: 1240px;
  align-items: center;
  width: 95%;
  margin: auto;
  margin-top: calc(168px - 100vh);
`;

export const ExperienceItemWrapper = styled.div`
  max-width: 395px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 64px;
  }
  h2 {
    color: #1e2123;
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 32px;
  }
  h4 {
    cursor: pointer;
    color: #6772e5;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    svg {
      margin-left: 8px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: sticky;
  top: 210px;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`;
