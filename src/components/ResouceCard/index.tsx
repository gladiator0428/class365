import React from "react";
import * as Styled from "./resource.styles";
import type { IResourceCardProps } from "../../types";

export const ResourceCard: React.FC<IResourceCardProps> = ({
  badge,
  badgeColor,
  title,
  image,
}) => {
  return (
    <Styled.ResourceCardWrapper>
      <Styled.ImageWrapper>
        <img src={image} alt="" />
      </Styled.ImageWrapper>
      <span style={{ background: badgeColor }}>{badge}</span>
      <h2>{title}</h2>
    </Styled.ResourceCardWrapper>
  );
};
