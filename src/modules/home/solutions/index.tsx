import React, { useState } from "react";
import * as Styled from "./solutions.styles";
import * as Data from "./data";
import { BsArrowRight } from "react-icons/bs";

export const Solutions: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const { solutions } = Data;

  return (
    <Styled.SolutionsWrapper>
      <Styled.SolutionTitleWrapper>
        <h5>Greate solutions for everyone</h5>
        <h1>Student Management System For Learning Management Teams</h1>
      </Styled.SolutionTitleWrapper>
      <Styled.SolutionContentWrapper>
        <Styled.SolutionImageWrapper bg={solutions[selected].image}>
          <div>
            <img src={solutions[selected].image} alt="Solution" />
          </div>
        </Styled.SolutionImageWrapper>
        <Styled.SolutionContainer>
          <div className="image-wrapper">
            <img src={solutions[selected].image} alt="Solution" />
          </div>
          <div className="list">
            {solutions.map((row, key) => (
              <Styled.SolutionCardWrapper
                key={key}
                className={`${key === selected ? "active" : ""}`}
                onClick={() => setSelected(key)}
              >
                <h3>{row.title}</h3>
                <p>
                  <span>{row.text}</span>
                  <div></div>
                  <h4>
                    Start Free 14-days trial <BsArrowRight />
                  </h4>
                </p>
              </Styled.SolutionCardWrapper>
            ))}
          </div>
        </Styled.SolutionContainer>
      </Styled.SolutionContentWrapper>
    </Styled.SolutionsWrapper>
  );
};
