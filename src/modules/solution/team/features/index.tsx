import React, { useState, useEffect } from "react";
import * as Styled from "./features.styles";

type Props = {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const Features: React.FC<Props> = ({ data, description, title }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setWidth(window.innerWidth);
    let navbarLinks = document.querySelectorAll("#feature-navbar a");
    const scrollpos = window.scrollY;
    if (width > 768) {
      navbarLinks.forEach((link: any) => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= scrollpos + 150 &&
          section.offsetTop + section.offsetHeight > scrollpos + 150
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  };
  return (
    <Styled.FeaturesWrapper>
      <Styled.FeatureTitleWrapper>
        <h5>Features</h5>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Styled.FeatureTitleWrapper>
      <Styled.FeatureContainer>
        <Styled.FeatureListWrapper id="feature-navbar">
          {data.map((item, key) => (
            <Styled.FeatureListIteam key={key} href={`#team-feature${key}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <img src={item.image} alt="" />
              </div>
            </Styled.FeatureListIteam>
          ))}
        </Styled.FeatureListWrapper>
        <Styled.FeatureImageWrapper>
          {data.map((item, key) => (
            <div id={`team-feature${key}`}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </Styled.FeatureImageWrapper>
      </Styled.FeatureContainer>
    </Styled.FeaturesWrapper>
  );
};
