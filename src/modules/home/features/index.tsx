import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import * as Styled from "./features.styles";
import * as Comp from "../../../components";
import * as Data from "./data";

export const Features: React.FC = () => {
  const { features } = Data;
  return (
    <Styled.FeaturesWrapper>
      <Styled.FeaturesInfoWrapper>
        <Styled.FeaturesDescription>
          <Comp.FeatureIcon />
          <h2>Feathers in our cap</h2>
          <p>
            Most awarded EdTech company of 2021/22, including being part of Top
            65 fastest growing companies of 2021 in APAC
          </p>
        </Styled.FeaturesDescription>
        <Styled.FeatureInfo>
          <img src="/assets/images/features/feature.png" alt="Feature" />
          <p>The Australia & New Zealand EdTech 50 for Management Systems</p>
        </Styled.FeatureInfo>
      </Styled.FeaturesInfoWrapper>
      <Styled.FeaturesContentWrapper>
        {features.map((row, index) => (
          <Comp.FeatureCard key={index} {...row} />
        ))}
      </Styled.FeaturesContentWrapper>
      <Styled.FeaturesSwiper>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={24}
          freeMode={true}
          loop
          className="mySwiper"
          modules={[FreeMode]}
        >
          {features.map((row, index) => (
            <SwiperSlide key={index}>
              <Comp.FeatureCard {...row} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.FeaturesSwiper>
    </Styled.FeaturesWrapper>
  );
};
