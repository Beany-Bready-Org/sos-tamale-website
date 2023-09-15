import ContactForm from "./ContactForm";

import "../../stylesheets/Contact.scss";

import OverlayImg from "../../assets/images/contact-banner.svg";
import LogoImg from "../../assets/images/logo2.png";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__logo">
        <img src={LogoImg} alt="Logo" />
      </div>
      <div className="contact__img">
        <img src={OverlayImg} alt="Image of parents and their child" />
      </div>
      <ContactForm />
    </section>
  );
}
