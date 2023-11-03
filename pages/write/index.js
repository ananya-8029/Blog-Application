import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faI, faU } from "@fortawesome/free-solid-svg-icons";

const Write = () => {
  const [description, setDescription] = useState("");
  console.log(description)
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.addpost}>
          <div className={styles.content}>
            <input className={styles.title} type="text" placeholder="Title" />
            <div className={styles.text}>
              <div className={styles.options}>
                <FontAwesomeIcon className={styles.option} icon={faB} />
                <FontAwesomeIcon className={styles.option} icon={faI} />
                <FontAwesomeIcon className={styles.option} icon={faU} />
              </div>
              <textarea
                className={styles.desc}
                type="text"
                placeholder="Suggest your opinions"
                value={description}
                onChange={(event)=>{
                  setDescription(event.target.value)
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menu1}>
            <h1 className={styles.h1}>Publish</h1>
            <div>
              <ul>
                <li>Status</li>
                <li>Visibility</li>
              </ul>
            </div>
          </div>
          <div className={styles.menu2}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
