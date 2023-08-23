import { styled } from "styled-components";

export const ResourceCardWrapper = styled.div`
  span {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    padding: 4px 8px;
    display: block;
    width: fit-content;
    border-radius: 9999px;
  }
  h2 {
    margin-top: 12px;
    color: #555;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const ImageWrapper = styled.div`
  background: #f1f6fa;
  margin-bottom: 8px;
  border-radius: 12px;
  width: 100%;
  height: 160px;
`;
