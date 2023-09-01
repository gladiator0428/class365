import React, { useState } from "react";
import * as Styled from "./grid.styles";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  data: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const Grid: React.FC<Props> = ({ data }) => {
  const [collapse, setCollapse] = useState(-1);
  return (
    <Styled.GridWrapper>
      {data.map((item, index) => (
        <Styled.GridItemWrapper key={index}>
          <div>
            <h2>{item.title}</h2>
            <div>
              <img src={item.image} alt="" />
            </div>
          </div>
          <div>
            <p className={collapse === index ? "active" : ""}>
              {item.description}
            </p>
            <div
              onClick={() =>
                setCollapse((prev) => (prev === index ? -1 : index))
              }
            >
              <FaChevronDown />
            </div>
          </div>
        </Styled.GridItemWrapper>
      ))}
    </Styled.GridWrapper>
  );
};
