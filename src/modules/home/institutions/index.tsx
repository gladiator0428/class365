import React, { useState } from "react";
import * as Styled from "./institutions.styles";
import * as Data from "./data";

export const Institutions: React.FC = () => {
  const { institutions } = Data;
  const [seleted, setSeleted] = useState(0);

  return (
    <Styled.InstitutionsWrapper>
      <Styled.InstitutionContainer>
        <div>
          <h6>For all Institutions</h6>
          <h1>All-in-one learning management solution for institutions</h1>
          <Styled.InstitutionListWrapper>
            {institutions.map((row, index) => (
              <Styled.InstitutionItemWrapper
                key={index}
                className={`${seleted === index ? "active" : ""}`}
              >
                <div onClick={() => setSeleted(index)}>{row.title}</div>
                <p>{row.text}</p>
              </Styled.InstitutionItemWrapper>
            ))}
          </Styled.InstitutionListWrapper>
        </div>
      </Styled.InstitutionContainer>
      <Styled.InstitutionImageWrapper bg={institutions[seleted].image}>
        <img src={institutions[seleted].image} alt="" />
      </Styled.InstitutionImageWrapper>
    </Styled.InstitutionsWrapper>
  );
};
