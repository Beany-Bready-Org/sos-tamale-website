import "../../stylesheets/ContactInput.scss";
import PropTypes from "prop-types";

export default function ContactInput({
  type,
  placeholder,
  id,
  inputRef,
  nameValue,
  loading,
  onChange,
}) {
  if (type == "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        name={id}
        id={nameValue}
        key={id}
        ref={inputRef}
        className="contact__form__input textarea --input"
        onChange={(e) => onChange(e)}
      ></textarea>
    );
  } else if (type == "submit") {
    return (
      <input
        type={type}
        value={placeholder}
        id={id}
        name={nameValue}
        key={id}
        ref={inputRef}
        className="contact__form__input --cta --input"
        disabled={loading}
        style={
          loading ? { boxShadow: "none", backgroundColor: "#ced4da" } : null
        }
      />
    );
  } else {
    return (
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={nameValue}
        key={id}
        ref={inputRef}
        className="contact__form__input --input"
      />
    );
  }
}

ContactInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
