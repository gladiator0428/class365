import React from "react";
import * as Styled from "./registration.styles";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "../../../../config";

type Props = {
  title: string;
  description: string;
  link: string;
  image: any;
};

export const Registration: React.FC<Props> = ({
  description,
  image,
  link,
  title,
}) => {
  return (
    <Styled.RegistrationWrapper>
      <Styled.RegistrationContainer>
        <Styled.RegistrationImageWrapper>
          <img src={STRAPI_API + image?.url} alt="" />
        </Styled.RegistrationImageWrapper>
        <Styled.RegistrationInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            Try for Free <BsArrowRight />
          </a>
        </Styled.RegistrationInfoWrapper>
      </Styled.RegistrationContainer>
    </Styled.RegistrationWrapper>
  );
};
