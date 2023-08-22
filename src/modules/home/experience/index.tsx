import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./experience.styles";
import * as Data from "./data";

export const Experience: React.FC = () => {
  const { experiences } = Data;
  return (
    <Styled.ExperienceSectionWrapper>
      <Styled.TitleWrapper>
        <h1>Experience the Best-in-Class with Classe365</h1>
      </Styled.TitleWrapper>
      <Styled.ImageWrapper>
        <div>
          <img src="/assets/images/experience.png" alt="" />
        </div>
      </Styled.ImageWrapper>
      <Styled.ExperienceContentWrapper>
        {experiences.map((row, index) => (
          <Styled.ExperienceItemWrapper key={index}>
            <h3 style={{ color: row.color }}>{row.subtitle}</h3>
            {row.icon}
            <h2>{row.title}</h2>
            <p>{row.text}</p>
            <h4>
              Try it Free <BsArrowRight />
            </h4>
          </Styled.ExperienceItemWrapper>
        ))}
      </Styled.ExperienceContentWrapper>
    </Styled.ExperienceSectionWrapper>
  );
};
