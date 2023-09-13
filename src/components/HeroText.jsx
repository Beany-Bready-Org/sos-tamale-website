import React from "react"
import "../stylesheets/HeroText.scss";



export default function HeroText() {
  return (
    <div className="hero__text">
      <span>Welcome To</span>
      <h1>SOS Hermann Gmeiner School</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        voluptatibus?
      </p>
      <button className="hero__text__button --cta">Enroll Now</button>
    </div>
  );
}
