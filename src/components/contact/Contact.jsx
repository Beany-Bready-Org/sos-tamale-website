import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "./ContactForm";

import { NavLink } from "react-router-dom";

import "../../stylesheets/Contact.scss";

import OverlayImg from "../../assets/images/contact-banner.svg";
import LogoImg from "../../assets/images/logo2.png";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__img">
        <div className="contact__img__nav">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
          <div className="contact__img__nav__logo">
            <img src={LogoImg} alt="Logo" />
          </div>
        </div>
        <img src={OverlayImg} alt="Image of parents and their child" />
      </div>
      <ContactForm />
    </section>
  );
}
