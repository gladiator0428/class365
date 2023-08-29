import React, { useState } from "react";
import * as Styled from "./improve.styles";

type Props = {
  title: string;
  data: {
    title: string;
    description: string;
    image: string;
  }[];
};

export const Improve: React.FC<Props> = ({ title, data }) => {
  const [selected, setSelected] = useState(0);
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleScroll = () => {
  //   setWidth(window.innerWidth);
  //   let navbarLinks = document.querySelectorAll("#improve-navbar a");
  //   const scrollpos = window.scrollY;
  //   if (width > 768) {
  //     navbarLinks.forEach((link: any) => {
  //       let section = document.querySelector(link.hash);
  //       if (
  //         section.offsetTop <= scrollpos + 150 &&
  //         section.offsetTop + section.offsetHeight > scrollpos + 150
  //       ) {
  //         link.classList.add("active");
  //       } else {
  //         link.classList.remove("active");
  //       }
  //     });
  //   }
  // };

  return (
    <Styled.ImproveSectionWrapper>
      <h1>{title}</h1>
      <Styled.ImproveContainer>
        <Styled.ImproveListWrapper id="improve-navbar">
          {data.map((item, key) => (
            <Styled.ImproveListItem
              key={key}
              href={"#improve-image" + key}
              onClick={() => setSelected(key)}
              // className={width > 768 ? "" : key === selected ? "active" : ""}
              className={key === selected ? "active" : ""}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <img src={item.image} alt="" />
              </div>
            </Styled.ImproveListItem>
          ))}
        </Styled.ImproveListWrapper>
        <Styled.ImproveImageWrapper>
          {/* {data.map((item, key) => (
            <div key={key} id={"improve-image" + key}>
              <img src={item.image} alt="" />
            </div>
          ))} */}
          {/* {data.map((item, key) => ( */}
          <div style={{ backgroundImage: `url(${data[selected].image})` }}>
            <img src={data[selected].image} alt="" />
          </div>
          {/* ))} */}
        </Styled.ImproveImageWrapper>
      </Styled.ImproveContainer>
    </Styled.ImproveSectionWrapper>
  );
};
