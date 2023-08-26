import React, { useState, useEffect } from "react";
import * as Styled from "./solutions.styles";
import * as Data from "./data";
import { BsArrowRight } from "react-icons/bs";

export const Solutions: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const { solutions } = Data;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setWidth(window.innerWidth);
    let navbarLinks = document.querySelectorAll(".list a");
    const scrollpos = window.scrollY;
    if (width > 768) {
      navbarLinks.forEach((link: any) => {
        let iWrapper: any = document.querySelector("#image-wrapper1");
        if (window.innerWidth > 1280) {
          let section = document.querySelector(link.hash);
          console.log(link.hash, scrollpos);
          if (
            section.offsetTop + iWrapper.offsetTop <= scrollpos &&
            section.offsetTop + iWrapper.offsetTop + section.offsetHeight >
              scrollpos
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        } else {
          let section = document.querySelector(link.hash);
          console.log(link.hash, scrollpos);
          if (
            section.offsetTop + iWrapper.offsetTop <= scrollpos &&
            section.offsetTop + iWrapper.offsetTop + section.offsetHeight >
              scrollpos
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    }
  };

  return (
    <Styled.SolutionsWrapper>
      <Styled.SolutionTitleWrapper>
        <h5>Greate solutions for everyone</h5>
        <h1>Student Management System For Learning Management Teams</h1>
      </Styled.SolutionTitleWrapper>
      <Styled.SolutionContentWrapper id="image-wrapper1">
        <Styled.SolutionImageGroup>
          {solutions.map((item, key) => (
            <Styled.SolutionImageWrapper
              bg={item.image}
              key={key}
              id={`solution-image-${key}`}
            >
              <div>
                <img src={item.image} alt="Solution" />
              </div>
            </Styled.SolutionImageWrapper>
          ))}
        </Styled.SolutionImageGroup>
        <Styled.SolutionContainer>
          <div className="image-wrapper">
            {solutions.map((item, key) => (
              <div key={key} id={`solution1-image-${key}`}>
                <img src={item.image} alt="Solution" />
              </div>
            ))}
          </div>
          <div className="list">
            {solutions.map((row, key) => (
              <Styled.SolutionCardWrapper
                key={key}
                href={`#${
                  width > 1280 ? "solution" : "solution1"
                }-image-${key}`}
                className={`${
                  width > 768 ? "" : key === selected ? "active" : ""
                }`}
                onClick={() => setSelected(key)}
              >
                <h3>{row.title}</h3>
                <p>
                  <span>{row.text}</span>
                  <div>
                    <img src={row.image} alt="" />
                  </div>
                  <h4>
                    Start Free 14-days trial <BsArrowRight />
                  </h4>
                </p>
              </Styled.SolutionCardWrapper>
            ))}
          </div>
        </Styled.SolutionContainer>
      </Styled.SolutionContentWrapper>
    </Styled.SolutionsWrapper>
  );
};
