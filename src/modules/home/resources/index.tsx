import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./resources.styles";
import * as Comp from "../../../components";
import * as Data from "./data";

export const Resources: React.FC = () => {
  const { resources } = Data;
  return (
    <Styled.ResourcesWrapper>
      <h2>All the News and Resources You Need</h2>
      <Styled.ResourcesGridWrapper>
        {resources.map((row, index) => (
          <Comp.ResourceCard {...row} key={index} />
        ))}
      </Styled.ResourcesGridWrapper>
      <Styled.SeeMore>
        <span>See more resources</span>
        <BsArrowRight />
      </Styled.SeeMore>
    </Styled.ResourcesWrapper>
  );
};
