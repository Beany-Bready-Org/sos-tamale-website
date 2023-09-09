import "../stylesheets/HeroBackground.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// importing background images seperately(cos using a for-loop with default js importing, causes problems with gh-pages site.)

import bgImg1 from "../assets/images/bg-img1.jpg"
import bgImg2 from "../assets/images/bg-img2.jpg"
import bgImg3 from "../assets/images/bg-img3.jpg"
import bgImg4 from "../assets/images/bg-img4.jpg"

export default function HeroBackground({ sliderSize }) {
  let slides = [bgImg1, bgImg2, bgImg3, bgImg4];

  // cant use this for img importing:
  // for (let i = 1; i <= 4; i++) {
  //   import(`../assets/images/bg-img${i}.jpg`)
  //     .then((image) => {
  //       slides.push(
  //         <SwiperSlide key={i}>
  //           <img src={image.default} alt={`Slide ${i}`} />
  //         </SwiperSlide>
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // }

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
