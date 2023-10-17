import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faXTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/images/logo-main.png";

// showNav nav context
import {
	useShowNav,
	useShowNavToggler,
	useNavDisplay,
} from "../contexts/NavContext";
// Display actions
import { NAV_DISPLAY_ACTIONS } from "../contexts/NavContext";

const Navbar = () => {
	const { showNav, showDropMenus } = useShowNav();
	const { navStateToggler, showDropMenusToggler } = useShowNavToggler();
	const { dispatch, state } = useNavDisplay();
	const location = useLocation();


	useEffect(() => {
		if (location.pathname === "/contact" || location.pathname === "/enroll") {
			dispatch({ type: NAV_DISPLAY_ACTIONS.CONTACT });
			showDropMenusToggler(false);
		} else {
			dispatch({ type: NAV_DISPLAY_ACTIONS.HOME });
		}
	}, [dispatch, location]);

	const navDisplayStyles = {
		display:
			state === NAV_DISPLAY_ACTIONS.CONTACT ||
			state === NAV_DISPLAY_ACTIONS.ENROLL
				? "none"
				: "flex",
		borderBottom: "none",
	};

	return (
		<nav>
			<section className="secondary-nav" style={navDisplayStyles}>
				<div className="secondary-nav__text">
					<div className="secondary-nav__text-info">
						<a href="https://www.sos-childrensvillages.org" target="_blank">
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
			<section className="main-nav" style={navDisplayStyles}>
				<div
					className={
						showNav 
							? "main-nav__logo active"
							: "main-nav__logo"
					}
				>
					<NavLink to="/">
						<img src={logo} alt="Main logo" style={{ width: "80px" }} />
					</NavLink>
				</div>
				<ul
					className={
						showNav 
							? "main-nav__items active"
							: "main-nav__items"
					}
				>
					<li
						className="item"
						onClick={() => {
							dispatch({ type: NAV_DISPLAY_ACTIONS.HOME });
						}}
					>
						<NavLink
							to="/"
							onClick={() => {
								dispatch({ type: NAV_DISPLAY_ACTIONS.HOME });
								showDropMenusToggler(false);
							}}
						>
							Home
						</NavLink>
					</li>
					<li className="item">
						<NavLink
							to="/contact"
							onClick={() => {
								showDropMenusToggler(false);
								dispatch({ type: NAV_DISPLAY_ACTIONS.CONTACT });
							}}
						>
							Contact
						</NavLink>
					</li>
					<li className="item">
						<NavLink
							to="/about"
							onClick={() => {
								showDropMenusToggler(false);
							}}
						>
							About Us
						</NavLink>
					</li>
					<li className="item">
						<NavLink
							to="/enroll"
							onClick={() => {
								showDropMenusToggler(false);
							}}
						>
							Enroll
						</NavLink>
					</li>
					<li className="item">
						<NavLink
							to="/gallery"
							onClick={() => {
								showDropMenusToggler(false);
							}}
						>
							Gallery
						</NavLink>
					</li>
					{/* <li className="item">
            <NavLink to="/rules-and-regulations">Guidelines</NavLink>
          </li> */}
					<li className="item --drop-down-invoker">
						<span>See more</span>
						<div className="dropdown-menu">
							<NavLink to="/rules-and-regulations">Guidelines</NavLink>
							<NavLink to="/events">Events</NavLink>
						</div>
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
				<div className="main-nav__hamburger" onClick={() => navStateToggler()}>
					<div className="hamburger-line line1"></div>
					<div className="hamburger-line line2"></div>
					<div className="hamburger-line line3"></div>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
