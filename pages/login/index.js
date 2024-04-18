"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password }
      );
      setEmail("");
      setPassword("");
      console.log("Here's the response: " + response);
      router.push("/intro");
    } catch (error) {
      console.log(error);
      setErr(error.response.data);
    }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className=" section1 flex flex-[2] w-[50%] justify-center items-center flex-col">
          <h1 className="text-[3vmax] font-[900] my-[1vmax]">Login</h1>
          <form className="h-[40%] w-[80%] flex justify-center flex-col items-center gap-[1vmax]">
            <div className="inputfield flex text-[1.4vmax] justify-center items-center gap-[4.8vmax] h-[20%] font-medium">
              <label>Email</label>
              <input
                className="p-[1vmax] text-[1.2vmax] w-[54%]"
                name="email"
                required
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="inputfield flex text-[1.4vmax] justify-center items-center gap-[1.7vmax] h-[20%] font-medium">
              <label>Password</label>
              <input
                className="p-[1vmax] text-[1.2vmax] w-[56%]"
                name="password"
                required
                type="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="h-[15%] bg-blue-800 w-[20%] flex justify-center items-center text-white hover:scale-[0.9] font-medium transition duration-150"
            >
              LOGIN
            </button>
            {err && <p className="text-red-500 h-[1%]">{err}</p>}
            <div className="login flex gap-3 m-[1.2vmax]">
              <p className="hover:text-purple-700 cursor-pointer ">
                Don't have an account?
              </p>
              <button
                onClick={() => {
                  router.push("/register");
                }}
                className="transition font-medium duration-[0.3s] hover:scale-[1.1]"
              >
                Create one!
              </button>
            </div>
          </form>
        </div>
        <div className="section2 flex flex-2 h-full w-[50%]"></div>
      </div>
    </>
  );
};

export default Login;
