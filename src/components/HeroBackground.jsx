import "../stylesheets/HeroBackground.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroBackground({ sliderSize }) {
  let slides = [];
  for (let i = 1; i <= 4; i++) {
    import(`../assets/bg-img${i}.jpg`)
      .then((image) => {
        slides.push(
          <SwiperSlide key={i}>
            <img src={image.default} alt={`Slide ${i}`} />
          </SwiperSlide>
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="hero__background">
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
      >
        {slides}
      </Swiper>
    </div>
  );
}
