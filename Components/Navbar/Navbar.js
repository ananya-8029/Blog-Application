import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
