import React, { useState } from "react";
import * as Styled from "./coreModule.styles";
import * as Data from "./data";
import { HiPlus } from "react-icons/hi";

export const CoreModules: React.FC = () => {
  const { coreModules } = Data;
  const [open, setOpen] = useState(-1);
  return (
    <Styled.CoreSectionWrapper>
      {coreModules.map((row, index) => (
        <Styled.CoreItem key={index} open={open === index}>
          <h3 onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{row.title}</span>
            <HiPlus />
          </h3>
          <p>{row.text}</p>
        </Styled.CoreItem>
      ))}
    </Styled.CoreSectionWrapper>
  );
};
