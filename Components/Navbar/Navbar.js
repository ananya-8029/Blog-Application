"use client";
import React, { useContext, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { AuthContext } from "@/Context/authContext";

const Navbar = () => {
  const router = useRouter();
  const { currentUser, logout, setCurrentUser, intialServerUser } =
    useContext(AuthContext);

  useEffect(() => {
    setCurrentUser(intialServerUser.user);
  }, [currentUser]);

  // console.log(currentUser);
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
            <span className={styles.span}>
              {currentUser ? currentUser.userName : null}
            </span>
            <button onClick={logout} className={styles.logout}>
              Logout
            </button>
            {/* {currentUser ? (
              <button onClick={logout} className={styles.logout}>
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className={styles.logout}
              >
                Login
              </button>
            )} */}
            <button
              onClick={() => router.push("/write")}
              className={styles.write}
            >
              WRITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
