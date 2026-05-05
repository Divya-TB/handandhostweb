// "use client";

// import { useContextElement } from "@/context/Context";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// const discounts = [
//   {
//     discount: "10% OFF",
//     details: "For all orders from 200$",
//     code: "Mo234231",
//   },
//   {
//     discount: "10% OFF",
//     details: "For all orders from 200$",
//     code: "Mo234231",
//   },
//   {
//     discount: "10% OFF",
//     details: "For all orders from 200$",
//     code: "Mo234231",
//   },
// ];

// export default function Checkout() {
//   const [activeDiscountIndex, setActiveDiscountIndex] = useState(1);
//   const { cartProducts, totalPrice } = useContextElement();

//   return (
//     <section>
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-6">
//             <div className="flat-spacing tf-page-checkout">

//               {/* LOGIN */}
//               <div className="wrap">
//                 <div className="title-login">
//                   <p>Already have an account?</p>{" "}
//                   <Link href="/login" className="text-button">
//                     Login here
//                   </Link>
//                 </div>

//                 <form className="login-box" onSubmit={(e) => e.preventDefault()}>
//                   <div className="grid-2">
//                     <input type="text" placeholder="Your name/Email" />
//                     <input type="password" placeholder="Password" />
//                   </div>
//                   <button className="tf-btn" type="submit">
//                     <span className="text">Login</span>
//                   </button>
//                 </form>
//               </div>

//               {/* INFORMATION */}
//               <div className="wrap">
//                 <h5 className="title">Information</h5>

//                 <form className="info-box" onSubmit={(e) => e.preventDefault()}>
//                   <div className="grid-2">
//                     <input type="text" placeholder="First Name*" />
//                     <input type="text" placeholder="Last Name*" />
//                   </div>

//                   <div className="grid-2">
//                     <input type="text" placeholder="Email Address*" />
//                     <input type="text" placeholder="Phone Number*" />
//                   </div>

//                   {/* COUNTRY */}
//                   <div className="tf-select">
//                     <select
//                       className="text-title"
//                       name="address[country]"
//                       defaultValue="Choose Country/Region"
//                     >
//                       <option value="Choose Country/Region">
//                         Choose Country/Region
//                       </option>

//                       <option value="United States">United States</option>
//                       <option value="Australia">Australia</option>
//                       <option value="Austria">Austria</option>
//                       <option value="Belgium">Belgium</option>
//                       <option value="Canada">Canada</option>
//                       <option value="Czech Republic">Czechia</option>
//                       <option value="Denmark">Denmark</option>
//                       <option value="Finland">Finland</option>
//                       <option value="France">France</option>
//                       <option value="Germany">Germany</option>
//                       <option value="Hong Kong">Hong Kong SAR</option>
//                       <option value="Ireland">Ireland</option>
//                       <option value="Israel">Israel</option>
//                       <option value="Italy">Italy</option>
//                       <option value="Japan">Japan</option>
//                       <option value="Malaysia">Malaysia</option>
//                       <option value="Netherlands">Netherlands</option>
//                       <option value="New Zealand">New Zealand</option>
//                       <option value="Norway">Norway</option>
//                       <option value="Poland">Poland</option>
//                       <option value="Portugal">Portugal</option>
//                       <option value="Singapore">Singapore</option>
//                       <option value="South Korea">South Korea</option>
//                       <option value="Spain">Spain</option>
//                       <option value="Sweden">Sweden</option>
//                       <option value="Switzerland">Switzerland</option>
//                       <option value="United Arab Emirates">
//                         United Arab Emirates
//                       </option>
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="Vietnam">Vietnam</option>
//                     </select>
//                   </div>

//                   <div className="grid-2">
//                     <input type="text" placeholder="Town/City*" />
//                     <input type="text" placeholder="Street,..." />
//                   </div>

//                   {/* STATE */}
//                   <div className="grid-2">
//                     <div className="tf-select">
//                       <select className="text-title" defaultValue="Choose State">
//                         <option value="Choose State">Choose State</option>
//                         <option value="California">California</option>
//                         <option value="Alabama">Alabama</option>
//                         <option value="Alaska">Alaska</option>
//                         <option value="Arizona">Arizona</option>
//                         <option value="Arkansas">Arkansas</option>
//                         <option value="Florida">Florida</option>
//                         <option value="Georgia">Georgia</option>
//                         <option value="Hawaii">Hawaii</option>
//                         <option value="Washington">Washington</option>
//                         <option value="Texas">Texas</option>
//                         <option value="Iowa">Iowa</option>
//                         <option value="Nevada">Nevada</option>
//                         <option value="Illinois">Illinois</option>
//                       </select>
//                     </div>

//                     <input type="text" placeholder="Postal Code*" />
//                   </div>

//                   <textarea placeholder="Write note..." />
//                 </form>
//               </div>

//               {/* PAYMENT */}
//               <div className="wrap">
//                 <h5 className="title">Choose payment Option:</h5>

//                 <form className="form-payment" onSubmit={(e) => e.preventDefault()}>
//                   <div className="payment-box" id="payment-box">

//                     {/* CARD */}
//                     <div className="payment-item payment-choose-card active">
//                       <label className="payment-header" htmlFor="credit-card-method">
//                         <input
//                           type="radio"
//                           name="payment-method"
//                           className="tf-check-rounded"
//                           id="credit-card-method"
//                           defaultChecked
//                         />
//                         <span className="text-title">Credit Card</span>
//                       </label>

//                       <div className="payment-body">
//                         <p className="text-secondary">
//                           Make your payment directly into our bank account.
//                         </p>
//                       </div>
//                     </div>

//                     {/* COD */}
//                     <div className="payment-item">
//                       <label htmlFor="delivery-method" className="payment-header">
//                         <input
//                           type="radio"
//                           name="payment-method"
//                           className="tf-check-rounded"
//                           id="delivery-method"
//                         />
//                         <span className="text-title">Cash on delivery</span>
//                       </label>
//                     </div>

//                     {/* APPLE */}
//                     <div className="payment-item">
//                       <label htmlFor="apple-method" className="payment-header">
//                         <input
//                           type="radio"
//                           name="payment-method"
//                           className="tf-check-rounded"
//                           id="apple-method"
//                         />
//                         <span className="text-title">Apple Pay</span>
//                       </label>
//                     </div>

//                   </div>

//                   <button className="tf-btn btn-reset">Payment</button>
//                 </form>
//               </div>
//             </div>
//           </div>


//           {/* RIGHT SIDE CART */}
// <div className="col-xl-5">
//   <div className="flat-spacing flat-sidebar-checkout">

//     <h5 className="title">Shopping Cart</h5>

//     <div className="list-product">

//       {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
//         cartProducts.map((elm, i) => (
//           <div key={i} className="item-product">
//             <Link href={`/product-detail/${elm.id}`} className="img-product">
//               <Image
//                 alt="img"
//                 src={elm.imgSrc || "/images/no-image.png"}
//                 width={600}
//                 height={800}
//               />
//             </Link>

//             <div className="content-box">
//               <Link href={`/product-detail/${elm.id}`} className="name-product">
//                 {elm.title}
//               </Link>

//               <div className="total-price">
//                 {elm.quantity} x Rs {elm.price}
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p style={{ padding: "10px", color: "#888" }}>
//           Your cart is empty
//         </p>
//       )}

//     </div>

//     <div className="bottom">
//       <h5 className="d-flex justify-content-between">
//         <span>Total</span>
//         <span>${Number(totalPrice || 0).toFixed(2)}</span>
//       </h5>
//     </div>

//   </div>
// </div>

//           {/* RIGHT SIDE CART
//           <div className="col-xl-5">
//             <div className="flat-spacing flat-sidebar-checkout">

//               <h5 className="title">Shopping Cart</h5>

//               <div className="list-product">
//                 {cartProducts.map((elm, i) => (
//                   <div key={i} className="item-product">
//                     <Link href={`/product-detail/${elm.id}`} className="img-product">
//                       <Image
//                         alt="img"
//                         src={elm.imgSrc || "/images/no-image.png"}
//                         width={600}
//                         height={800}
//                       />
//                     </Link>

//                     <div className="content-box">
//                       <Link href={`/product-detail/${elm.id}`} className="name-product">
//                         {elm.title}
//                       </Link>

//                       <div className="total-price">
//                         {elm.quantity} x Rs {elm.price}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bottom">
//                 <h5 className="d-flex justify-content-between">
//                   <span>Total</span>
//                   <span>${totalPrice.toFixed(2)}</span>
//                 </h5>
//               </div>

//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Checkout() {
  const { cartProducts, totalPrice } = useContextElement();

  const [user, setUser] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  //  Load user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userId"));
    if (storedUser) {
      setUser(storedUser);
      setForm({
        name: storedUser.name || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        address: "",
        city: "",
        pincode: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ PAYMENT HANDLER
  const handlePayment = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    // COD
    if (paymentMethod === "cod") {
      alert("Order placed with Cash on Delivery");
      return;
    }

    // Razorpay
    const res = await fetch("/api/create-order", {
      method: "POST",
      body: JSON.stringify({ amount: totalPrice }),
    });

    const data = await res.json();

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: data.amount,
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      order_id: data.id,
      handler: function () {
        alert("Payment Successful");
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: { color: "#000" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-lg-7">
            <div className="checkout-card">

              <h4 className="section-title">Shipping Information</h4>

              {!user && (
                <div className="login-alert">
                  Already have an account? <Link href="/login">Login</Link>
                </div>
              )}

              <div className="form-grid">
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
              </div>

              <input
                name="address"
                placeholder="Full Address"
                className="full-input"
                value={form.address}
                onChange={handleChange}
              />

              <input
                name="pincode"
                placeholder="Pincode"
                className="full-input"
                value={form.pincode}
                onChange={handleChange}
              />

              {/* PAYMENT */}
              <h4 className="section-title mt-4">Payment Method</h4>

              <div className="payment-options">
                <label className={`payment-box ${paymentMethod === "razorpay" ? "active" : ""}`}>
                  <input
                    type="radio"
                    value="razorpay"
                    checked={paymentMethod === "razorpay"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>UPI / Card / Net Banking</span>
                </label>

                <label className={`payment-box ${paymentMethod === "cod" ? "active" : ""}`}>
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              <button className="place-order-btn" onClick={handlePayment}>
                Place Order
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5">
            <div className="order-summary">

              <h4 className="section-title">Order Summary</h4>

              {cartProducts?.length > 0 ? (
                cartProducts.map((item, i) => (
                  <div key={i} className="summary-item">
                    <Image
                      src={item.imgSrc || "/images/no-image.png"}
                      width={60}
                      height={60}
                      alt="img"
                    />
                    <div>
                      <p className="item-title">{item.title}</p>
                      <p className="item-meta">
                        {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-cart">Your cart is empty</p>
              )}

              <div className="summary-total">
                <span>Total</span>
                <span>₹{Number(totalPrice || 0)}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}