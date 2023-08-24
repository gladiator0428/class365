import React, { useState } from "react";
import * as Styled from "./faq.styles";
import * as Comp from "../../../components";
import * as Data from "./data";

export const FAQs: React.FC = () => {
  const { faq } = Data;
  const [collapse, setCollapse] = useState(0);
  return (
    <Styled.FAQSectionWrapper>
      <h1>FAQs</h1>
      <Styled.FAQContainer>
        {faq.map((row, index) => (
          <Comp.FAQCollapse
            key={index}
            {...row}
            onClick={() => setCollapse(index)}
            open={collapse === index}
          />
        ))}
      </Styled.FAQContainer>
    </Styled.FAQSectionWrapper>
  );
};
