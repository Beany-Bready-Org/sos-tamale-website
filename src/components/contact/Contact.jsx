import ContactForm from "./ContactForm";

import "../../stylesheets/Contact.scss";

import overlayImg from "../../assets/images/contact-banner.svg";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__img">
        <img src={overlayImg} alt="Image of parents and their child" />
      </div>
      <ContactForm />
    </section>
  );
}
