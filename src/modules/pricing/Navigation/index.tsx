import React, { useState, useEffect } from "react";
import * as Styled from "./navigation.styles";
import * as Data from "./data";

export const Navigation: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const { navs } = Data;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let navbarLinks = document.querySelectorAll("#navbar a");
    const scrollpos = window.scrollY;
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
  };

  return (
    <>
      <Styled.NavigationWrapper>
        <h1>
          Choose the Perfect Plan for Your Institute with Classe365's Flexible
          Modular Pricing Solution
        </h1>
        <p>
          Ranked 5th Best School Administration Software by Capterra - A Gartner
          Company
        </p>
      </Styled.NavigationWrapper>
      {/* <div id="core"></div> */}
      <Styled.NavigationContainer>
        <Styled.GradientBG />
        <Styled.BlurNavigationWrapper>
          <img src="/assets/images/nav-header.png" alt="Navbar Header" />
          <Styled.NavItems id="navbar">
            {navs.map((nav, index) => (
              <Styled.NavItemWrapper href={"#" + nav.link} key={index}>
                {nav.label}
              </Styled.NavItemWrapper>
            ))}
          </Styled.NavItems>
        </Styled.BlurNavigationWrapper>
        {children}
      </Styled.NavigationContainer>
    </>
  );
};
