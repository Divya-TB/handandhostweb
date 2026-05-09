"use client";

import { useState } from "react";

export default function AddressModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Fill required fields");
      return;
    }

    onSave(form);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">

        <h3>Add Address</h3>

        <div className="grid">
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
          <input name="address" placeholder="Full Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="state" placeholder="State" onChange={handleChange} />
          <input name="country" placeholder="Country" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        </div>

        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Save Address</button>
        </div>

      </div>
    </div>
  );
}