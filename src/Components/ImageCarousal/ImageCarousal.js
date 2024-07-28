import React, { useState } from "react";
import styles from "./ImageCarousal.module.css";

const ImageCarousal = ({ images, title, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const onClickHandler = (e, type) => {
    switch (type) {
      case "prev":
        setCurrentImgIndex((prev) => {
          if (prev === 0) return images.length - 1;
          return prev - 1;
        });
        break;

      case "next":
        setCurrentImgIndex((next) => {
          if (next === images.length - 1) return 0;
          return next + 1;
        });
        break;

      default:
        break;
    }
  };

  console.log("currentImgIndex", currentImgIndex);
  return (
    <>
      <img
        src={images[currentImgIndex]}
        alt={title}
        loading={index > 2 && "lazy"}
        height={400}
        width={400}
      ></img>
      <aside>
        <button
          className={styles.prevBtn}
          onClick={(e) => onClickHandler(e, "prev")}
        ></button>
        <button
          className={styles.nextBtn}
          onClick={(e) => onClickHandler(e, "next")}
        ></button>
      </aside>
    </>
  );
};

export default ImageCarousal;
