"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // ADD THIS

  // check login once globally
  useEffect(() => {
    const user = localStorage.getItem("userId");

    if (user) {
      setIsLoggedIn(true);
      setUserId(Number(user)); // STORE USER ID
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
  }, []);

  // login
  const login = (id) => {
    localStorage.setItem("userId", id);
    setIsLoggedIn(true);
    setUserId(Number(id)); // UPDATE STATE
  };

  // logout
  const logout = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserId(null); // CLEAR USER
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,     // EXPORT THIS
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);