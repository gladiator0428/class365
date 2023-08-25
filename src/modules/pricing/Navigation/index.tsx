import React, { useEffect } from "react";
// import Switch from "react-switch";
import * as Styled from "./navigation.styles";
import * as Data from "./data";

export const Navigation: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const { navs } = Data;
  // const [checked, setChecked] = useState(false);
  // const handleChange = (nextChecked: boolean) => {
  //   setChecked(nextChecked);
  // };

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

    // const stickyNav = document.getElementById("sticky-navbar");
    // if(stickyNav)
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
        <Styled.BlurNavigationWrapper id="sticky-navbar">
          <img src="/assets/images/nav-header.png" alt="Navbar Header" />
          <Styled.NavItems id="navbar">
            {navs.map((nav, index) => (
              <Styled.NavItemWrapper href={"#" + nav.link} key={index}>
                {nav.label}
              </Styled.NavItemWrapper>
            ))}
          </Styled.NavItems>
          <Styled.NavContentWrapper>
            {/* <Switch
              handleDiameter={36}
              onChange={handleChange}
              checked={checked}
              className="react-switch"
              onColor="#6772E5"
              height={44}
              width={94}
              checkedIcon={<span className="handle-label">On</span>}
              uncheckedIcon={<span className="handle-label">Off</span>}
            /> */}
          </Styled.NavContentWrapper>
        </Styled.BlurNavigationWrapper>
        {children}
      </Styled.NavigationContainer>
    </>
  );
};
