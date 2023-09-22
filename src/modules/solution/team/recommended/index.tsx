import React, { useState, useEffect } from "react";
import * as Styled from "./recommended.styles";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "../../../../config";

type Props = {
  title: string;
  tabs: any[];
  data: any[];
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
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (tabs?.length > 0) {
      setSelected(tabs[0].id);
    }
  }, [tabs]);

  return (
    <Styled.RecommendedWrapper style={{ background: bg ? bg : "#6772e5" }}>
      <Styled.RecommendedContainer>
        <h1 style={{ color: titleColor ? titleColor : "#fff" }}>{title}</h1>
        <Styled.RecommendedTabWrapper tabStyle={tabStyle}>
          {tabs?.map((tab: any, index: number) => (
            <span
              key={index}
              onClick={() => setSelected(tab?.id)}
              className={selected === tab?.id ? "active" : ""}
            >
              {tab?.label}
            </span>
          ))}
        </Styled.RecommendedTabWrapper>
        <Styled.RecommendedTabContent>
          <Styled.RecommededInfoWrapper>
            <img
              src={
                STRAPI_API +
                data?.filter((f) => f.tab === selected)[0]?.icon?.url
              }
              alt=""
            />
            <p style={{ color: textColor ? textColor : "#fff" }}>
              {data?.filter((f) => f.tab === selected)[0]?.description}
            </p>
            <a
              href={data?.filter((f) => f.tab === selected)[0]?.link}
              style={{ color: textColor ? "#6772E5" : "#fff" }}
            >
              Set Up a Private Demo <BsArrowRight />
            </a>
          </Styled.RecommededInfoWrapper>
          <Styled.RecommendedImageWrapper>
            <img
              src={
                STRAPI_API +
                data?.filter((f) => f.tab === selected)[0]?.image?.url
              }
              alt=""
            />
          </Styled.RecommendedImageWrapper>
        </Styled.RecommendedTabContent>
      </Styled.RecommendedContainer>
    </Styled.RecommendedWrapper>
  );
};
