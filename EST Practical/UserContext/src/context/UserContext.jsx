import React, { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const userData = {
    username: "Aditya",
    isLoggedIn: false,
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};