// "use client";
// import React, { useState } from "react";

// export default function Information() {
//   const [passwordType, setPasswordType] = useState("password");
//   const [confirmPasswordType, setConfirmPasswordType] = useState("password");
//   const [newPasswordType, setNewPasswordType] = useState("password");

//   const togglePassword = () => {
//     setPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };

//   const toggleConfirmPassword = () => {
//     setConfirmPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };
//   const toggleNewPassword = () => {
//     setNewPasswordType((prevType) =>
//       prevType === "password" ? "text" : "password"
//     );
//   };
//   return (
//     <div className="my-account-content">
//       <div className="account-details">
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="form-account-details form-has-password"
//         >
//           <div className="account-info">
//             <h5 className="title">Information</h5>
//             <div className="cols mb_20">
//               <fieldset className="">
//                 <input
//                   className=""
//                   type="text"
//                   placeholder="First Name*"
//                   name="text"
//                   tabIndex={2}
//                   defaultValue="Tony"
//                   aria-required="true"
//                   required
//                 />
//               </fieldset>
//               <fieldset className="">
//                 <input
//                   className=""
//                   type="text"
//                   placeholder="Last Name*"
//                   name="text"
//                   tabIndex={2}
//                   defaultValue="Nguyen"
//                   aria-required="true"
//                   required
//                 />
//               </fieldset>
//             </div>
//             <div className="cols mb_20">
//               <fieldset className="">
//                 <input
//                   className=""
//                   type="email"
//                   placeholder="Username or email address*"
//                   name="email"
//                   tabIndex={2}
//                   defaultValue="themesflat@gmail.com"
//                   aria-required="true"
//                   required
//                 />
//               </fieldset>
//               <fieldset className="">
//                 <input
//                   className=""
//                   type="text"
//                   placeholder="Phone*"
//                   name="text"
//                   tabIndex={2}
//                   defaultValue="(+12) 345 678 910"
//                   aria-required="true"
//                   required
//                 />
//               </fieldset>
//             </div>
            
//           </div>
//           <div className="account-password">
//             <h5 className="title">Change Password</h5>
//             <fieldset className="position-relative password-item mb_20">
//               <input
//                 className="input-password"
//                 type={passwordType}
//                 placeholder="Password*"
//                 name="password"
//                 tabIndex={2}
//                 defaultValue=""
//                 aria-required="true"
//                 required
//               />
//               <span
//                 className={`toggle-password ${
//                   !(passwordType === "text") ? "unshow" : ""
//                 }`}
//                 onClick={togglePassword}
//               >
//                 <i
//                   className={`icon-eye-${
//                     !(passwordType === "text") ? "hide" : "show"
//                   }-line`}
//                 />
//               </span>
//             </fieldset>
//             <fieldset className="position-relative password-item mb_20">
//               <input
//                 className="input-password"
//                 type={newPasswordType}
//                 placeholder="New Password*"
//                 name="newPassword"
//                 tabIndex={2}
//                 defaultValue=""
//                 aria-required="true"
//                 required
//               />
//               <span
//                 className={`toggle-password ${
//                   !(newPasswordType === "text") ? "unshow" : ""
//                 }`}
//                 onClick={toggleNewPassword}
//               >
//                 <i
//                   className={`icon-eye-${
//                     !(newPasswordType === "text") ? "hide" : "show"
//                   }-line`}
//                 />
//               </span>
//             </fieldset>
//             <fieldset className="position-relative password-item">
//               <input
//                 className="input-password"
//                 type={confirmPasswordType}
//                 placeholder="Confirm Password*"
//                 name="confirmPassword"
//                 tabIndex={2}
//                 defaultValue=""
//                 aria-required="true"
//                 required
//               />
//               <span
//                 className={`toggle-password ${
//                   !(confirmPasswordType === "text") ? "unshow" : ""
//                 }`}
//                 onClick={toggleConfirmPassword}
//               >
//                 <i
//                   className={`icon-eye-${
//                     !(confirmPasswordType === "text") ? "hide" : "show"
//                   }-line`}
//                 />
//               </span>
//             </fieldset>
//           </div>
//           <div className="button-submit">
//             <button className="tf-btn btn-fill" type="submit">
//               <span className="text text-button">Update Account</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useAccount } from "@/context/AccountContext";



export default function Information() {

  const { users } = useAccount();



  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [newPasswordType, setNewPasswordType] = useState("password");

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    whatsapp_number: ""
  });

  // console.log('formdata..................................................',formData);

  useEffect(() => {

    if (users) {

      setFormData({
        Name: users.Name || "",
        email: users.email || "",
        phone: users.phone || "",
        whatsapp_number: users.whatsapp_number || ""
      });

    }

  }, [users]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const togglePassword = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const toggleNewPassword = () => {
    setNewPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <div className="my-account-content">
      <div className="account-details">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-account-details form-has-password"
        >
          <div className="account-info">

            <h5 className="title">
              Information
            </h5>

            <div className="cols mb_20">

              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="Name*"
                  name="Name"
                  tabIndex={2}
                  value={formData.Name}
                  onChange={handleChange}
                  aria-required="true"
                  required
                />
              </fieldset>

              <fieldset className="">
                <input
                  className=""
                  type="email"
                  placeholder="Username or email address*"
                  name="email"
                  tabIndex={2}
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  required
                />
              </fieldset>

            </div>

            <div className="cols mb_20">

              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="Phone*"
                  name="phone"
                  tabIndex={2}
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                  required
                />
              </fieldset>

              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="Whatsapp Phone*"
                  name="whatsapp_number"
                  tabIndex={2}
                  value={formData.whatsapp_number}
                  onChange={handleChange}
                  aria-required="true"
                  required
                />
              </fieldset>

            </div>

          </div>

          <div className="account-password">

            <h5 className="title">
              Change Password
            </h5>

            <fieldset className="position-relative password-item mb_20">

              <input
                className="input-password"
                type={passwordType}
                placeholder="Password*"
                name="password"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />

              <span
                className={`toggle-password ${
                  !(passwordType === "text") ? "unshow" : ""
                }`}
                onClick={togglePassword}
              >
                <i
                  className={`icon-eye-${
                    !(passwordType === "text") ? "hide" : "show"
                  }-line`}
                />
              </span>

            </fieldset>

            <fieldset className="position-relative password-item mb_20">

              <input
                className="input-password"
                type={newPasswordType}
                placeholder="New Password*"
                name="newPassword"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />

              <span
                className={`toggle-password ${
                  !(newPasswordType === "text") ? "unshow" : ""
                }`}
                onClick={toggleNewPassword}
              >
                <i
                  className={`icon-eye-${
                    !(newPasswordType === "text") ? "hide" : "show"
                  }-line`}
                />
              </span>

            </fieldset>

            <fieldset className="position-relative password-item">

              <input
                className="input-password"
                type={confirmPasswordType}
                placeholder="Confirm Password*"
                name="confirmPassword"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required
              />

              <span
                className={`toggle-password ${
                  !(confirmPasswordType === "text") ? "unshow" : ""
                }`}
                onClick={toggleConfirmPassword}
              >
                <i
                  className={`icon-eye-${
                    !(confirmPasswordType === "text") ? "hide" : "show"
                  }-line`}
                />
              </span>

            </fieldset>

          </div>

          <div className="button-submit">

            <button
              className="tf-btn btn-fill"
              type="submit"
            >
              <span className="text text-button">
                Update Account
              </span>
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}
