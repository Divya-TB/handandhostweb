"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setMessage("");
    setSuccess(false);

    const cleanEmail = email
      .trim()
      .toLowerCase();

    if (!cleanEmail) {
      setMessage(
        "Email is required"
      );
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      )
    ) {
      setMessage(
        "Enter valid email"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/api/forgot-password`,
        {
          email:
            cleanEmail,
        },
        {
          headers: {
            "Content-Type":
              "application/json",
          },
          timeout: 10000,
          withCredentials: true,
        }
      );

      setSuccess(true);
      setMessage(
        res.data?.message ||
          "Reset link sent to your email"
      );

      setEmail("");
    } catch (error) {
      if (
        axios.isAxiosError(error)
      ) {
        setMessage(
          error.response?.data
            ?.message ||
            "Request failed"
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
              <h4 className="mb_8">
                Reset your password
              </h4>

              <p>
                We will send you an
                email to reset your
                password
              </p>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="form-login"
              autoComplete="off"
            >
              <div className="wrap">
                <fieldset>
                  <input
                    type="email"
                    placeholder="Username or email address*"
                    name="email"
                    value={email}
                    onChange={(
                      e
                    ) =>
                      setEmail(
                        e.target
                          .value
                      )
                    }
                    required
                  />
                </fieldset>

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
                      ? "Sending..."
                      : "Submit"}
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
              Be part of our growing
              family of new
              customers! Join us
              today and unlock a
              world of exclusive
              benefits, offers, and
              personalized
              experiences.
            </p>

            <Link
              href={`/register`}
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