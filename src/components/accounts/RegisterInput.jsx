import React from "react";

export default function RegisterInput({
  type,
  placeholder,
  inputRef,
  className,
  nameValue,
}) {
  switch (type) {
    case "name":
      return (
        <input
          type={type}
          placeholder={placeholder}
          ref={inputRef}
          className={className}
          name={nameValue}
        />
      );
  }
}
