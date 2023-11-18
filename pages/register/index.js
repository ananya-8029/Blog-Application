import React from "react";
import styles from "./index.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.registerpage}>
        <div className={styles.section1}>
          <h1>Register</h1>
          <form>
            <input requried type="text" placeholder="Enter your Username" />
            <input requried type="email" placeholder="Enter your Email" />
            <input required type="password" placeholder="Enter your Password" />

            <button>REGISTER</button>

            <div>
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
