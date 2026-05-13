"use client";

import React, {
  useRef,
  useState,
} from "react";

import {
  useMessage
} from "@/context/MessageContext";

export default function Contact2() {

  const formRef = useRef();

  const {
    AddMessage
  } = useMessage();

  const [success, setSuccess] =
    useState(true);

  const [showMessage, setShowMessage] =
    useState(false);

  const handleShowMessage = () => {

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = async (e) => {

    e.preventDefault();

    try {

      const formData =
        new FormData(formRef.current);

      const payload = {

        V_Name:
          formData.get("name"),

        V_EmailID:
          formData.get("email"),

        V_Message:
          formData.get("message"),
      };
      // console.log('payload.............................', payload);
      const response =
        await AddMessage(payload);

      if (response?.success) {

        setSuccess(true);

        handleShowMessage();

        formRef.current.reset();

      } else {

        setSuccess(false);

        handleShowMessage();
      }

    } catch (err) {

      console.log(err);

      setSuccess(false);

      handleShowMessage();
    }
  };

  return (
    
    <section className="flat-spacing">
      <div className="container">
        <div className="contact-us-content">
          <hr></hr>

          <div className="left">

            <h4>Get In Touch</h4>

            <p className="text-secondary-2">
              Use the form below to get in touch with the sales team
            </p>

            <div
              className={`tfSubscribeMsg footer-sub-element ${
                showMessage ? "active" : ""
              }`}
            >

              {success ? (

                <p style={{ color: "rgb(52, 168, 83)" }}>
                  Message sent successfully.
                </p>

              ) : (

                <p style={{ color: "red" }}>
                  Something went wrong
                </p>

              )}

            </div>

            <form
              onSubmit={sendMail}
              ref={formRef}
              id="contactform"
              className="form-leave-comment"
            >

              <div className="wrap">

                <div className="cols">

                  <fieldset className="">
                    <input
                      className=""
                      type="text"
                      placeholder="Your Name*"
                      name="name"
                      id="name"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>

                  <fieldset className="">
                    <input
                      className=""
                      type="email"
                      placeholder="Your Email*"
                      name="email"
                      id="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>

                </div>

                <fieldset className="">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Your Message*"
                    tabIndex={2}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>

              </div>

              <div className="button-submit send-wrap">

                <button
                  className="tf-btn btn-fill"
                  type="submit"
                >

                  <span className="text text-button">
                    Send message
                  </span>

                </button>

              </div>

            </form>

          </div>

          <div className="right">

            <h4>Information</h4>

            <div className="mb_20">

              <div className="text-title mb_8">
                Phone:
              </div>

              <p className="text-secondary">
                <a
                  href="tel:+918921254349"
                  className="contact-link"
                >
                  +91 8921254349
                </a>
              </p>

            </div>

            <div className="mb_20">

              <div className="text-title mb_8">
                Email:
              </div>

              <p className="text-secondary">
                <a
                  href="mailto:support@handandhost.com"
                  className="contact-link"
                >
                  support@handandhost.com
                </a>
              </p>

            </div>

            <div className="mb_20">

              <div className="text-title mb_8">
                Address:
              </div>

              <p className="text-secondary">
                Hand & Host LLP
                <br />
                Basement floor, 5/257A8,
                Pallath Square,
                FACT kalamassery Rd,
                Ernakulam,
                Kerala,
                India - 683104
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}