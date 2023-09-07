import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../stylesheets/Navbar.scss";

const Navbar = ({ show, setShowNav }) => {
	return (
		<nav className="main-nav">
			<div className="main-nav__logo">
				<img src={logo} alt="Main logo" />
			</div>
			<ul className={show ? "main-nav__items active" : "main-nav__items"}>
				<li className="item">
					<NavLink>Home</NavLink>
				</li>
				<li className="item">
					<NavLink>Contact</NavLink>
				</li>
				<li className="item">
					<NavLink>About Us</NavLink>
				</li>
				<li className="item enroll">
					<NavLink to="/enroll" className="main-nav__enroll-btn">
						Enroll
					</NavLink>
				</li>
			</ul>
			<div className="main-nav__hamburger" onClick={() => {
                setShowNav(prev => !prev)
            }}>
				<div className="hamburger-line line1"></div>
				<div className="hamburger-line line2"></div>
				<div className="hamburger-line line3"></div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
    show: PropTypes.bool.isRequired,
    setShowNav: PropTypes.func.isRequired,
}

export default Navbar;
