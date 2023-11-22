import React from "react";
import Navbar from "./Navbar";
import aboutBanner from "../assets/images/gallery-images/gallery-img12.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
        <h1 className="about-banner__header">We are SOS HGS</h1>
      </section>
      <section className="mission-vision">
        <div className="mission">
          <h2 className="mission-vision__header">Our Mission</h2>
          <p className="mission-vision__description">
            We build families for children in need, we help them shape their own
            futures, and we share in the development of their communities. We
            are here for children and young people no matter their background,
            experience, culture, heritage, religion, political alignment,
            gender, disability or origin. They are our priority and we do
            whatever it takes to ensure that they grow up empowered with trust
            and a feeling of belonging. Our work is adapted to local contexts
            and customs, as it must be in order for us to reach those who need
            our support.
          </p>
        </div>
        <div className="vision">
          <h2 className="mission-vision__header">Our Vision</h2>
          <p className="mission-vision__description">
            Every child belongs to a family and grows up with love, respect and
            security. Families come in all kinds of shapes and sizes, including
            foster families, extended families, and kinship care. However, what
            truly matters is that children and young people have a sense of
            belonging, of being surrounded and supported by individuals who care
            for them, whom they can rely on and trust, who believe in them, and
            who are available when they need someone the most. A nurturing and
            trustworthy relationship is the cornerstone of the kind of family
            environment we envision for every child and young person.
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
        <Link to="/enroll" className="--cta-secondary">
          Enroll Now!!
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default About;
