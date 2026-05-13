"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCheckout } from "@/context/CheckoutContext";
import { useAuth } from "@/context/AuthContext";
import { useContextElement } from "@/context/Context";

export default function Checkout() {
  const { user } = useAuth();
  const { cartProducts, totalPrice, placeOrder, openRazorpay } =
    useContextElement();

  const {
    checkoutMode,
    checkoutItems,
    addresses,
    selectedAddress,
    setSelectedAddress,
    saveAddress,
    getAddresses,
  } = useCheckout();
  console.log('checkoutmode............................', checkoutMode);
 const items = checkoutItems?.length
  ? checkoutItems
  : cartProducts;

  /* ---------------- LOAD ADDRESSES ---------------- */
  useEffect(() => {
    if (user) getAddresses();
  }, [user]);

  /* ---------------- ADDRESS FORM ---------------- */
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  useEffect(() => {
    if (user) {
      setForm((p) => ({
        ...p,
        fullName: user.name || "",
        phone: user.phone_number || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSaveAddress = async () => {
    const payload = {
      user_ID: user.id,
      fullname: form.fullName,
      mobile: form.phone,
      address: form.addressLine1,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
      country: form.country,
      is_default: addresses.length === 0 ? 1 : 0,
    };

    const res = await saveAddress(payload);

    if (res?.success) setShowForm(false);
    else alert(res?.message);
  };

  /* ---------------- PAYMENT ---------------- */
  const handlePayment = async () => {
    if (!selectedAddress) {
      alert("Select address");
      return;
    }

    const payload = {
      user_ID: user.id,
      address_ID: selectedAddress,
      items: items.map((i) => ({
        product_ID: i.product_ID || i.id || i.productid,
        quantity: i.quantity || 1,
      })),
      discount: 0,
      shipping_charge: 0,
    };

    const res = await placeOrder(payload);

    if (!res.success) {
      alert(res.message);
      return;
    }

    openRazorpay(res.payment);
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <section className="checkout-section py-5">
        <div className="container">
          <div className="row g-4">

            {/* LEFT */}
            <div className="col-lg-8">

              {/* ADDRESS */}
              <div className="checkout-card mb-4">
                <div className="d-flex justify-content-between mb-3">
                  <h4>Delivery Address</h4>

                  <button
                    className="btn btn-dark"
                    onClick={() => setShowForm(!showForm)}
                  >
                    + Add Address
                  </button>
                </div>

                {!user && (
                  <div className="alert alert-warning">
                    <Link href="/login">Login</Link>
                  </div>
                )}

                {/* FORM */}
                {showForm && (
                  <div className="address-form">
                    <div className="row">
                      {Object.keys(form).map((key) => (
                        <div className="col-md-6 mb-3" key={key}>
                          <input
                            name={key}
                            value={form[key]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder={key}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      className="btn btn-primary"
                      onClick={handleSaveAddress}
                    >
                      Save
                    </button>
                  </div>
                )}

                {/* ADDRESS LIST */}
                {addresses.map((a) => (
                  <div
                    key={a.address_ID}
                    className={`address-card ${
                      selectedAddress === a.address_ID ? "active" : ""
                    }`}
                    onClick={() => setSelectedAddress(a.address_ID)}
                  >
                    <input className= "checkout-radio" type="radio" checked={selectedAddress === a.address_ID} readOnly />
                    <div>
                      <h6>{a.fullname}</h6>
                      <p>
                        {a.address}, {a.city}, {a.state}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              <div className="order-summary sticky-top">
                <h4>Order Summary</h4>

                {items.map((item, i) => (
                  <div key={i} className="summary-item">
                    <Image
                      src={item.mainimage || "/no-image.png"}
                      width={60}
                      height={60}
                      alt="img"
                    />

                    <div>
                      <p>{item.title}</p>
                      <small>
                        {item.quantity} × ₹{item.discount_price}
                      </small>
                    </div>
                  </div>
                ))}

                <hr />

                <div className="d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>₹{totalPrice}</strong>
                </div>

                <button
                  className="place-order-btn"
                  onClick={handlePayment}
                >
                  Proceed To Pay
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}