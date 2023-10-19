import React from "react";
import "../stylesheets/HeroText.scss";
import { Link } from "react-router-dom";

export default function HeroText() {
  return (
    <div className="hero__text">
      <span>Welcome To</span>
      <h1>SOS Hermann Gmeiner School</h1>
      <p>
        Welcome to our pristine institution of academic excellence! We hope you
        enjoy your visit!
      </p>
      <button className="--cta">
        <Link to="/enroll" style={{ color: "#FFF" }}>
          Enroll Now
        </Link>
      </button>
    </div>
  );
}
