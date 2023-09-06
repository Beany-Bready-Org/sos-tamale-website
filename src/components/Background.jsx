import "../stylesheets/Background.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Lazy } from "swiper/modules";
import "swiper/css";

export default function Background() {
  let slides = [];
  for (let i = 1; i <= 4; i++) {
    import(`../assets/bg-img${i}.jpg`)
      .then((image) => {
        slides.push(
          <SwiperSlide key={i}>
            <img src={image.default} alt={`Slide ${i}`} />
            <p>Slide {i}</p>
          </SwiperSlide>
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <Swiper
        centeredSlides={true}
        // lazy={true}
        // modules={[Lazy]}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
      >
        {slides}
      </Swiper>
    </>
  );
}
