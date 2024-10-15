import React from "react";
import aboutBanner from "../assets/images/about-banner-img.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faEye,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section className="about-banner">
        <div className="about-banner__background">
          <img
            src={aboutBanner}
            alt="About"
            className="about-banner__background-image"
          />
        </div>
        <h1 className="about-banner__header">We are SOS HGSTL</h1>
      </section>
      <section className="mission-vision">
        <div className="mission">
          <h2 className="mission-vision__header">
            {" "}
            <FontAwesomeIcon icon={faCrosshairs} />
            Our Mission{" "}
          </h2>
          <p className="mission-vision__description">
            <em>
              We provide quality basic education for pupils/students through the
              development of children's capabilities that they require to live
              dignified life to empower them to effectively participate
              positively in society.
            </em>
          </p>
        </div>
        <div className="vision">
          <h2 className="mission-vision__header">
            <FontAwesomeIcon icon={faEye} />
            Our Vision
          </h2>
          <p className="mission-vision__description">
            <em>
              Here at SOS, it is our vision that,
              <br />
              "Every child has a latent potential and can be nurtured". This
              means that we value all children and believe that every child can
              be pushed to acheive their goals.
            </em>
          </p>
        </div>
      </section>
      <section className="our-values">
        <h2 className="our-values__header">Our Values</h2>
        <div className="our-values__container">
          <div className="our-values__value">
            <h2>Courage</h2>
            <p>We take action</p>
          </div>
          <div className="our-values__value">
            <h2>Commitment</h2>
            <p>We keep promises</p>
          </div>
          <div className="our-values__value">
            <h2>Trust</h2>
            <p>We believe in each other</p>
          </div>
          <div className="our-values__value">
            <h2>Accountability</h2>
            <p>We are reliable</p>
          </div>
        </div>
      </section>
      <div className="join-school">
        <h2 className="join-school__header">
          Want to join our noble institution?
        </h2>
        <p>
          We cannot wait to have you and your ward with us here at SOS Hermmann
          Gmeiner School!
        </p>
        <Link to="/enroll" className="--cta-secondary">
          Enroll Now <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default About;
