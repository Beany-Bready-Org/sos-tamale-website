import React, { useState, useRef } from "react";
import sideNavImage from "../../assets/images/new-side-nav-image.svg";
import EnrollInput from "./EnrollInput";
import siteLogo from "../../assets/images/logo2.png";
import "../../stylesheets/Enroll.scss";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Enroll = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleMenu = () => setShowMenu((prev) => !prev);

  // Form reference
  const formRef = useRef();

  // form fields schema for enroll form
  const formSchema = z.object({
    name: z
      .string({
        message: "Your name must be a text",
      })
      .min(5),
    email: z.string().email(),
    phone: z.string().max(10, {
      message: "Your phone number must be 10 characters long",
    }),
    wardName: z.string().min(5),
    previousSchool: z.string().min(5),
  });

  // React hook form init
  const {
    register,
    handleSubmit: submitHandler,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const showSuccessMessageForSomeTime = (
    successMessage = "",
    duration = 1500
  ) => {
    setSuccessMessage(successMessage);

    setTimeout(() => {
      setSuccessMessage("");
    }, duration);
  };

  const handleSubmit = async (data) => {
    const templateId = import.meta.env.VITE_ENROLL_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const formData = {
      from_name: data.name,
      from_ward: data.wardName,
      from_school: data.previousSchool,
      from_contact: data.phone,
      from_email: data.email,
    };

    // If user is offline
    if (!navigator.onLine) {
      setError("root", {
        message: "You're not online please,check your network",
      });
      console.log("Not online");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      showSuccessMessageForSomeTime(
        "Your request has been sent to our Head of School",
        2000
      );
      formRef.current.reset();
    } catch (error) {
      const errorMessage =
        error.message ||
        error.text ||
        JSON.stringify(error) ||
        "An error occurred";
      console.log(errorMessage);

      setError("root", {
        message: errorMessage,
      });
    }
  };

  return (
    <main className="enroll-container">
      <form
        className="enroll-form"
        onSubmit={submitHandler(handleSubmit)}
        ref={formRef}
      >
        <div className="enroll-form__heading">
          <h1 className="enroll-form__heading-header --header">
            Enroll Your Ward
          </h1>
          <p className="--description">Please fill out each box</p>
          {errors.root ? (
            <p className="error">{errors.root.message}</p>
          ) : successMessage ? (
            <p className="success">{successMessage}</p>
          ) : null}
        </div>
        <div className="enroll-form__form-group">
          <EnrollInput
            type="text"
            placeholder="Enter Your Name Here.."
            className="enroll-form__input --input-special"
            nameValue="from_name"
            register={register}
            registerValue={"name"}
          />
          {errors.name && <p className="error-no-bg">{errors.name.message}</p>}
        </div>
        <div className="enroll-form__form-group">
          <EnrollInput
            type="email"
            placeholder="Enter Your Email Here.."
            className="enroll-form__input --input-special"
            nameValue="from_email"
            register={register}
            registerValue={"email"}
          />
          {errors.email && (
            <p className="error-no-bg">{errors.email.message}</p>
          )}
        </div>
        <div className="enroll-form__form-group">
          <div className="enroll-form__input telephone --input-special">
            <div className="telephone__country-code">+233</div>
            <EnrollInput
              type="tel"
              placeholder="Enter your phone number here"
              className="--input"
              nameValue="from_contact"
              register={register}
              registerValue={"phone"}
            />
          </div>
          {errors.phone && (
            <p className="error-no-bg">{errors.phone.message}</p>
          )}
        </div>
        <div className="enroll-form__form-group">
          <EnrollInput
            type="text"
            placeholder="Enter Your Ward's Name here..."
            className="enroll-form__input --input-special"
            nameValue="from_ward"
            register={register}
            registerValue={"wardName"}
          />
          {errors.wardName && (
            <p className="error-no-bg">{errors.wardName.message}</p>
          )}
        </div>
        <div className="enroll-form__form-group">
          <EnrollInput
            type="text"
            placeholder="What's your ward's previous school...?"
            className="enroll-form__input --input-special"
            nameValue="from_school"
            register={register}
            registerValue={"previousSchool"}
          />
          {errors.previousSchool && (
            <p className="error-no-bg">{errors.previousSchool.message}</p>
          )}
        </div>
        <button
          className="--cta mb-2"
          disabled={isSubmitting}
          style={
            isSubmitting
              ? { backgroundColor: "#ced4da", boxShadow: "none", border: 0 }
              : null
          }
        >
          {isSubmitting ? "Submitting..." : "Make enrollment request"}
        </button>
      </form>
      <header className="side-nav">
        <nav className="secondary-navbar">
          <div className="logo">
            <img src={siteLogo} alt="Site logo" style={{ width: "5em" }} />
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
            â€Ensure inclusive and equitable quality education and promote
            lifelong learning opportunities for allâ€
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
