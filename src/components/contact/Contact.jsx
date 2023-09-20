import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { NavLink } from "react-router-dom";
import "../../stylesheets/Contact.scss";
import OverlayImg from "../../assets/images/contact-banner.svg";
import LogoImg from "../../assets/images/logo2.png";

export default function Contact() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu((prev) => !prev);
  return (
    <main className="contact">
      <div className="contact__img" >
        <div className="contact__img__nav">
          <div className="contact__img__nav__logo">
            <img src={LogoImg} alt="Logo" />
          </div>
          <div
            className={showMenu ? "hamburger show" : "hamburger"}
            onClick={handleMenu}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          <ul
            className={
              showMenu
                ? "secondary-navbar__navbar active"
                : "secondary-navbar__navbar"
            }
          >
            <li className="item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="item">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="item">
              <NavLink to="/enroll">Enroll</NavLink>
            </li>
            <li className="item">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li className="item">
              <NavLink to="/rules-and-regulations">Guidelines</NavLink>
            </li>
          </ul>
        </div>
        <img src={OverlayImg} alt="Image of parents and their child" />
      </div>
      <ContactForm />
    </main>
  );
}
