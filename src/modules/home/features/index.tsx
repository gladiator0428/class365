import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import * as Styled from "./features.styles";
import * as Comp from "../../../components";
import { STRAPI_API } from "../../../config";

type Props = {
  icon: any;
  subtitle: string;
  text: string;
  title: string;
  image: any;
  data: {
    title: string;
    subtitle: string;
    image: any;
    is_old: boolean;
  }[];
};

export const Features: React.FC<Props> = ({
  data,
  icon,
  image,
  subtitle,
  text,
  title,
}) => {
  return (
    <Styled.FeaturesWrapper>
      <Styled.FeaturesInfoWrapper>
        <Styled.FeaturesDescription>
          <img src={STRAPI_API + icon?.url} alt="" />
          <h2>{subtitle}</h2>
          <p>{title}</p>
        </Styled.FeaturesDescription>
        <Styled.FeatureInfo>
          <img src={STRAPI_API + image?.url} alt="Feature" />
          <p>{text}</p>
        </Styled.FeatureInfo>
      </Styled.FeaturesInfoWrapper>
      <Styled.FeaturesContentWrapper>
        <Swiper
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            {data
              ?.filter((f) => !f.is_old)
              .map((row, index) => (
                <Comp.FeatureCard key={index} {...row} />
              ))}
          </SwiperSlide>
          <SwiperSlide>
            {data
              ?.filter((f) => f.is_old)
              .map((row, index) => (
                <Comp.FeatureCard key={index} {...row} />
              ))}
          </SwiperSlide>
        </Swiper>
      </Styled.FeaturesContentWrapper>
      <Styled.FeaturesSwiper>
        {data && (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            loop
            className="mySwiper"
            modules={[FreeMode]}
          >
            {data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Comp.FeatureCard {...row} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Styled.FeaturesSwiper>
    </Styled.FeaturesWrapper>
  );
};
