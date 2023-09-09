import "../stylesheets/HeroBackground.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import bgImg1 from "../assets/images/bg-img1.jpg";

export default function HeroBackground({ sliderSize }) {
  let slides = [];
  for (let i = 1; i <= 4; i++) {
    // import(`../assets/images/bg-img1.jpg`)
    //   .then((image) => {
    //     slides.push(
    //       <SwiperSlide key={i}>
    //         <img src={image.default} alt={`Slide ${i}`} />
    //       </SwiperSlide>
    //     );
    //   })
    //   .catch((error) => console.error(error));
    slides.push(
      <SwiperSlide key={i}>
        <img src={bgImg1} alt="Slide 1" />
      </SwiperSlide>
    );
  }

  return (
    <div className="hero__background">
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}>
        {slides}
      </Swiper>
    </div>
  );
}
