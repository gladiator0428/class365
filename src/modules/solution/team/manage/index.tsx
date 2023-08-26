import React from "react";
import * as Styled from "./manage.styles";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export const Manage: React.FC<Props> = ({
  image,
  link,
  description,
  title,
}) => {
  return (
    <Styled.ManageSectionWrapper>
      <Styled.ManageContainer>
        <Styled.ManageInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            Try for Free <BsArrowRight />
          </a>
        </Styled.ManageInfoWrapper>
        <Styled.ManageImageWrapper>
          <img src={image} alt="" />
        </Styled.ManageImageWrapper>
      </Styled.ManageContainer>
    </Styled.ManageSectionWrapper>
  );
};
