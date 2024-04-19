import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  
  const posts = [
    {
      id: 1,
      title:
        "orem Ipsum is simply dummy text of the printing a Ipsum has been the ",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/400/400",
    },
    {
      id: 2,
      title:
        "orem Ipsum is simply dummy text of the printing and typesettinand",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/400/400",
    },
    {
      id: 3,
      title:
        "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h text ever since the 1500s,",
      img: "https://picsum.photos/400/400",
    },
    {
      id: 4,
      title:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ,",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/400/400",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.maincontainer}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>
              <div className={styles.postImg}>
                <img src={post.img}></img>
              </div>
              <div className={styles.content}>
                <div onClick={() => router.push("/singlepost")}>
                  <h1 className={styles.h1}>{post.title}</h1>
                </div>
                <p>{post.desc}</p>
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
