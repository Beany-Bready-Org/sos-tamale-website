import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "../stylesheets/Navbar.scss";

import logo from "../assets/images/logo.png";

const Navbar = ({ show, setShowNav }) => {
  return (
    <nav>
      <section className="secondary-nav">
        <div className="secondary-nav__text">
          <div className="secondary-nav__text__info">
            <a href="https://www.sos-childrensvillages.org" target="_blank">
              www.sos-childrensvillages.org
            </a>
            <span>059 584 4040</span>
          </div>
          <ul className="secondary-nav__text__items">
						{/* add fa icons here */}
            <li className="item">O</li>
            <li className="item">O</li>
            <li className="item">O</li>
            <li className="item">O</li>
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
            <NavLink>Home</NavLink>
          </li>
          <li className="item">
            <NavLink>Contact</NavLink>
          </li>
          <li className="item">
            <NavLink>About Us</NavLink>
          </li>
          <li className="item">
            <NavLink to="/enroll">Enroll</NavLink>
          </li>
        </ul>
        <div
          className="main-nav__hamburger"
          onClick={() => {
            setShowNav((prev) => !prev);
          }}>
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
