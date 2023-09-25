import React, { useState } from "react";
import * as Styled from "./solutions.styles";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "../../../config";

type Props = {
  subtitle?: string;
  title?: string;
  data?: {
    title?: string;
    text: string;
    image: any;
  }[];
};

export const Solutions: React.FC<Props> = ({ data = [], subtitle, title }) => {
  const [selected, setSelected] = useState(0);

  return (
    <Styled.SolutionsWrapper>
      <Styled.SolutionTitleWrapper>
        <h5>{subtitle}</h5>
        <h1>{title}</h1>
      </Styled.SolutionTitleWrapper>
      <Styled.SolutionContentWrapper id="image-wrapper1">
        <Styled.SolutionImageGroup>
          <Styled.SolutionImageWrapper
            bg={STRAPI_API + data[selected]?.image?.url}
          >
            <div>
              <img
                src={STRAPI_API + data[selected]?.image?.url}
                alt="Solution"
              />
            </div>
          </Styled.SolutionImageWrapper>
        </Styled.SolutionImageGroup>
        <Styled.SolutionContainer>
          <div className="image-wrapper">
            {data.map((item, key) => (
              <div key={key} id={`solution1-image-${key}`}>
                <img src={STRAPI_API + item.image.url} alt="Solution" />
              </div>
            ))}
          </div>
          <div className="list">
            {data.map((row, key) => (
              <Styled.SolutionCardWrapper
                key={key}
                className={`${key === selected ? "active" : ""}`}
                onClick={() => setSelected(key)}
              >
                <h3>{row.title}</h3>
                <div>
                  <span>{row.text}</span>
                  <div>
                    <img src={STRAPI_API + row.image.url} alt="" />
                  </div>
                  <h4>
                    Start Free 14-days trial <BsArrowRight />
                  </h4>
                </div>
              </Styled.SolutionCardWrapper>
            ))}
          </div>
        </Styled.SolutionContainer>
      </Styled.SolutionContentWrapper>
    </Styled.SolutionsWrapper>
  );
};
