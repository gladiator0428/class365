import React from "react";
import * as Styled from "./decrease.styles";

type Props = {
  title: string;
  description: string;
  image: string;
};

export const Decrease: React.FC<Props> = ({ description, image, title }) => {
  return (
    <Styled.DecreaseWrapper>
      <Styled.DecreaseContainer>
        <Styled.DecreaseInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
        </Styled.DecreaseInfoWrapper>
        <Styled.DecreaseImageWrapper>
          <img src={image} alt="" />
        </Styled.DecreaseImageWrapper>
      </Styled.DecreaseContainer>
    </Styled.DecreaseWrapper>
  );
};
