import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children, serverUser }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [initialServerUser, setInitialServerUser] = useState(serverUser);

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        inputs
      );
      if (typeof window !== "undefined")
        localStorage.setItem("user", JSON.stringify(res.data));

      setCurrentUser(res.data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("user");
    await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    if (initialServerUser) {
      setCurrentUser(initialServerUser);
      localStorage.setItem("user", JSON.stringify(initialServerUser));
    }
  }, [initialServerUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, initialServerUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
