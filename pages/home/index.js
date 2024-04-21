import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import axios from "axios";

const Home = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const category = router.query.cat
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts?cat=${category}`);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  });

  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "orem Ipsum is simply dummy text of the printing a Ipsum has been the ",
  //     desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     img: "https://picsum.photos/400/400",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "orem Ipsum is simply dummy text of the printing and typesettinand",
  //     desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     img: "https://picsum.photos/400/400",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "orem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h text ever since the 1500s,",
  //     img: "https://picsum.photos/400/400",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ,",
  //     desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //     img: "https://picsum.photos/400/400",
  //   },
  // ];
  return (
    <>
      <Navbar />
      <div className={styles.maincontainer}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div className={styles.post} key={post.UID}>
              <div className={styles.postImg}>
                <img src={post.IMAGE}></img>
              </div>
              <div className={styles.content}>
                <div onClick={() => router.push(`/singlepost?${post.UID}`)}>
                  <h1 className={styles.h1}>{post.TITLE}</h1>
                </div>
                <p>{post.DESCRIPTION}</p>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
