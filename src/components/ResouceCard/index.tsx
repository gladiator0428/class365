import React from "react";
import * as Styled from "./resource.styles";
import type { IResourceCardProps } from "../../types";
import { STRAPI_API } from "../../config";

export const ResourceCard: React.FC<IResourceCardProps> = ({
  badge,
  badge_color,
  title,
  image,
}) => {
  return (
    <Styled.ResourceCardWrapper>
      <Styled.ImageWrapper>
        <img src={STRAPI_API + image?.url} alt="" />
      </Styled.ImageWrapper>
      <span style={{ background: badge_color }}>{badge}</span>
      <h2>{title}</h2>
    </Styled.ResourceCardWrapper>
  );
};
