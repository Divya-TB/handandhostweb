"use client";
import Script from "next/script";
import { useContextElement } from "@/context/Context";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Checkout() {

  const {
    cartProducts,
    totalPrice,
    addresses,
    selectedAddress,
    setSelectedAddress,
    saveAddress,
    placeOrder,
    openRazorpay,
    } = useContextElement();


    console.log("Cart Products:..................................", cartProducts);

 
  const { user } = useAuth();

  // const [paymentMethod, setPaymentMethod] = useState("upi");

  const [showAddressForm, setShowAddressForm] = useState(false);

  const [addressForm, setAddressForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    // addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });


  useEffect(() => {
    if (user) {
      setAddressForm((prev) => ({
        ...prev,
        fullName: user.name || "",
        phone: user.phone_number || "",
      }));
    }
  }, [user]);

  const handleAddressChange = (e) => {
    setAddressForm({
      ...addressForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveAddress = async () => {
  const payload = {
    user_ID: user.id,
    fullname: addressForm.fullName,
    mobile: addressForm.phone,
    address:
      addressForm.addressLine1,
    //   " " +
    //   addressForm.addressLine2,
    city: addressForm.city,
    state: addressForm.state,
    pincode: addressForm.pincode,
    country: addressForm.country,
    is_default: addresses.length === 0 ? 1 : 0,
  };

  const res = await saveAddress(payload);

  if (res?.success) {
    setShowAddressForm(false);
    // await getAddresses(); // refresh address list after adding new address
  } else {
    alert(res?.message || "Failed to save address");
  }
};

// const handlePayment = async () => {
//   if (!selectedAddress) {
//     alert("Please select address");
//     return;
//   }

//   const payload = {
//     userId: user.id,
//     addressId: selectedAddress,
//     paymentMethod: paymentMethod, // upi | card | netbanking
//     items: cartProducts.map((item) => ({
//       productId: item.product_ID,
//       quantity: item.quantity,
//       price: item.discount_price,
//     })),
//     totalAmount: totalPrice,
//   };

//   const res = await placeOrder(payload);

//   if (res?.success) {
//     // redirect to payment gateway OR success page
//     window.location.href = res.paymentUrl; 
//   } else {
//     alert(res.message || "Order failed");
//   }
// };


const handlePayment = async () => {
  if (!selectedAddress) {
    alert("Please select address");
    return;
  }

  const payload = {
    user_ID: user.id,
    address_ID: selectedAddress,
    items: cartProducts.map((item) => ({
      product_ID:
        item.product_ID ||
        item.productId ||
        item.id,
      quantity: item.quantity,
    })),
    discount: 0,
    shipping_charge: 0,
  };

  console.log("Order Payload:", payload);

  const res = await placeOrder(payload);

  if (!res.success) {
    alert(res.message || "Order failed");
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

          {/* LEFT SIDE */}
          <div className="col-lg-8">

            {/* ADDRESS SECTION */}
            <div className="checkout-card mb-4">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Delivery Address</h4>

                <button
                  className="btn btn-dark"
                  onClick={() => setShowAddressForm(!showAddressForm)}
                >
                  + Add New Address
                </button>
              </div>

              {!user && (
                <div className="alert alert-warning">
                  Already have an account? <Link href="/login">Login</Link>
                </div>
              )}

              {/* ADDRESS FORM */}
              {showAddressForm && (
                <div className="address-form">

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="form-control"
                        value={addressForm.fullName}
                        onChange={handleAddressChange}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="form-control"
                        value={addressForm.phone}
                        onChange={handleAddressChange}
                      />
                    </div>

                    {/* <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="whatsapp_number"
                        placeholder="WhatsApp Number"
                        className="form-control"
                        value={addressForm.whatsapp_number}
                        onChange={handleAddressChange}
                      />
                    </div> */}

                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="addressLine1"
                        placeholder="House No, Building Name"
                        className="form-control"
                        value={addressForm.addressLine1}
                        onChange={handleAddressChange}
                      />
                    </div>

                    {/* <div className="col-12 mb-3">
                      <input
                        type="text"
                        name="addressLine2"
                        placeholder="Road name, Area, Colony"
                        className="form-control"
                        value={addressForm.addressLine2}
                        onChange={handleAddressChange}
                      />
                    </div> */}

                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="form-control"
                        value={addressForm.city}
                        onChange={handleAddressChange}
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="form-control"
                        value={addressForm.state}
                        onChange={handleAddressChange}
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="form-control"
                        value={addressForm.country}
                        onChange={handleAddressChange}
                      />
                    </div>

                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        className="form-control"
                        value={addressForm.pincode}
                        onChange={handleAddressChange}
                      />
                    </div>

                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={handleSaveAddress}
                  >
                    Save Address
                  </button>

                </div>
              )}

              {/* SAVED ADDRESSES */}
              <div className="saved-addresses mt-4">

                {addresses.map((address) => (
                  <div
                    key={address.address_ID}
                    className={`address-card ${
                      selectedAddress === address.address_ID ? "active" : ""
                    }`}
                    onClick={() => setSelectedAddress(address.address_ID)}
                  >
                    <input
                      type="radio"
                      className ="form-check-input-checkout"
                      checked={selectedAddress === address.address_ID}
                      readOnly
                    />

                    <div>
                      <h6>{address.fullname}</h6>

                      <p>
                        {address.address},
                        {address.city},{" "}
                        {address.state} - {address.pincode}
                      </p>

                      <span>{address.mobile}</span>
                    </div>
                  </div>
                ))}

              </div>

            </div>

            {/* PAYMENT SECTION */}
            {/* <div className="checkout-card">

              <h4 className="mb-3">Payment Method</h4>

              <div className="payment-options">

                {["upi", "card", "netbanking"].map((method) => (
                  <label
                    key={method}
                    className={`payment-box ${
                      paymentMethod === method ? "active" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />

                    <span>{method.toUpperCase()}</span>
                  </label>
                ))}

              </div>

            </div> */}

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">

            <div className="order-summary sticky-top">

              <h4 className="mb-4">Order Summary</h4>
              

              {cartProducts?.map((item, i) => (
                <div key={i} className="summary-item">

                  <Image
                    src={item.mainimage || "/images/no-image.png"}
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

              <div className="d-flex justify-content-between mb-3">
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