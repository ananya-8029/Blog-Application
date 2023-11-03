import React from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>lOGO.</div>
        <div className={styles.links}>
          <button>
            <h2>Art</h2>
          </button>

          <button>
            <h2>Science</h2>
          </button>

          <button>
            <h2>Technology</h2>
          </button>

          <button>
            <h2>Entertainment</h2>
          </button>

          <button>
            <h2>Design</h2>
          </button>

          <button>
            <h2>Food</h2>
          </button>

          <div className={styles.others}>
            <span className={styles.span}>User Name.</span>
            <button className={styles.logout}>Logout</button>
            <button onClick={() => router.push("/write")} className={styles.write}>WRITE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
