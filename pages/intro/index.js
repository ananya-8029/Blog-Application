import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "orem Ipsum is simply dummy text of the printing a Ipsum has been the ",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title:
        "orem Ipsum is simply dummy text of the printing and typesettinand",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title:
        "orem Ipsum is simply dummy text of the printing and typesetting industry.",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h text ever since the 1500s,",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ,",
      desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.maincontainer}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>
              <div className="postImg">
                <img src={post.img}></img>
              </div>
              <div className="content">
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
              </div>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
