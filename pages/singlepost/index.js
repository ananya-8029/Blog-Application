"use client";
import React, { useState, useEffect, useContext } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Menu from "@/Components/Menu/Menu";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "@/Context/authContext";

const Singlepost = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);

  const { currentUser, setCurrentUser, initialServerUser } =
    useContext(AuthContext);

  // console.log(currentUser);
  // console.log(post)

  // var userDetails;
  // var userName;

  // if (typeof window !== "undefined") {
  //   userDetails = JSON.parse(localStorage.getItem("user"));
  //   userName = userDetails.user.userName;
  // }

  const postId = router.asPath.split("?")[1];
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const token = document.cookie.split("=")[1];
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
        headers: {
          Authorization: token,
        },
      });
      router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  if (!post || !currentUser) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        Loading
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src={post[0].IMAGE} />
            <div className={styles.user}>
              <img alt="Not Available" src={post[0].USERIMAGE} />
              <div className={styles.userinfo}>
                <p className={styles.username}>{post[0].USERNAME}</p>
                <p className={styles.date}>
                  Posted {moment(post[0].DATE).fromNow()}
                </p>
                {currentUser.userName === post[0].USERNAME && (
                  <div className={styles.icons}>
                    <button
                      onClick={() => router.push("/write")}
                      className={styles.edit}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className={styles.delete}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.postcontent}>
              <h1>{post[0].TITLE}</h1>
              <p>{post[0].DESCRIPTION}</p>
            </div>
          </div>
        </div>
        <div className={styles.postsmenu}>
          <Menu />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Singlepost;
