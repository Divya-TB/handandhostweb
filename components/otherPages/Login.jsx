

"use client";

import React, {
  useState,
  useEffect,
  Suspense,
} from "react";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

function LoginContent() {
  const router = useRouter();
  const { login } = useAuth();
  const searchParams =
    useSearchParams();

  const [passwordType, setPasswordType] =
    useState("password");

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
      rememberMe: true,
    });

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const API_URL =process.env.NEXT_PUBLIC_API_URL;

  /* -----------------------------
     Save previous page
  ----------------------------- */
  useEffect(() => {
    const from =
      searchParams.get("from");

    if (from) {
      sessionStorage.setItem(
        "redirectAfterLogin",
        from
      );
    }
  }, [searchParams]);

  const togglePassword = () => {
    setPasswordType((prev) =>
      prev === "password"
        ? "text"
        : "password"
    );
  };

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim())
      return "Email is required";

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    )
      return "Enter valid email";

    if (!formData.password)
      return "Password is required";

    return null;
  };

  const LoginSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setMessage("");
    setSuccess(false);

    const error =
      validateForm();

    if (error) {
      setMessage(error);
      return;
    }

    try {
      setLoading(true);

      const res =
        await axios.post(
          `${API_URL}/api/login`,
          {
            email:
              formData.email
                .trim()
                .toLowerCase(),
            password:
              formData.password,
            rememberMe:
              formData.rememberMe,
          },
          {
            withCredentials: true,
            timeout: 10000,
          }
        );

      if (res.data?.user?.id) {
        login(res.data.user);
      }

      setSuccess(true);
      setMessage(
        "Login successful"
      );

      const redirectTo =
        sessionStorage.getItem(
          "redirectAfterLogin"
        ) || "/";

      sessionStorage.removeItem(
        "redirectAfterLogin"
      );

      setTimeout(() => {
        router.push(
          redirectTo
        );
      }, 1000);

    } catch (error) {
      if (
        axios.isAxiosError(
          error
        )
      ) {
        setMessage(
          error.response
            ?.data
            ?.message ||
            "Login failed"
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
              <h4>Login</h4>
            </div>

            <form
              onSubmit={
                LoginSubmit
              }
              className="form-login form-has-password"
            >
              <div className="wrap">

                <fieldset>
                  <input
                    type="email"
                    placeholder="Username or email address*"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </fieldset>

                <fieldset className="position-relative password-item">
                  <input
                    className="input-password"
                    type={
                      passwordType
                    }
                    placeholder="Password*"
                    name="password"
                    value={
                      formData.password
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                  <span
                    className={`toggle-password ${
                      passwordType !==
                      "text"
                        ? "unshow"
                        : ""
                    }`}
                    onClick={
                      togglePassword
                    }
                  >
                    <i
                      className={`icon-eye-${
                        passwordType !==
                        "text"
                          ? "hide"
                          : "show"
                      }-line`}
                    />
                  </span>
                </fieldset>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="tf-cart-checkbox">
                    <div className="tf-checkbox-wrapp">
                      <input
                        type="checkbox"
                        id="login-form_agree"
                        name="rememberMe"
                        checked={
                          formData.rememberMe
                        }
                        onChange={
                          handleChange
                        }
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>

                    <label htmlFor="login-form_agree">
                      Remember me
                    </label>
                  </div>

                  <Link
                    href="/forget-password"
                    className="font-2 text-button forget-password link"
                  >
                    Forgot Your Password?
                  </Link>
                </div>

                {message && (
                  <p
                    style={{
                      color:
                        success
                          ? "green"
                          : "red",
                      marginTop:
                        "10px",
                    }}
                  >
                    {message}
                  </p>
                )}

              </div>

              <div className="button-submit">
                <button
                  className="tf-btn btn-fill"
                  type="submit"
                  disabled={
                    loading
                  }
                >
                  <span className="text text-button">
                    {loading
                      ? "Logging in..."
                      : "Login"}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="right">
            <h4 className="mb_8">
              New Customer
            </h4>

            <p className="text-secondary">
              Be part of our growing family of new customers!
            </p>

            <Link
              href="/register"
              className="tf-btn btn-fill"
            >
              <span className="text text-button">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Login() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  );
}