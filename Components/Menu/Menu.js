import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
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
      <h1 className={styles.header}>Other posts that you may like</h1>

      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.postImg}>
            <img src={post.img}></img>
          </div>
          <div className={styles.content}>
            <div onClick={() => router.push("/singlepost")}>
              <h1 className={styles.h1}>{post.title}</h1>
            </div>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
