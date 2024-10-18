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
// Access Box context
import { useAccessBox } from "../contexts/AccessBoxContext";

const Navbar = () => {
  const { showNav } = useShowNav();

	const { navStateToggler, showDropMenusToggler, setShowNav } =
		useShowNavToggler();
	const { dispatch, state } = useNavDisplay();
	// Set variable from useLocation hook
	const location = useLocation();

  // Access box
  const { setShowAccessBox } = useAccessBox();

  useEffect(() => {
    if (
      location.pathname === "/contact" ||
      location.pathname === "/enroll" ||
      location.pathname === "/register" ||
      location.pathname === "/login" ||
      location.pathname === "/admin-dashboard"
    ) {
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
              <em>030 222 2867</em>
            </span>
          </div>
          <ul className="secondary-nav__text__social">
            <li className="social-link">
              <Link to="https://web.facebook.com/SOSCVGHANA/?_rdc=1&_rdr">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li className="social-link">
              <Link to="https://gh.linkedin.com/company/sos-children-s-villages-in-ghana">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </li>
            <li className="social-link">
              <Link to="https://www.instagram.com/sos_hgic/?hl=en">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li className="social-link">
              <Link to="https://twitter.com/SOSCVGhana">
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="main-nav" style={navDisplayStyles}>
        <div className={showNav ? "main-nav__logo active" : "main-nav__logo"}>
          <NavLink to="/">
            <img src={logo} alt="Main logo" />
          </NavLink>
        </div>
        <ul className={showNav ? "main-nav__items active" : "main-nav__items"}>
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
                // Hide mobile nav
                setShowNav(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/about"
              onClick={() => {
                showDropMenusToggler(false);
                // Hide mobile nav
                setShowNav(false);
              }}
            >
              About Us
            </NavLink>
          </li>
          <li className="item">
            <NavLink
              to="/contact"
              onClick={() => {
                showDropMenusToggler(false);
                // Hide mobile nav
                setShowNav(false);
                dispatch({ type: NAV_DISPLAY_ACTIONS.CONTACT });
              }}
            >
              Contact
            </NavLink>
          </li>
          {/* <li className="item">
            <NavLink
              to="/teachers"
              onClick={() => {
                showDropMenusToggler(false);
                // Hide mobile nav
                setShowNav(false);
              }}
            >
              Our Teachers
            </NavLink>
          </li> */}
          <li className="item">
            <NavLink
              to="/enroll"
              onClick={() => {
                showDropMenusToggler(false);
                // Hide mobile nav
                setShowNav(false);
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
                // Hide mobile nav
                setShowNav(false);
              }}
            >
              Gallery
            </NavLink>
          </li>
          {/* <li className="item">
            <NavLink
              to="/rules-and-regulations"
              onClick={() => {
                // Hide mobile nav
                setShowNav(false);
              }}
            >
              Guidelines
            </NavLink>
          </li> */}
          {/* <li className="item admin-cta">
						<button
							onClick={() => {
								// Hide mobile nav
								setShowNav(false);
								setShowAccessBox(true);
							}}
							className=" --cta"
						>
							Register as admin
						</button>
					</li> */}
          <li className="item social-items">
            <p className="get-in-touch">Social Media:</p>
            <Link
              to="https://web.facebook.com/SOSCVGHANA/?_rdc=1&_rdr"
              className="social-icon--mobile"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link
              to="https://gh.linkedin.com/company/sos-children-s-villages-in-ghana"
              className="social-icon--mobile"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>

            <Link
              to="https://www.instagram.com/sos_hgic/?hl=en"
              className="social-icon--mobile"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link
              to="https://twitter.com/SOSCVGhana"
              className="social-icon--mobile"
            >
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
