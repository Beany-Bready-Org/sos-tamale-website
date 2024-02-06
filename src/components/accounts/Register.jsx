import React from "react";
import RegisterInput from "./RegisterInput";
import sideImage from "../../assets/images/bg-img4.jpg";
import { useNavigate } from "react-router-dom";

import "../../stylesheets/Register.scss";

export default function Register() {
  const navigate = useNavigate()

	return (
		<main className="register">
      <div className="side-image">
      <div className="notice">
      <h1>Admin Account</h1>
        <p>Register as an admin to overlook events that transpire on this website.</p>
      </div>
			<img src={sideImage} alt="" className="side-image__item" />

      </div>
			<form
				className="register__form"
				// onSubmit={handleSubmit}
				// ref={formRef}
			>
				<div className="register__form__heading">
					<h2 className="register__form__heading__header">
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
				{/* 
				<RegisterInput
					type="password"
					placeholder="Enter Your Password"
					// inputRef={emailRef}
					nameValue="formPassword"
				/> */}
				<button className="register-cta --cta" type="submit">Submit</button>
        <button type="button" className="cancel-cta --cta" onClick={() => navigate(-1)}>Cancel</button>
			</form>
		</main>
	);
}
