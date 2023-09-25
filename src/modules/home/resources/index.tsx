import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./resources.styles";
import * as Comp from "../../../components";

type Props = {
  title: string;
  data: {
    badge: string;
    badge_color: string;
    image: any;
    title: string;
  }[];
};

export const Resources: React.FC<Props> = ({ data, title }) => {
  return (
    <Styled.ResourcesWrapper>
      <h2>{title}</h2>
      <Styled.ResourcesGridWrapper>
        {data
          ?.filter((f, index) => index < 3)
          .map((row, index) => (
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
