import React, { useState } from "react";
import RegisterInput from "./RegisterInput";
import sideImage from "../../assets/images/bg-img4.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../../stylesheets/Register.scss";
import { useStatusMessage } from "../../contexts/StatusMessageContext";

export default function Register() {
  const BASE_URL = import.meta.env.BASE_URL;
  console.log(BASE_URL);
  // Retrieve accessToken from localStorage
  const accessToken = localStorage.getItem("accessToken");
  // Navigate hook
  const navigate = useNavigate();

  // const { statusMessage, showStatusMessageForAWhile } = useStatusMessage();
  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    message: "",
    success: false,
  });

  // Helper function
  const showResponse = (message = "", success = Boolean(), interval = 1500) => {
    if (message) {
      setResponseStatus((prev) => {
        return { ...prev, message, success };
      });
    }

    const timeout = setTimeout(() => {
      setResponseStatus({ message: "", success: false });
    }, interval);
    return () => clearTimeout(timeout);
  };

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

    if (
      !adminCredentials.name ||
      !adminCredentials.email ||
      !adminCredentials.password ||
      !adminCredentials.confirmPassword
    ) {
      return showResponse("All fields must be filled out, try again", false);
    }

    if (adminCredentials.password !== adminCredentials.confirmPassword) {
      return showResponse(
        "Passwords do not match, check passwords and try again",
        false
      );
    }

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...adminCredentials, accessToken }),
    };

    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5001/api/admin/register",
        postOptions
      );
      // const response = await axios.post(
      //   "http://localhost:5001/api/admin/register",
      //   postOptions.body,
      //   postOptions.headers
      // );

      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to register" + response.statusText);
      }

      let data = response.json();

      let { message } = data;
      showResponse(message, true);
      //   Reset form data
      e.target.reset();
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      showResponse(error.message, false);
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
      <form className="register__form" onSubmit={(e) => handleRegistration(e)}>
        <div className="register__form__heading">
          <h2 className="register__form__heading__header">
            Register as an Admin
          </h2>
          {/* Display status message */}
          {responseStatus.message && (
            <p
              className={`status-message ${
                responseStatus.success ? "success" : "error"
              }`}
            >
              {responseStatus.message}
            </p>
          )}
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
        <button className="register-cta --cta" type="submit" disabled={loading}>
          {loading ? "Registering...": "Register"}
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
