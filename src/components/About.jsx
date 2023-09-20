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
					<img src={aboutBanner} alt="About" className="about-banner__background-image"/>
				</div>
				<h1 className="about-banner__header">We are SOS HGS</h1>
			</section>
			<section className="mission-vision">
				<div className="mission">
					<h2 className="mission-vision__header">Our Mission</h2>
					<p className="mission-vision__description">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
						distinctio vero laboriosam ipsa accusamus, sapiente quis recusandae
						qui, nam dignissimos accusantium, culpa at sit assumenda doloremque?
						Labore recusandae molestiae odio!
					</p>
				</div>
				<div className="vision">
					<h2 className="mission-vision__header">Our Vision</h2>
					<p className="mission-vision__description">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
						distinctio vero laboriosam ipsa accusamus, sapiente quis recusandae
						qui, nam dignissimos accusantium, culpa at sit assumenda doloremque?
						Labore recusandae molestiae odio!
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
