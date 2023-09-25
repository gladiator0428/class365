import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import * as Styled from "./institutions.styles";
import { STRAPI_API } from "../../../config";

type Props = {
  subtitle: string;
  title: string;
  data: {
    title: string;
    text: string;
    image: any;
    desc: string;
    amount: string;
  }[];
};

export const Institutions: React.FC<Props> = ({
  data = [],
  subtitle,
  title,
}) => {
  const [seleted, setSeleted] = useState(0);

  return (
    <Styled.InstitutionsWrapper>
      <Styled.InstitutionContainer>
        <div>
          <h6>{subtitle}</h6>
          <h1>{title}</h1>
          <Styled.InstitutionListWrapper>
            {data?.map((row, index) => (
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
      <Styled.InstitutionImageWrapper
        bg={STRAPI_API + data[seleted]?.image?.url}
      >
        <img src={STRAPI_API + data[seleted]?.image?.url} alt="" />
      </Styled.InstitutionImageWrapper>
      <Styled.InsititutionSwiper>
        {data.length > 0 && (
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
            {data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Styled.InstitutionSwiperItemWrapper>
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                  <div className="image-wrapper">
                    <img src={STRAPI_API + row?.image?.url} alt="" />
                  </div>
                  <div className="info-wrapper">
                    <h1>{row.amount}</h1>
                    <span>{row.desc}</span>
                  </div>
                </Styled.InstitutionSwiperItemWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Styled.InsititutionSwiper>
    </Styled.InstitutionsWrapper>
  );
};
