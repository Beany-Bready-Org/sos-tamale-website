import React from "react";
import HeroBackground from "./HeroBackground.jsx";
import HeroText from "./HeroText.jsx";
import Login from "./accounts/Login.jsx";

import "../stylesheets/Hero.scss";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <HeroBackground sliderSize={4} />
        <HeroText />
      </section>
    </>
  );
}
