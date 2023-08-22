import React from "react";
import * as Styled from "./featureCard.styles";
import type { IFeatureCard } from "../../types";

export const FeatureCard: React.FC<IFeatureCard> = (props) => {
  return (
    <Styled.FeatureCardWrapper>
      <img src={props.image} alt="Image" />
      <div>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
      </div>
    </Styled.FeatureCardWrapper>
  );
};
