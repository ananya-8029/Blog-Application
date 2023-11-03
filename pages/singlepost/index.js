import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Singlepost = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.content}>
          <img src="https://picsum.photos/400/400"></img>
          <div className={styles.user}>
            <img src="https://picsum.photos/400/400"></img>
            <div className={styles.userinfo}>
              <p className={styles.username}>User Name</p>
              <p className={styles.date}>Posted 2 days ago</p>
              <div className={styles.icons}>
                <div
                  onClick={() => router.push("/write")}
                  className={styles.edit}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <div className={styles.delete}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postcontent}>
            <h1>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className={styles.postsmenu}></div>
      </div>
      <Footer />
    </>
  );
};

export default Singlepost;
