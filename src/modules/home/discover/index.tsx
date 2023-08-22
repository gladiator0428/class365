import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import * as Styled from "./discover.styles";
import * as Comp from "../../../components";
import * as Data from "./data";

export const Discover: React.FC = () => {
  const { discovers } = Data;

  return (
    <Styled.DiscoverWrapper>
      <Styled.DiscoverContainer>
        <div>
          <Comp.DiscoverIcon />
          <h2>
            Discover Why Our Customers Love Classe365 - In Their Own Words
          </h2>
          <p>
            Hear what all the buzz is about! Check out what our customers have
            to say about Classe365 - awarded the best SIS solution by EdTech
            Awards for 3 consecutive years
          </p>
          <Styled.CustomNavigator>
            <span>
              <HiOutlineArrowLeft />
            </span>
            <span>
              <HiOutlineArrowRight />
            </span>
          </Styled.CustomNavigator>
        </div>
      </Styled.DiscoverContainer>
      <Styled.DiscoverSliderWrapper>
        <div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            loop
            dir="rtl"
            modules={[Pagination]}
            className="mySwiper"
          >
            {discovers.map((row, index) => (
              <SwiperSlide key={index}>
                <Comp.DiscoverCard {...row} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Styled.DiscoverSliderWrapper>
    </Styled.DiscoverWrapper>
  );
};
