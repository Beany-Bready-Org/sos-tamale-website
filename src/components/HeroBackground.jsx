import React from "react";
import "../stylesheets/HeroBackground.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bgImg1 from "../assets/images/bg-img1.jpg";
import bgImg2 from "../assets/images/bg-img2.jpg";
import bgImg3 from "../assets/images/bg-img3.jpg";
import bgImg4 from "../assets/images/bg-img4.jpg";
import bgImg5 from "../assets/images/bg-img4.jpg";

export default function HeroBackground({ sliderSize }) {
  let slides = [
    <SwiperSlide key={bgImg1}>
      <img src={bgImg1} alt="Slide 1" />
    </SwiperSlide>,
    <SwiperSlide key={bgImg2}>
      <img src={bgImg2} alt="Slide 2" />
    </SwiperSlide>,
    <SwiperSlide key={bgImg3}>
      <img src={bgImg3} alt="Slide 3" />
    </SwiperSlide>,
    <SwiperSlide key={bgImg4}>
      <img src={bgImg4} alt="Slide 4" />
    </SwiperSlide>,
    <SwiperSlide key={bgImg5}>
      <img src={bgImg5} alt="Slide 5" />
    </SwiperSlide>,
  ];

  return (
    <div className="hero__background">
      <Swiper
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slides}
      </Swiper>
    </div>
  );
}
