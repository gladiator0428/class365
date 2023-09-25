import React from "react";
import * as Styled from "./featureCard.styles";
import type { IFeatureCard } from "../../types";
import { STRAPI_API } from "../../config";

export const FeatureCard: React.FC<IFeatureCard> = (props) => {
  return (
    <Styled.FeatureCardWrapper>
      <img src={STRAPI_API + props.image?.url} alt="Feature" />
      <div>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
      </div>
    </Styled.FeatureCardWrapper>
  );
};
