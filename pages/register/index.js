"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [initials, setInitials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInitials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        initials
      );
      console.log("Here's the response we got: ", response);
      router.push("/login");
    } catch (error) {
      setErr(error.response.data);
      console.log(error);
    }
    console.log(initials);
    setInitials({
      username: "",
      email: "",
      password: "",
    });
    console.log(initials);
  };

  return (
    <>
      <div className={styles.registerpage}>
        <div className={styles.section1}>
          <h1 className={styles.h1}>Register</h1>
          <form className={styles.form}>
            <div className={styles.inputfield}>
              <label>Username</label>
              <input
                name="username"
                className={styles.input}
                required
                type="text"
                placeholder="Enter your Username"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputfieldemail}>
              <label>Email</label>
              <input
                name="email"
                className={styles.input}
                required
                type="email"
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputfieldpassword}>
              <label>Password</label>
              <input
                name="password"
                className={styles.input}
                required
                type="password"
                placeholder="Enter your Password"
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSubmit} className={styles.btnreg}>
              REGISTER
            </button>
            {err && <p className="text-red-500">{err}</p>}
          </form>
          <div className={styles.login}>
              <p>Have an account already?</p>
              <button
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
              </button>
            </div>
        </div>
        <div className={styles.section2}></div>
      </div>
    </>
  );
};

export default Register;
