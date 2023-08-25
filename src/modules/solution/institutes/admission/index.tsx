import React from "react";
import * as Styled from "./admission.styles";

type Props = {
  title: string;
  description: string;
  grid: { title: string; description: string; image: string }[];
};

export const Admission: React.FC<Props> = ({ description, grid, title }) => {
  return (
    <Styled.AdmissionWrapper>
      <Styled.AdmissionInfoWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </Styled.AdmissionInfoWrapper>
      <Styled.AdmissionGridWrapper>
        {grid.map((item, index) => (
          <Styled.AdmissionItemWrapper key={index}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </Styled.AdmissionItemWrapper>
        ))}
      </Styled.AdmissionGridWrapper>
    </Styled.AdmissionWrapper>
  );
};
