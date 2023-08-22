import React, { useState } from "react";
import * as Styled from "./solutions.styles";
import * as Data from "./data";

export const Solutions: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const { solutions } = Data;

  return (
    <Styled.SolutionsWrapper>
      <Styled.SolutionTitleWrapper>
        <h5>Greate solutions for everyone</h5>
        <h1>Smart Solutions For Learning Managements Teams</h1>
      </Styled.SolutionTitleWrapper>
      <Styled.SolutionContentWrapper>
        <Styled.SolutionContainer>
          <div>
            {solutions.map((row, key) => (
              <Styled.SolutionCardWrapper
                key={key}
                className={`${key === selected ? "active" : ""}`}
                onClick={() => setSelected(key)}
              >
                <h3>{row.title}</h3>
                <p>{row.text}</p>
              </Styled.SolutionCardWrapper>
            ))}
          </div>
        </Styled.SolutionContainer>
        <Styled.SolutionImageWrapper bg={solutions[selected].image}>
          <div>
            <img src={solutions[selected].image} alt="Solution Image" />
          </div>
        </Styled.SolutionImageWrapper>
      </Styled.SolutionContentWrapper>
    </Styled.SolutionsWrapper>
  );
};
