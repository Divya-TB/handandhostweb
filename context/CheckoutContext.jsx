

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const CheckoutContext = createContext();
export const useCheckout = () => useContext(CheckoutContext);

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CheckoutProvider({ children }) {
  
  const { user } = useAuth();
  const userId = user?.id;

  /* ---------------- STATE ---------------- */
  const [checkoutMode, setCheckoutMode] = useState("cart");
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------------- RESTORE (BUY NOW / CART) ---------------- */
  useEffect(() => {
  if (typeof window === "undefined") return;

  const saved = sessionStorage.getItem("checkout_session");

  if (saved) {
    try {
      const parsed = JSON.parse(saved);

      console.log('parsed.................................',parsed);

      setCheckoutMode(parsed.mode || "cart");
      setCheckoutItems(parsed.items || []);
    } catch (err) {
      console.log(err);
    }
  }
}, []);

  /* ---------------- SAVE STATE ---------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (checkoutItems?.length > 0) {
      sessionStorage.setItem(
        "checkout_session",
        JSON.stringify({
          mode: checkoutMode,
          items: checkoutItems,
        })
      );
    }
  }, [checkoutItems, checkoutMode]);

  /* ---------------- RESET ON USER CHANGE ---------------- */
  useEffect(() => {
    setCheckoutItems([]);
    setCheckoutMode("cart");
    setSelectedAddress(null);
    setAddresses([]);
    sessionStorage.removeItem("checkout_session");
  }, [userId]);

  /* ---------------- CLEAR ---------------- */
  const clearCheckout = () => {
    sessionStorage.removeItem("checkout_session");
    setCheckoutItems([]);
    setCheckoutMode("cart");
  };

  /* ---------------- ADDRESS API ---------------- */
  const getAddresses = async () => {
    if (!userId) return;

    try {
      const res = await fetch(`${API_URL}/api/address/list/${userId}`);
      const data = await res.json();

      if (data.success) {
        const list = data.data || [];
        setAddresses(list);

        const defaultAddr = list.find((a) => a.is_default === 1) || list[0];
        setSelectedAddress(defaultAddr?.address_ID || null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveAddress = async (payload) => {
    try {
      const res = await fetch(`${API_URL}/api/address/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        await getAddresses();
      }

      return data;
    } catch (err) {
      console.log(err);
    }
  };


  const updateAddress = async (
    addressId,
    payload
  ) => {

    try {

      const res = await fetch(
        `${API_URL}/api/address/update/${addressId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },

          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.success) {
        await getAddresses();
      }

      return data;

    } catch (err) {

      console.log(err);

    }
  };


  const deleteAddress = async (
    addressId
  ) => {

    try {

      const res = await fetch(
        `${API_URL}/api/address/delete/${addressId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
         setAddresses((prev) =>
            prev.filter(
              (item) =>
                item.address_ID !== addressId
            )
          );

        await getAddresses();
      }

      return data;

    } catch (err) {

      console.log(err);

    }
  };

  /* ---------------- BUY NOW (IMPORTANT FIX) ---------------- */
  const setBuyNow = (item) => {
    const buyNowItem = {
      product_ID: item.id || item.product_ID,
      title: item.title,
      price: item.price,
      discount_price: item.discount_price,
      quantity: item.quantity || 1,
      mainimage: item.mainimage,
    };

    setCheckoutMode("buynow");
    setCheckoutItems([buyNowItem]);

    sessionStorage.setItem(
      "checkout_session",
      JSON.stringify({
        mode: "buynow",
        items: [buyNowItem],
      })
    );
  };

  return (
    <CheckoutContext.Provider
      value={{
        checkoutMode,
        setCheckoutMode,

        checkoutItems,
        setCheckoutItems,

        selectedAddress,
        setSelectedAddress,

        addresses,
        setAddresses,

        getAddresses,
        saveAddress,
        updateAddress,
        deleteAddress,

        clearCheckout,
        setBuyNow,

        loading,
        setLoading,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}