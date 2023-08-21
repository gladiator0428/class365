import React from "react";
import * as Styled from "./navigation.styles";
import * as Data from "./data";

export const Navigation: React.FC = () => {
  const { company, features, getintouch, resources, socials, terms } = Data;

  return (
    <Styled.NavigationWrapper>
      <Styled.NavigationContainer>
        <Styled.FooterLogo
          src="/assets/images/logo-white.png"
          alt="App Logo White"
        />
        <Styled.NavigationGrid>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>FEATURES</h2>
              {features.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>COMPANY</h2>
              {company.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>RESOURCES</h2>
              {resources.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
          <Styled.NavigationListWrapper>
            <Styled.NavigationListContent>
              <h2>GET IN TOUCH</h2>
              {getintouch.map((row, index) => (
                <a href={row.link} key={index}>
                  {row.label}
                </a>
              ))}
            </Styled.NavigationListContent>
            <Styled.NavigationListContent>
              <h2>Classe 365</h2>
              <a href="#">22-28 Edgeworth David Avenue, Hornsby, NSW 2077</a>
            </Styled.NavigationListContent>
            <Styled.NavigationListContent>
              <h2>Download App</h2>
              <Styled.DownloadButtonWrapper>
                <a href="#">
                  <img
                    src="/assets/images/footer/app_store.png"
                    alt="App store"
                  />
                </a>
                <a href="#">
                  <img
                    src="/assets/images/footer/googleplay.png"
                    alt="Google Play"
                  />
                </a>
              </Styled.DownloadButtonWrapper>
            </Styled.NavigationListContent>
          </Styled.NavigationListWrapper>
        </Styled.NavigationGrid>
        <Styled.CopyrightWrapper>
          <p>Copyright © Classe365 | All Rights Reserved.</p>
          <Styled.SocialsNavWrapper>
            {terms.map((row, index) => (
              <a href={row.link} key={index}>
                {row.label}
              </a>
            ))}
            {socials.map((social, index) => (
              <a href={social.link} key={index} className="social-link">
                {social.icon}
              </a>
            ))}
          </Styled.SocialsNavWrapper>
        </Styled.CopyrightWrapper>
      </Styled.NavigationContainer>
    </Styled.NavigationWrapper>
  );
};
