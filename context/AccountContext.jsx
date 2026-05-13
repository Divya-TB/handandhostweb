"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AccountContext = createContext();

import { useAuth } from "@/context/AuthContext";

export const AccountProvider = ({ children }) => {

  const [users, setUser] = useState(null);

  const { user } = useAuth();
  const userId = user?.id;

  const [loading, setLoading] = useState(true);

  const getAccountDetails = async () => {

    try {

      const token = localStorage.getItem("accessToken");

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await fetch(
        `/api/getaccount-details`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {

        setUser(data.data);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    getAccountDetails();

  }, []);

  return (
    <AccountContext.Provider
      value={{
        users,
        setUser,
        loading,
        getAccountDetails,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () =>
  useContext(AccountContext);