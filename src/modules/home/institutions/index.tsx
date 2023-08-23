import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import * as Styled from "./institutions.styles";
import * as Data from "./data";

export const Institutions: React.FC = () => {
  const { institutions } = Data;
  const [seleted, setSeleted] = useState(0);

  return (
    <Styled.InstitutionsWrapper>
      <Styled.InstitutionContainer>
        <div>
          <h6>For all Institutions</h6>
          <h1>All-in-one learning management solution for institutions</h1>
          <Styled.InstitutionListWrapper>
            {institutions.map((row, index) => (
              <Styled.InstitutionItemWrapper
                key={index}
                className={`${seleted === index ? "active" : ""}`}
              >
                <div onClick={() => setSeleted(index)}>{row.title}</div>
                <p>{row.text}</p>
              </Styled.InstitutionItemWrapper>
            ))}
          </Styled.InstitutionListWrapper>
        </div>
      </Styled.InstitutionContainer>
      <Styled.InstitutionImageWrapper bg={institutions[seleted].image}>
        <img src={institutions[seleted].image} alt="" />
      </Styled.InstitutionImageWrapper>
      <Styled.InsititutionSwiper>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            enabled: true,
          }}
          loop
          modules={[Pagination]}
          className="mySwiper"
        >
          {institutions.map((row, index) => (
            <SwiperSlide key={index}>
              <Styled.InstitutionSwiperItemWrapper>
                <h3>{row.title}</h3>
                <p>{row.text}</p>
                <div className="image-wrapper"></div>
                <div className="info-wrapper">
                  <h1>{row.amount}</h1>
                  <span>{row.desc}</span>
                </div>
              </Styled.InstitutionSwiperItemWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.InsititutionSwiper>
    </Styled.InstitutionsWrapper>
  );
};
