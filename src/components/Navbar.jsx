import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/Navbar.scss";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faXTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
// Show nav context
import { useShowNav, useShowNavToggler } from "../contexts/NavContext";

const Navbar = () => {
	const show = useShowNav()
	const setShowNav = useShowNavToggler()

	return (
		<nav>
			<section className="secondary-nav">
				<div className="secondary-nav__text">
					<div className="secondary-nav__text-info">
						<a href="https://www.sos-childrensvillages.org">
							<FontAwesomeIcon icon={faGlobe} />
							www.sos-childrensvillages.org
						</a>
						<span title="Call Us Now">
							<FontAwesomeIcon icon={faPhone} />
							059 584 4040
						</span>
					</div>
					<ul className="secondary-nav__text__social">
						<li className="social-link">
							<Link to="#">
								<FontAwesomeIcon icon={faFacebook} />
							</Link>
						</li>
						<li className="social-link">
							<Link to="">
								<FontAwesomeIcon icon={faLinkedinIn} />
							</Link>
						</li>
						<li className="social-link">
							<Link to="#">
								<FontAwesomeIcon icon={faInstagram} />
							</Link>
						</li>
						<li className="social-link">
							<Link to="#">
								<FontAwesomeIcon icon={faXTwitter} />
							</Link>
						</li>
					</ul>
				</div>
			</section>
			<section className="main-nav">
				<div className="main-nav__logo">
					<img src={logo} alt="Main logo" />
					<span>
						SOS HERMANN GMEINER <span>TAMALE</span>
					</span>
				</div>
				<ul className={show ? "main-nav__items active" : "main-nav__items"}>
					<li className="item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="item">
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li className="item">
						<NavLink to="/about">About Us</NavLink>
					</li>
					<li className="item">
						<NavLink to="/enroll">Enroll</NavLink>
					</li>
					<li className="item social-items">
						<p className="get-in-touch">Social Media:</p>
						<Link to="#" className="social-icon--mobile">
							<FontAwesomeIcon icon={faFacebook} />
						</Link>

						<Link to="" className="social-icon--mobile">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</Link>

						<Link to="#" className="social-icon--mobile">
							<FontAwesomeIcon icon={faInstagram} />
						</Link>

						<Link to="#" className="social-icon--mobile">
							<FontAwesomeIcon icon={faXTwitter} />
						</Link>
					</li>
				</ul>
				<div
					className="main-nav__hamburger"
					onClick={() => {
						setShowNav();
					}}
				>
					<div className="hamburger-line line1"></div>
					<div className="hamburger-line line2"></div>
					<div className="hamburger-line line3"></div>
				</div>
			</section>
		</nav>
	);
};

Navbar.propTypes = {
	show: PropTypes.bool.isRequired,
	setShowNav: PropTypes.func.isRequired,
};

export default Navbar;
