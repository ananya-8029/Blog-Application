import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || null
      : null
  );

  console.log("currentUser from contextAPI: ", currentUser)

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      );
      setCurrentUser(res.data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const logout = async (inputs) => {
    await axios.post("http://localhost:8800/api/auth/logout", inputs);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};