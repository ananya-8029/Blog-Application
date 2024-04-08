import React, { useState } from "react";
import styles from "./index.module.css";
import axios from "axios";

const Register = () => {
  const [intials, setInitials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInitials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "localhost:8800/api/auth/register",
        intials
      );
    } catch (error) {
      console.log(error)
    }
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
                requried
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
                requried
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

            <div className={styles.login}>
              <p>Have an account already?</p>
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className={styles.section2}></div>
      </div>
    </>
  );
};

export default Register;
