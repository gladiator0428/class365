import React from "react";
import * as Styled from "./404.styles";
import * as Comp from "../../components";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const router = useNavigate();
  return (
    <Styled.NotFoundWrapper>
      <h1>404</h1>
      <h3>Oops! Page not found</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
        pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <Comp.Button size="sm" onClick={() => router("/")}>
        <span>Go to Homepage</span>
        <BsArrowRight />
      </Comp.Button>
    </Styled.NotFoundWrapper>
  );
};
