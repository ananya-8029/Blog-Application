import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children, serverUser }) => {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || serverUser.user
      : serverUser.user
  );
  const [intialServerUser, setInitialServerUser] = useState(serverUser);

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
    // console.log("inputs are:",inputs)
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    setInitialServerUser(serverUser);
  }, [currentUser, serverUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, intialServerUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
