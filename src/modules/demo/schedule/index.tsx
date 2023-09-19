import React from "react";
import * as Styled from "./schedule.styles";
import * as Comp from "../../../components";
import { BsArrowRight } from "react-icons/bs";

export const Schedule: React.FC = () => {
  return (
    <Styled.ScheduleWrapper>
      <h1>Can't make it for the webinar? Schedule a one on one meeting</h1>
      <Comp.Button className="schedule-button">
        <span>Click here to schedule</span>
        <BsArrowRight />
      </Comp.Button>
    </Styled.ScheduleWrapper>
  );
};
