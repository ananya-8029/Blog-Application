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

  var userDetails;
  var userName;

  if (typeof window !== "undefined"){
    userDetails = JSON.parse(localStorage.getItem("user"));
    userName = userDetails.user.userName;
  }

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
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img src={post?.IMAGE} />
            <div className={styles.user}>
              <img alt="Not Available" src="https://picsum.photos/400/400" />
              <div className={styles.userinfo}>
                <p className={styles.username}>{post?.USERNAME}</p>
                <p className={styles.date}>
                  Posted {moment(post?.DATE).fromNow()}
                </p>
                {userName === post?.USERNAME && (
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
              <h1>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
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
