import React from "react";
import * as Styled from "./discoverCard.styles";
import type { IDiscoverCardProps } from "../../types";

export const DiscoverCard: React.FC<IDiscoverCardProps> = (props) => {
  return (
    <Styled.DiscoverCardWrapper dir="ltr" className="discover-card">
      <Styled.DiscoverContent>
        <h1>“</h1>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Styled.DiscoverContent>
      <Styled.DiscoverOwner>
        {/* <img src={props.avatar} alt="Avatar" /> */}
        <h4>source - Capterra</h4>
        <h5>{props.name}</h5>
        <p>{props.role}</p>
      </Styled.DiscoverOwner>
    </Styled.DiscoverCardWrapper>
  );
};
