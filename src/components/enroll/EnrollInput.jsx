import React from "react";
import PropTypes from "prop-types";

const EnrollInput = ({
  type,
  placeholder,
  className,
  nameValue = "",
  register,
  registerValue,
}) => {
  switch (type) {
    case "text":
    case "email":
    case "tel":
      return (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          name={nameValue}
          id={nameValue}
          {...register(registerValue)}
        />
      );
    default:
      return (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          name={nameValue}
          id={nameValue}
          {...register(registerValue)}
        />
      );
  }
};

EnrollInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
};

export default EnrollInput;
