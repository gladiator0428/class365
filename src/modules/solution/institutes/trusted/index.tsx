import React from "react";
import * as Styled from "./trusted.styles";
import * as Data from "./data";

export const Trusted: React.FC = () => {
  const { imgs } = Data;
  return (
    <Styled.TrustedSectionWrapper>
      <p>Trusted by 5500+ educational institutions in 130 countries</p>
      <Styled.ImageWrapper>
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </Styled.ImageWrapper>
    </Styled.TrustedSectionWrapper>
  );
};
