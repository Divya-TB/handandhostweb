// // "use client";

// // import { useContextElement } from "@/context/Context";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // const discounts = [
// //   {
// //     discount: "10% OFF",
// //     details: "For all orders from 200$",
// //     code: "Mo234231",
// //   },
// //   {
// //     discount: "10% OFF",
// //     details: "For all orders from 200$",
// //     code: "Mo234231",
// //   },
// //   {
// //     discount: "10% OFF",
// //     details: "For all orders from 200$",
// //     code: "Mo234231",
// //   },
// // ];

// // export default function Checkout() {
// //   const [activeDiscountIndex, setActiveDiscountIndex] = useState(1);
// //   const { cartProducts, totalPrice } = useContextElement();

// //   return (
// //     <section>
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-xl-6">
// //             <div className="flat-spacing tf-page-checkout">

// //               {/* LOGIN */}
// //               <div className="wrap">
// //                 <div className="title-login">
// //                   <p>Already have an account?</p>{" "}
// //                   <Link href="/login" className="text-button">
// //                     Login here
// //                   </Link>
// //                 </div>

// //                 <form className="login-box" onSubmit={(e) => e.preventDefault()}>
// //                   <div className="grid-2">
// //                     <input type="text" placeholder="Your name/Email" />
// //                     <input type="password" placeholder="Password" />
// //                   </div>
// //                   <button className="tf-btn" type="submit">
// //                     <span className="text">Login</span>
// //                   </button>
// //                 </form>
// //               </div>

// //               {/* INFORMATION */}
// //               <div className="wrap">
// //                 <h5 className="title">Information</h5>

// //                 <form className="info-box" onSubmit={(e) => e.preventDefault()}>
// //                   <div className="grid-2">
// //                     <input type="text" placeholder="First Name*" />
// //                     <input type="text" placeholder="Last Name*" />
// //                   </div>

// //                   <div className="grid-2">
// //                     <input type="text" placeholder="Email Address*" />
// //                     <input type="text" placeholder="Phone Number*" />
// //                   </div>

// //                   {/* COUNTRY */}
// //                   <div className="tf-select">
// //                     <select
// //                       className="text-title"
// //                       name="address[country]"
// //                       defaultValue="Choose Country/Region"
// //                     >
// //                       <option value="Choose Country/Region">
// //                         Choose Country/Region
// //                       </option>

// //                       <option value="United States">United States</option>
// //                       <option value="Australia">Australia</option>
// //                       <option value="Austria">Austria</option>
// //                       <option value="Belgium">Belgium</option>
// //                       <option value="Canada">Canada</option>
// //                       <option value="Czech Republic">Czechia</option>
// //                       <option value="Denmark">Denmark</option>
// //                       <option value="Finland">Finland</option>
// //                       <option value="France">France</option>
// //                       <option value="Germany">Germany</option>
// //                       <option value="Hong Kong">Hong Kong SAR</option>
// //                       <option value="Ireland">Ireland</option>
// //                       <option value="Israel">Israel</option>
// //                       <option value="Italy">Italy</option>
// //                       <option value="Japan">Japan</option>
// //                       <option value="Malaysia">Malaysia</option>
// //                       <option value="Netherlands">Netherlands</option>
// //                       <option value="New Zealand">New Zealand</option>
// //                       <option value="Norway">Norway</option>
// //                       <option value="Poland">Poland</option>
// //                       <option value="Portugal">Portugal</option>
// //                       <option value="Singapore">Singapore</option>
// //                       <option value="South Korea">South Korea</option>
// //                       <option value="Spain">Spain</option>
// //                       <option value="Sweden">Sweden</option>
// //                       <option value="Switzerland">Switzerland</option>
// //                       <option value="United Arab Emirates">
// //                         United Arab Emirates
// //                       </option>
// //                       <option value="United Kingdom">United Kingdom</option>
// //                       <option value="Vietnam">Vietnam</option>
// //                     </select>
// //                   </div>

// //                   <div className="grid-2">
// //                     <input type="text" placeholder="Town/City*" />
// //                     <input type="text" placeholder="Street,..." />
// //                   </div>

// //                   {/* STATE */}
// //                   <div className="grid-2">
// //                     <div className="tf-select">
// //                       <select className="text-title" defaultValue="Choose State">
// //                         <option value="Choose State">Choose State</option>
// //                         <option value="California">California</option>
// //                         <option value="Alabama">Alabama</option>
// //                         <option value="Alaska">Alaska</option>
// //                         <option value="Arizona">Arizona</option>
// //                         <option value="Arkansas">Arkansas</option>
// //                         <option value="Florida">Florida</option>
// //                         <option value="Georgia">Georgia</option>
// //                         <option value="Hawaii">Hawaii</option>
// //                         <option value="Washington">Washington</option>
// //                         <option value="Texas">Texas</option>
// //                         <option value="Iowa">Iowa</option>
// //                         <option value="Nevada">Nevada</option>
// //                         <option value="Illinois">Illinois</option>
// //                       </select>
// //                     </div>

// //                     <input type="text" placeholder="Postal Code*" />
// //                   </div>

// //                   <textarea placeholder="Write note..." />
// //                 </form>
// //               </div>

// //               {/* PAYMENT */}
// //               <div className="wrap">
// //                 <h5 className="title">Choose payment Option:</h5>

// //                 <form className="form-payment" onSubmit={(e) => e.preventDefault()}>
// //                   <div className="payment-box" id="payment-box">

// //                     {/* CARD */}
// //                     <div className="payment-item payment-choose-card active">
// //                       <label className="payment-header" htmlFor="credit-card-method">
// //                         <input
// //                           type="radio"
// //                           name="payment-method"
// //                           className="tf-check-rounded"
// //                           id="credit-card-method"
// //                           defaultChecked
// //                         />
// //                         <span className="text-title">Credit Card</span>
// //                       </label>

// //                       <div className="payment-body">
// //                         <p className="text-secondary">
// //                           Make your payment directly into our bank account.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     {/* COD */}
// //                     <div className="payment-item">
// //                       <label htmlFor="delivery-method" className="payment-header">
// //                         <input
// //                           type="radio"
// //                           name="payment-method"
// //                           className="tf-check-rounded"
// //                           id="delivery-method"
// //                         />
// //                         <span className="text-title">Cash on delivery</span>
// //                       </label>
// //                     </div>

// //                     {/* APPLE */}
// //                     <div className="payment-item">
// //                       <label htmlFor="apple-method" className="payment-header">
// //                         <input
// //                           type="radio"
// //                           name="payment-method"
// //                           className="tf-check-rounded"
// //                           id="apple-method"
// //                         />
// //                         <span className="text-title">Apple Pay</span>
// //                       </label>
// //                     </div>

// //                   </div>

// //                   <button className="tf-btn btn-reset">Payment</button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>


// //           {/* RIGHT SIDE CART */}
// // <div className="col-xl-5">
// //   <div className="flat-spacing flat-sidebar-checkout">

// //     <h5 className="title">Shopping Cart</h5>

// //     <div className="list-product">

// //       {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
// //         cartProducts.map((elm, i) => (
// //           <div key={i} className="item-product">
// //             <Link href={`/product-detail/${elm.id}`} className="img-product">
// //               <Image
// //                 alt="img"
// //                 src={elm.imgSrc || "/images/no-image.png"}
// //                 width={600}
// //                 height={800}
// //               />
// //             </Link>

// //             <div className="content-box">
// //               <Link href={`/product-detail/${elm.id}`} className="name-product">
// //                 {elm.title}
// //               </Link>

// //               <div className="total-price">
// //                 {elm.quantity} x Rs {elm.price}
// //               </div>
// //             </div>
// //           </div>
// //         ))
// //       ) : (
// //         <p style={{ padding: "10px", color: "#888" }}>
// //           Your cart is empty
// //         </p>
// //       )}

// //     </div>

// //     <div className="bottom">
// //       <h5 className="d-flex justify-content-between">
// //         <span>Total</span>
// //         <span>${Number(totalPrice || 0).toFixed(2)}</span>
// //       </h5>
// //     </div>

// //   </div>
// // </div>

// //           {/* RIGHT SIDE CART
// //           <div className="col-xl-5">
// //             <div className="flat-spacing flat-sidebar-checkout">

// //               <h5 className="title">Shopping Cart</h5>

// //               <div className="list-product">
// //                 {cartProducts.map((elm, i) => (
// //                   <div key={i} className="item-product">
// //                     <Link href={`/product-detail/${elm.id}`} className="img-product">
// //                       <Image
// //                         alt="img"
// //                         src={elm.imgSrc || "/images/no-image.png"}
// //                         width={600}
// //                         height={800}
// //                       />
// //                     </Link>

// //                     <div className="content-box">
// //                       <Link href={`/product-detail/${elm.id}`} className="name-product">
// //                         {elm.title}
// //                       </Link>

// //                       <div className="total-price">
// //                         {elm.quantity} x Rs {elm.price}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="bottom">
// //                 <h5 className="d-flex justify-content-between">
// //                   <span>Total</span>
// //                   <span>${totalPrice.toFixed(2)}</span>
// //                 </h5>
// //               </div>

// //             </div>
// //           </div> */}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



"use client";

import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Checkout() {
  const { cartProducts, totalPrice } = useContextElement();
  const { user } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState("razorpay");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
  });

  console.log("Cart Products:..............................", user);

  // Load user from context (FIXED)
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone_number || "",
        whatsapp: user.whatsapp_number || user.phone_number || "",
        address: "",
        city: "",
        pincode: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // PAYMENT HANDLER
  const handlePayment = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    // COD
    // if (paymentMethod === "cod") {
    //   alert("Order placed with Cash on Delivery");
    //   return;
    // }

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
                <input name="whatsapp" placeholder="WhatsApp Number" value={form.whatsapp} onChange={handleChange} />
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

  <label className={`payment-box ${paymentMethod === "upi" ? "active" : ""}`}>
    <input
      type="radio"
      value="upi"
      checked={paymentMethod === "upi"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>UPI</span>
  </label>

  <label className={`payment-box ${paymentMethod === "card" ? "active" : ""}`}>
    <input
      type="radio"
      value="card"
      checked={paymentMethod === "card"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>Card</span>
  </label>

  <label className={`payment-box ${paymentMethod === "netbanking" ? "active" : ""}`}>
    <input
      type="radio"
      value="netbanking"
      checked={paymentMethod === "netbanking"}
      onChange={(e) => setPaymentMethod(e.target.value)}
    />
    <span>Net Banking</span>
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



// "use client";

// import { useContextElement } from "@/context/Context";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import AddressModal from "@/components/otherpages/Address";

// export default function Checkout() {
//   const { cartProducts, totalPrice } = useContextElement();
//   const { user } = useAuth();

//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const [openModal, setOpenModal] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("razorpay");

//   // ✅ LOAD ADDRESSES
//   useEffect(() => {
//     if (!user) return;

//     fetch(`/api/addresses/${user.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setAddresses(data);

//         if (data.length > 0) {
//           setSelectedAddress(data[0]); // default
//         }
//       });
//   }, [user]);

//   // SAVE ADDRESS
//   const handleSaveAddress = async (form) => {
//     const res = await fetch("/api/address", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         ...form,
//         user_ID: user.id,
//       }),
//     });

//     const data = await res.json();

//     setAddresses([...addresses, data]);
//     setSelectedAddress(data);
//   };

//   // PLACE ORDER
//   const handlePayment = async () => {
//     if (!selectedAddress) {
//       alert("Please select address");
//       return;
//     }

//     const payload = {
//       user_ID: user.id,
//       address_ID: selectedAddress.address_ID,
//       items: cartProducts.map((item) => ({
//         product_ID: item.id,
//         price: item.price,
//         quantity: item.quantity,
//       })),
//       subtotal: totalPrice,
//       total_amount: totalPrice,
//       payment_method: paymentMethod,
//     };

//     const res = await fetch("/place-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Order Placed Successfully");

//       // OPTIONAL: clear cart
//       // await fetch(`/api/clear-cart/${user.id}`, { method: "DELETE" });
//     }
//   };

//   return (
//   <section className="bg-gray-50 min-h-screen py-10">
//     <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

//       {/* LEFT SECTION */}
//       <div className="lg:col-span-2 space-y-6">

//         {/* ADDRESS CARD */}
//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Shipping Address</h2>

//             <button
//               onClick={() => setOpenModal(true)}
//               className="text-sm text-blue-600 hover:underline"
//             >
//               + Add New
//             </button>
//           </div>

//           {addresses.length === 0 ? (
//             <div className="text-gray-500 text-sm">
//               No address found. Please add one.
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {addresses.map((addr) => (
//                 <div
//                   key={addr.address_ID}
//                   onClick={() => setSelectedAddress(addr)}
//                   className={`p-4 rounded-lg border cursor-pointer transition 
//                     ${
//                       selectedAddress?.address_ID === addr.address_ID
//                         ? "border-blue-500 bg-blue-50"
//                         : "border-gray-200 hover:border-gray-300"
//                     }`}
//                 >
//                   <div className="font-medium">{addr.name}</div>
//                   <div className="text-sm text-gray-600">
//                     {addr.address}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {addr.city}, {addr.state}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     📞 {addr.phone}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* PAYMENT CARD */}
//         <div className="bg-white rounded-xl shadow-sm p-6">
//           <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

//           <div className="space-y-3">
//             {["upi", "card", "netbanking"].map((method) => (
//               <label
//                 key={method}
//                 className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
//               >
//                 <input
//                   type="radio"
//                   value={method}
//                   checked={paymentMethod === method}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                 />
//                 <span className="capitalize">{method}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SECTION - ORDER SUMMARY */}
//       <div className="bg-white rounded-xl shadow-sm p-6 h-fit sticky top-10">

//         <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

//         <div className="space-y-4 max-h-72 overflow-y-auto">
//           {cartProducts.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-3 border-b pb-3"
//             >
//               <Image
//                 src={item.imgSrc}
//                 width={60}
//                 height={60}
//                 className="rounded-md"
//                 alt={item.title}
//               />

//               <div className="flex-1">
//                 <p className="text-sm font-medium">{item.title}</p>
//                 <p className="text-xs text-gray-500">
//                   Qty: {item.quantity}
//                 </p>
//               </div>

//               <div className="text-sm font-semibold">
//                 ₹{item.price}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="border-t mt-4 pt-4 space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{totalPrice}</span>
//           </div>

//           <div className="flex justify-between font-semibold text-lg">
//             <span>Total</span>
//             <span>₹{totalPrice}</span>
//           </div>
//         </div>

//         <button
//           onClick={handlePayment}
//           className="w-full mt-5 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>

//     {/* MODAL */}
//     <AddressModal
//       isOpen={openModal}
//       onClose={() => setOpenModal(false)}
//       onSave={handleSaveAddress}
//     />
//   </section>
// );
// }