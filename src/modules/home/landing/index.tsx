import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./landing.styles";
import * as Comp from "../../../components";

export const Landing: React.FC = () => {
  return (
    <Styled.LandingSectionWrapper>
      <Styled.LandingShapeWrapper>
        {/* <Comp.Shape1 className="shape-1" />
        <Comp.Shape2 className="shape-2" />
        <Comp.Shape3 className="shape-3" />
        <Comp.Shape4 className="shape-4" />
        <Comp.Shape5 className="shape-5" /> */}
        <img src="/assets/images/shapes/CRM.png" alt="" className="shape-1" />
        <img
          src="/assets/images/shapes/Schedules & communication.png"
          alt=""
          className="shape-2"
        />
        <img src="/assets/images/shapes/SIS.png" alt="" className="shape-3" />
        <img
          src="/assets/images/shapes/Add-ons.png"
          alt=""
          className="shape-4"
        />
        <img src="/assets/images/shapes/LMS.png" alt="" className="shape-5" />
      </Styled.LandingShapeWrapper>
      <h1>
        Transforming{" "}
        <span>
          <TypeAnimation
            sequence={[
              "Education,",
              2000,
              "Student Management,",
              2000,
              "Learner Journey,",
              2000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </span>
        <b>One Institution at a Time</b>
      </h1>
      <p>
        Unlock a seamless learner journey. From admission to alumni networking,
        and beyond - our complete education ERP software has you covered.
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
        <img src="/assets/images/shapes/E-commerce.png" alt="" />
        {/* <img src="/assets/images/shapes/shape-6.png" alt="shape" /> */}
      </Styled.LandingVideoWrapper>
    </Styled.LandingSectionWrapper>
  );
};
