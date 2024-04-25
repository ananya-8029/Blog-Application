import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faI, faU } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Write = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formdata
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async () => {
    e.preventDefault();
    upload();
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.addpost}>
          <div className={styles.content}>
            <input
              className={styles.title}
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
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
                onChange={(event) => {
                  setDescription(event.target.value);
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
                <li className={styles.li}>Status:</li>
                <li className={styles.li}>Visibility:</li>
              </ul>
            </div>
            <input
              type="file"
              id={styles.file}
              name=""
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <label htmlFor="file">Upload Image</label>
            <div className={styles.btns}>
              <button className={styles.btn1}>Save as Draft</button>
              <button onClick={handleUpload} className={styles.btn2}>
                Upload
              </button>
            </div>
          </div>
          <div className={styles.menu2}>
            <h1>Category</h1>
            <div>
              <input
                type="radio"
                name="cat"
                value="art"
                id="art"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="art">Art</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="science"
                id="science"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="science">Science</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="technology"
                id="technology"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="cinema"
                id="cinema"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="design"
                id="design"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="design">Design</label>
            </div>
            <div>
              <input
                type="radio"
                name="cat"
                value="food"
                id="food"
                onChange={(e) => {
                  setCat(e.target.value);
                }}
              />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
