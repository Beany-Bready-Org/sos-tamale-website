import Background from "./Background";

import { Swiper } from "swiper/react";
import "swiper/css";

import "../stylesheets/Background.scss";

export default function Hero() {
  return (
    <section className="hero">
      <Background />
    </section>
  );
}
