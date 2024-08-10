import React, { useState } from "react";
import styles from "./ImageCarousal.module.css";

const ImageCarousal = ({ images, title, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0); //by default display the first image

  const onClickHandler = (e, type) => {
    //handler to increment/decrement carousal
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
  return (
    <>
      <img
        src={images[currentImgIndex]}
        alt={title}
        loading={index > 2 ? "lazy" : null}
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
