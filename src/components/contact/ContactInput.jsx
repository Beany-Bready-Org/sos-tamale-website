import "../../stylesheets/ContactInput.scss";

export default function ContactInput({ type, placeholder, id }) {
  if (type == "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={id}
        id={id}
        key={id}
        className="contact__form__input"></textarea>
    );
  } else {
    return (
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        key={id}
        className="contact__form__input"
      />
    );
  }
}
