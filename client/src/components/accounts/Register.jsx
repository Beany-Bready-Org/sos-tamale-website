import React, { useState } from "react";
import RegisterInput from "./RegisterInput";
import sideImage from "../../assets/images/bg-img4.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../stylesheets/Register.scss";
import { useStatusMessage } from "../../contexts/StatusMessageContext";

export default function Register() {
  // Retrieve accessToken from localStorage
  const accessToken = localStorage.getItem("accessToken");
  // Navigate hook
  const navigate = useNavigate();

  //  const { statusMessage } = useStatusMessage()

  //   Admin credentials state
  const [adminCredentials, setAdminCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accessToken: "",
  });

  //   Function to handle credentials state
  const handleCredentialsUpdate = (e) => {
    setAdminCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Function to perform admin sign up
  const handleRegistration = async (e) => {
    e.preventDefault();

    if (adminCredentials.password !== adminCredentials.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const postOptions = {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ ...adminCredentials, accessToken }),
    };

    try {
      //   const response = await fetch("http://localhost:5001/api/admin/register", postOptions);
      const response = axios.post("http://localhost:5001/api/admin/register", {
        ...adminCredentials,
        accessToken,
      });

      if (!response.ok) {
        throw new Error("Failed to register" + response.statusText);
      }

      let data = response.json();

      let { message } = data;
      console.log(message);
      //   Reset form
      e.target.reset();
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(adminCredentials)

  return (
    <main className="register">
      <div className="register__image">
        <div className="register__image__notice">
          <h1>Admin Account</h1>
          <p>
            Register as an admin to overlook events that transpire on this
            website.
          </p>
        </div>
        <img src={sideImage} alt="" className="register__image__item" />
      </div>
      <form
        className="register__form"
        onSubmit={(e) => handleRegistration(e)}
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
          nameValue="name"
          onChangeHandler={handleCredentialsUpdate}
        />

        <RegisterInput
          type="email"
          placeholder="Enter Your Email"
          nameValue="email"
          onChangeHandler={handleCredentialsUpdate}
        />

        <RegisterInput
          type="password"
          placeholder="Enter Your Password"
          nameValue="password"
          onChangeHandler={handleCredentialsUpdate}
        />

        <RegisterInput
          type="password"
          placeholder="Confirm Your Password"
          nameValue="confirmPassword"
          onChangeHandler={handleCredentialsUpdate}
        />
        <button className="register-cta --cta" type="submit">
          Register
        </button>
        <button
          type="button"
          className="cancel-cta --danger"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </form>
    </main>
  );
}
