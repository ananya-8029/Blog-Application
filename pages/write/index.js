import React, { useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faI, faU } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";

const Write = () => {
  const router = useRouter();

  console.log(router.query)
  const statePost = router.query.post ? JSON.parse(router.query.post) : null;
  const [title, setTitle] = useState(statePost?.TITLE || "");
  const [description, setDescription] = useState(statePost?.DESCRIPTION || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(statePost?.cat || "");

  const upload = async () => {
    try {
      const formdata = new FormData();
      formdata.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload",
        formdata
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const imgeUrl = upload();
    try {
      statePost
        ? await axios.put(`http://localhost:8800/api/posts/${postId}`, {
            title,
            description,
            cat,
            img: file ? imgeUrl : "",
          })
        : await axios.post(`http://localhost:8800/api/posts/`, {
            title,
            description,
            cat,
            img: file ? imgeUrl : "",
            date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
          });
    } catch (error) {}
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
              value={title}
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
            <label htmlFor="file">Upload Image</label>
            <input
              type="file"
              id="file"
              className="hidden"
              name=""
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
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
                checked={cat == "art"}
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
                checked={cat == "science"}
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
                checked={cat == "technology"}
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
                checked={cat == "cinema"}
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
                checked={cat == "design"}
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
                checked={cat == "food"}
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
