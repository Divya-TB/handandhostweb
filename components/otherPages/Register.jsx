"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
    password: "",
    password_confirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL;

  const togglePassword = () => {
    setPasswordType((prev) =>
      prev === "password" ? "text" : "password"
    );
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType((prev) =>
      prev === "password" ? "text" : "password"
    );
  };

  const sanitizeInput = (value) => {
    return value.replace(/[<>]/g, "").trimStart();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return "Username is required";
    }

    if (!/^[a-zA-Z0-9_ ]{3,30}$/.test(formData.name)) {
      return "Username must be 3-30 characters";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      return "Enter valid email address";
    }

    if (
      !/^[0-9]{10,15}$/.test(formData.phone_number)
    ) {
      return "Enter valid phone number";
    }

    if (
      !/^[0-9]{10,15}$/.test(
        formData.whatsapp_number
      )
    ) {
      return "Enter valid WhatsApp number";
    }

    if (formData.password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password)
    ) {
      return "Password must contain upper, lower & number";
    }

    if (
      formData.password !==
      formData.password_confirm
    ) {
      return "Passwords do not match";
    }

    return null;
  };

  const RegisterSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setMessage("");
    setSuccess(false);

    const error = validateForm();

    if (error) {
      setMessage(error);
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim()
          .toLowerCase(),
        phone_number:
          formData.phone_number.trim(),
        whatsapp_number:
          formData.whatsapp_number.trim(),
        password: formData.password,
        password_confirm:
          formData.password_confirm,
      };

      const res = await axios.post(
        `${API_URL}/api/register`,
        payload,
        {
          headers: {
            "Content-Type":
              "application/json",
          },
          withCredentials: true,
          timeout: 10000,
        }
      );

      setSuccess(true);
      setMessage(
        res.data?.message ||
          "Registered successfully. Please login."
      );

      setFormData({
        name: "",
        email: "",
        phone_number: "",
        whatsapp_number: "",
        password: "",
        password_confirm: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(
          error.response?.data?.message ||
            "Registration failed"
        );
      } else {
        setMessage(
          "Something went wrong"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="login-wrap">
          <div className="left">
            <div className="heading">
              <h4>Register</h4>
            </div>

            <form
              onSubmit={RegisterSubmit}
              autoComplete="off"
              className="form-login form-has-password"
            >
              <div className="wrap">
                <fieldset>
                  <input
                    type="text"
                    name="name"
                    placeholder="Username*"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength="30"
                    required
                  />
                </fieldset>

                <fieldset>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </fieldset>

                <fieldset>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number*"
                    value={formData.phone_number}
                    onChange={handleChange}
                    maxLength="15"
                    required
                  />
                </fieldset>

                <fieldset>
                  <input
                    type="tel"
                    name="whatsapp_number"
                    placeholder="Whatsapp Number*"
                    value={
                      formData.whatsapp_number
                    }
                    onChange={handleChange}
                    maxLength="15"
                    required
                  />
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    type={passwordType}
                    name="password"
                    placeholder="Password*"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <span
                    className="toggle-password"
                    onClick={
                      togglePassword
                    }
                  >
                    <i
                      className={`icon-eye-${
                        passwordType ===
                        "password"
                          ? "hide"
                          : "show"
                      }-line`}
                    />
                  </span>
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    type={
                      confirmPasswordType
                    }
                    name="password_confirm"
                    placeholder="Confirm Password*"
                    value={
                      formData.password_confirm
                    }
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <span
                    className="toggle-password"
                    onClick={
                      toggleConfirmPassword
                    }
                  >
                    <i
                      className={`icon-eye-${
                        confirmPasswordType ===
                        "password"
                          ? "hide"
                          : "show"
                      }-line`}
                    />
                  </span>
                </fieldset>

                {message && (
                  <p
                    style={{
                      color: success
                        ? "green"
                        : "red",
                      marginTop: "10px",
                    }}
                  >
                    {message}
                  </p>
                )}

                <div className="d-flex align-items-center">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="agree"
                        required
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>

                    <label htmlFor="agree">
                      I agree to the&nbsp;
                    </label>
                  </div>

                  <Link href="/term-of-use">
                    Terms of User
                  </Link>
                </div>
              </div>

              <div className="button-submit">
                <button
                  type="submit"
                  disabled={loading}
                  className="tf-btn btn-fill"
                >
                  <span className="text text-button">
                    {loading
                      ? "Registering..."
                      : "Register"}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">
              Already have an account?
            </h4>

            <p className="text-secondary">
              Welcome back. Sign in to
              continue.
            </p>

            <Link
              href="/login"
              className="tf-btn btn-fill"
            >
              <span className="text text-button">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}