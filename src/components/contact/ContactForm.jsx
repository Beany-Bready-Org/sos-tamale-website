import "../../stylesheets/ContactForm.scss";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <form className="contact__form">
      <h1 className="--header" style={{ color: "black" }}>
        Contact Us
      </h1>
      <ContactInput
        type={"text"}
        placeholder={"Type your full name here"}
        id={"name"}
      />
      <ContactInput
        type={"email"}
        placeholder={"Type your email here"}
        id={"email"}
      />
      <ContactInput
        type={"text"}
        placeholder={"Type your subject here"}
        id={"subject"}
      />
      <ContactInput
        type={"textarea"}
        placeholder={"Type your message here..."}
        id={"message"}
      />
      <ContactInput type={"submit"} placeholder={"Submit"} id={"button"} />
    </form>
  );
}
