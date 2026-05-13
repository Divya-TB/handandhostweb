"use client";

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


import {
  createContext,
  useContext,
} from "react";

const MessageContext =
  createContext();

export const MessageProvider = ({
  children,
}) => {

  const AddMessage = async (
    payload
  ) => {

    try {

      const response =
        await axios.post(
            `${API_URL}/api/messages`,
            payload
            );
      return response.data;

    } catch (error) {

      console.log(error);

      return {
        success: false,
      };
    }
  };

  return (

    <MessageContext.Provider
      value={{
        AddMessage,
      }}
    >

      {children}

    </MessageContext.Provider>
  );
};

export const useMessage = () =>
  useContext(MessageContext);