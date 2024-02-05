import React from "react";

export default function RegisterInput({
  type,
  placeholder,
  inputRef,
  className,
  nameValue,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      className="register__form__input --input"
      name={nameValue}
    />
  );
}
