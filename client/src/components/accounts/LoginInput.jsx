import React from "react";
import PropTypes from "prop-types";

export default function LoginInput({
  type,
  placeholder,
  // className,
  nameValue,
  onChangeHandler,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="login__form__input --input"
      name={nameValue}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
