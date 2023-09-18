import React, { useState, useRef } from "react";
import sideNavImage from "../../assets/images/new-side-nav-image.svg";
import EnrollInput from "./EnrollInput";
import siteLogo from "../../assets/images/logo2.png";
import "../../stylesheets/Enroll.scss";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Enroll = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const wardRef = useRef();
  const wradPrevSchoolRef = useRef();

  const handleMenu = () => setShowMenu((prev) => !prev);

  const serviceId = "service_o2lcf3a";
  const templateId = "template_icbgppp";
  const publicKey = "HxfJG_ab_z5fbm2qm";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        setError(error.text);
      }
    );
  };

  return (
    <main className="enroll-container">
      <form className="enroll-form" onSubmit={handleSubmit} ref={formRef}>
        <div className="enroll-form__heading">
          <h2 className="enroll-form__heading-header --header">
            Enroll Your Ward
          </h2>
          <p className="enroll-form__heading-description --description">
            Please fill out each box to provide information about your ward.
          </p>
        </div>
        <EnrollInput
          type="text"
          placeholder="Enter Your Name Here.."
          className="enroll-form__input --input"
          ref={nameRef}
        />
        <EnrollInput
          type="email"
          placeholder="Enter Your Email Here.."
          className="enroll-form__input --input"
          ref={emailRef}
        />
        <div className="enroll-form__input telephone --input">
          <div className="telephone__contry-code">+233</div>
          <EnrollInput
            type="tel"
            placeholder="Enter your phone number here"
            className="--input"
            ref={numberRef}
          />
        </div>
        <EnrollInput
          type="text"
          placeholder="Enter Your Ward's Name here..."
          className="enroll-form__input --input"
          ref={wardRef}
        />
        <EnrollInput
          type="text"
          placeholder="What's your ward's previous school...?"
          className="enroll-form__input --input"
          ref={wradPrevSchoolRef}
        />
        <button
          className="--cta --input"
          disabled={loading}
          style={loading ? { backgroundColor: "#ced4da" } : null}
        >
          {loading ? "Submitting..." : "Make enrollment request"}
        </button>
      </form>
      <header className="side-nav">
        <nav className="secondary-navbar">
          <div className="logo">
            <img src={siteLogo} alt="Site logo" style={{ width: "100px" }} />
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
                ? "secondary-navbar__navbar show"
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
          </ul>
        </nav>
        <div className="side-nav__image">
          <img src={sideNavImage} alt="Side nav image" />
        </div>
        <div className="side-nav__sdg">
          <blockquote className="side-nav__sdg--four">
            ”Ensure inclusive and equitable quality education and promote
            lifelong learning opportunities for all”
          </blockquote>
          <b className="side-nav__sdg--sdg">SDG 4</b>
        </div>
      </header>
    </main>
  );
};

export default Enroll;
