import React from "react";
import RegisterInput from "./RegisterInput";

import "../../stylesheets/Register.scss";

export default function Register() {
  return (
    <main className="register">
      <form
        className="register__form"
        // onSubmit={handleSubmit}
        // ref={formRef}
      >
        <div className="register__form__heading">
          <h2 className="register__form__heading__header --header">
            Register as an Admin
          </h2>
        </div>

        <RegisterInput
          type="name"
          placeholder="Enter Your Name"
          // inputRef={emailRef}
          nameValue="formName"
        />

        <RegisterInput
          type="email"
          placeholder="Enter Your Email"
          // inputRef={emailRef}
          nameValue="formEmail"
        />

        <RegisterInput
          type="password"
          placeholder="Enter Your Password"
          // inputRef={emailRef}
          nameValue="formPassword"
        />

        button
      </form>
    </main>
  );
}
