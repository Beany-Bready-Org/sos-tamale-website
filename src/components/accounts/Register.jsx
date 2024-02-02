import React from "react";
import RegisterInput from "./RegisterInput";

export default function Register() {
  return (
    <main>
      <form
        className="register-form"
        // onSubmit={handleSubmit}
        // ref={formRef}
      >
        <div className="register-form__heading">
          <h2 className="register-form__heading__header">
            Register as an Admin
          </h2>
        </div>

        <RegisterInput
          type="email"
          placeholder="Enter Your Email Here.."
          className="register-form__input"
          inputRef={emailRef}
          nameValue="form_email"
        />
      </form>
    </main>
  );
}
