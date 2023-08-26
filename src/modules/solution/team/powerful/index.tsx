import React from "react";
import * as Styled from "./powerful.styles";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export const Powerful: React.FC<Props> = ({
  description,
  image,
  link,
  title,
}) => {
  return (
    <Styled.PowerfulWrapper>
      <Styled.PowerfulContainer>
        <Styled.PowerfulInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            Try for Free <BsArrowRight />
          </a>
        </Styled.PowerfulInfoWrapper>
        <Styled.PowerfulImageWrapper>
          <img src={image} alt="" />
        </Styled.PowerfulImageWrapper>
      </Styled.PowerfulContainer>
    </Styled.PowerfulWrapper>
  );
};
