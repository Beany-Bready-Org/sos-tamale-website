import { useRef, useState } from "react";
import "../../stylesheets/ContactForm.scss";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Input Refs
  const fullNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Form Ref
  const formRef = useRef();

  // Custom messages
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

    const templateId = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const formData = {
      from_name: fullNameRef.current.value,
      from_email: emailRef.current.value,
      from_subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    if (
      !formData.from_name ||
      !formData.from_email ||
      !formData.from_subject ||
      !formData.message
    ) {
      showMessageForSomeTime(
        "All fields are mandatory, please fill out all fields and try again.",
        "",
        2000
      );
      setLoading(false);
      return;
    }

    if (!navigator.onLine) {
      showMessageForSomeTime(
        "You're not online please,check your network",
        "",
        2000
      );
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      showMessageForSomeTime("", "Thank You For Reaching Out!", 2000);
      formRef.current.reset();
    } catch (error) {
      const errorMessage = error.message || error.text || JSON.stringify(error);
      console.log(errorMessage);
      showMessageForSomeTime(errorMessage, "", 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 0,
        }}
      >
        <h1 className="--header" style={{ color: "black" }}>
          Contact Us
        </h1>
        <p className="	--description">Contact us now for further enquiries.</p>
      </div>
      {errorMessage || successMessage ? (
        <p className={errorMessage ? "error" : "success"}>
          {errorMessage ? errorMessage : successMessage}
        </p>
      ) : null}
      <ContactInput
        type={"text"}
        placeholder={"Type your full name here"}
        id={"name"}
        nameValue="from_name"
        inputRef={fullNameRef}
      />
      <ContactInput
        type={"email"}
        placeholder={"Type your email here"}
        id={"email"}
        nameValue="from_email"
        inputRef={emailRef}
      />
      <ContactInput
        type={"text"}
        placeholder={"Type your subject here"}
        id={"subject"}
        nameValue="from_subject"
        inputRef={subjectRef}
      />
      <ContactInput
        type={"textarea"}
        placeholder={"Type your message here..."}
        id={"message"}
        nameValue="message"
        inputRef={messageRef}
      />
      <ContactInput
        type={"submit"}
        placeholder={loading ? "Submitting..." : "Submit"}
        id={"button"}
        loading={loading}
      />
    </form>
  );
}
