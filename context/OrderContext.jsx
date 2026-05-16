"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useAuth } from "@/context/AuthContext";

const OrderContext = createContext();

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export const useOrderContext = () =>
  useContext(OrderContext);

export default function OrderProvider({
  children,
}) {

  const { user } = useAuth();

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [orderDetails, setOrderDetails] =
    useState(null);

  // =========================================
  // GET TOKEN
  // =========================================

  const getToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken");
    }

    return null;
  };

  // =========================================
  // GET ORDERS
  // =========================================

  const getOrders = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("accessToken");

      console.log('token........................', token);

      const response = await fetch(
        `${API_URL}/api/orders/get-orders`,
        {
          method: "GET",

           headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }
      );

      const data =
        await response.json();

      if (data.success) {

        setOrders(data.data || []);

      } else {

        setOrders([]);

      }

    } catch (error) {

      console.log(
        "Get Orders Error",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  // =========================================
  // GET SINGLE ORDER
  // =========================================

  const getSingleOrder = async (
    orderID
  ) => {

    try {

      setLoading(true);

      const token = getToken();

      const response = await fetch(
        `${API_URL}/api/orders/get-single-order/${orderID}`,
        {
          method: "GET",

           headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
      );

      const data =
        await response.json();

      if (data.success) {

        setOrderDetails(data.data);

      } else {

        setOrderDetails(null);

      }

    } catch (error) {

      console.log(
        "Get Single Order Error",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  // =========================================
  // CANCEL ORDER
  // =========================================

  const cancelOrder = async (
    orderID
  ) => {

    try {

      const token = getToken();

      const response = await fetch(
        `${API_URL}/api/orders/cancel-order/${orderID}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      const data =
        await response.json();

      if (data.success) {

        await getOrders();

      }

      return data;

    } catch (error) {

      console.log(
        "Cancel Order Error",
        error
      );
    }
  };

  // =========================================
  // AUTO FETCH ORDERS
  // =========================================

  useEffect(() => {

    if (user) {

      getOrders();

    } else {

      setOrders([]);

    }

  }, [user]);

  // =========================================
  // CONTEXT VALUES
  // =========================================

  const values = {

    orders,
    setOrders,

    loading,
    setLoading,

    orderDetails,
    setOrderDetails,

    getOrders,
    getSingleOrder,

    cancelOrder,
  };

  return (
    <OrderContext.Provider
      value={values}
    >
      {children}
    </OrderContext.Provider>
  );
}