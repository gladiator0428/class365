import React, { useState } from "react";
import * as Styled from "./recommended.styles";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  title: string;
  tabs: { value: string; label: string }[];
  data: {
    tab: string;
    icon: string;
    description: string;
    image: string;
    link: string;
  }[];
  bg?: string;
  titleColor?: string;
  textColor?: string;
  tabStyle?: boolean;
};

export const Recommended: React.FC<Props> = ({
  data,
  tabs,
  title,
  bg,
  titleColor,
  textColor,
  tabStyle,
}) => {
  const [selected, setSelected] = useState(tabs[0].value);
  return (
    <Styled.RecommendedWrapper style={{ background: bg ? bg : "#6772e5" }}>
      <Styled.RecommendedContainer>
        <h1 style={{ color: titleColor ? titleColor : "#fff" }}>{title}</h1>
        <Styled.RecommendedTabWrapper tabStyle={tabStyle}>
          {tabs.map((tab, index) => (
            <span
              key={index}
              onClick={() => setSelected(tab.value)}
              className={selected === tab.value ? "active" : ""}
            >
              {tab.label}
            </span>
          ))}
        </Styled.RecommendedTabWrapper>
        <Styled.RecommendedTabContent>
          <Styled.RecommededInfoWrapper>
            <img src={data.filter((f) => f.tab === selected)[0].icon} alt="" />
            <p style={{ color: textColor ? textColor : "#fff" }}>
              {data.filter((f) => f.tab === selected)[0].description}
            </p>
            <a
              href={data.filter((f) => f.tab === selected)[0].link}
              style={{ color: textColor ? "#6772E5" : "#fff" }}
            >
              Set Up a Private Demo <BsArrowRight />
            </a>
          </Styled.RecommededInfoWrapper>
          <Styled.RecommendedImageWrapper>
            <img src={data.filter((f) => f.tab === selected)[0].image} alt="" />
          </Styled.RecommendedImageWrapper>
        </Styled.RecommendedTabContent>
      </Styled.RecommendedContainer>
    </Styled.RecommendedWrapper>
  );
};
