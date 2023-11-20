import React, { useState, useRef, useEffect } from "react";
import sideNavImage from "../../assets/images/new-side-nav-image.svg";
import EnrollInput from "./EnrollInput";
import siteLogo from "../../assets/images/logo2.png";
import "../../stylesheets/Enroll.scss";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

const Enroll = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState();

  const handleMenu = () => setShowMenu((prev) => !prev);

  // Form ref
  const formRef = useRef();
  // Input refs
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const wardsNameRef = useRef();
  const prevSchoolRef = useRef();

  const showMessageForSomeTime = (errorMessage, successMessage, duration) => {
    setErrorMessage(errorMessage);
    setSuccessMessage(successMessage);

    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const serviceId = "service_zwdqe87";
    const templateId = "template_ni7p3hr";
    const publicKey = "HxfJG_ab_z5fbm2qm";

    const formData = {
      from_name: nameRef.current.value,
      from_ward: wardsNameRef.current.value,
      from_school: prevSchoolRef.current.value,
      from_contact: telephoneRef.current.value,
      from_email: emailRef.current.value,
    };

    if (
      !formData.from_name ||
      !formData.from_contact ||
      !formData.from_school ||
      !formData.from_ward ||
      !formData.from_email
    ) {
      showMessageForSomeTime(
        "Cannot submit an empty form. Fill out the fields.",
        "",
        2000
      );
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      showMessageForSomeTime("", "Email sent successfully", 2000);
      setLoading(false);
      formRef.current.reset();
    } catch (error) {
      showMessageForSomeTime(error, "", 2000);
      setLoading(false);
    }
  };

  return (
    <main className="enroll-container">
      <form className="enroll-form" onSubmit={handleSubmit} ref={formRef}>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <div className="enroll-form__heading">
          <h2 className="enroll-form__heading-header --header">
            Enroll Your Ward.
          </h2>
          <p className="enroll-form__heading-description --description">
            Please fill out each box to provide information about your ward.
          </p>
        </div>
        <EnrollInput
          type="text"
          placeholder="Enter Your Name Here.."
          className="enroll-form__input --input"
          inputRef={nameRef}
          nameValue="from_name"
        />
        <EnrollInput
          type="email"
          placeholder="Enter Your Email Here.."
          className="enroll-form__input --input"
          inputRef={emailRef}
          nameValue="from_email"
        />
        <div className="enroll-form__input telephone --input">
          <div className="telephone__contry-code">+233</div>
          <EnrollInput
            type="tel"
            placeholder="Enter your phone number here"
            className="--input"
            inputRef={telephoneRef}
            nameValue="from_contact"
          />
        </div>
        <EnrollInput
          type="text"
          placeholder="Enter Your Ward's Name here..."
          className="enroll-form__input --input"
          inputRef={wardsNameRef}
          nameValue="from_ward"
        />
        <EnrollInput
          type="text"
          placeholder="What's your ward's previous school...?"
          className="enroll-form__input --input"
          inputRef={prevSchoolRef}
          nameValue="from_school"
        />
        <button
          className="--cta --input"
          disabled={loading}
          style={
            loading
              ? { backgroundColor: "#ced4da", boxShadow: "none", border: 0 }
              : null
          }
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
        </nav>
        <div className="side-nav__image">
          <img
            src={sideNavImage}
            alt="Side nav image"
            className="side-nav__image-img"
          />
        </div>
        <div className="side-nav__sdg">
          <blockquote className="side-nav__sdg--four">
            ”Ensure inclusive and equitable quality education and promote
            lifelong learning opportunities for all”
          </blockquote>
          <a
            href="https://sdgs.un.org/goals/goal4"
            className="side-nav__sdg--sdg"
          >
            SDG 4
          </a>
        </div>
      </header>
    </main>
  );
};

export default Enroll;
