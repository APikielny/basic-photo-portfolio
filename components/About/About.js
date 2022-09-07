import React from "react";
import Image from "next/image";
import styles from "../../styles/About.module.css";

// import profilePic from "../../public/about/about_pic.jpeg";
import meAction1 from "../../public/about/valtournencheBackflip.jpeg";
import meAction2 from "../../public/about/craterLakeBackflip.jpg";
import meAction3 from "../../public/about/adamRopeCoil.jpg";


export default function About() {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <div className={styles.imageWrapper}>
          {/* <Image
            src={profilePic}
            alt="Personal of myself"
            // Change this to adjust for the image size
            width={1920}
            height={2560}
            layout="responsive"
            className={styles.photo}
          /> */}
          {/* <Image
            src={meAction1}
            alt="Personal of myself"
            // Change this to adjust for the image size
            width={2560}
            height={1920}
            layout="responsive"
            className={styles.photo}
          />
          <Image
            src={meAction2}
            alt="Personal of myself"
            // Change this to adjust for the image size
            width={2560}
            height={1920}
            layout="responsive"
            className={styles.photo}
          /> */}
          <Image
            src={meAction3}
            alt="Personal of myself"
            // Change this to adjust for the image size
            width={1920}
            height={2560}
            layout="responsive"
            className={styles.photo}
          />
        </div>
        <p className={styles.text}>
          Hey I'm Adam!
          <br />
          <br />
          This website was kindly built by my talented friend Ivan (add link)
        </p>
      </div>
    </div>
  );
}
