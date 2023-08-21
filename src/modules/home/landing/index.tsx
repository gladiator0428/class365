import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./landing.styles";
import * as Comp from "../../../components";

export const Landing: React.FC = () => {
  return (
    <Styled.LandingSectionWrapper>
      <h1>
        Transforming <span>Education,</span>
        <br /> One Institution at a Time
      </h1>
      <p>
        Unlock a seamless learner journey. From admission to alumni networking,
        and beyond - our complete education solution has you covered.
      </p>
      <Styled.LandingButtonWrapper>
        <Comp.Button
          bg="#6772E5"
          border="#6772E5"
          font="#E1E1E1"
          className="shadow"
        >
          <span>Try For Free</span>
          <BsArrowRight />
        </Comp.Button>
        <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
          Book a Demo
        </Comp.Button>
      </Styled.LandingButtonWrapper>
      <Styled.LandingVideoWrapper>
        <img src="/assets/images/shapes/shape-6.png" alt="shape" />
      </Styled.LandingVideoWrapper>
    </Styled.LandingSectionWrapper>
  );
};
