import React, { useEffect, useState, useId } from "react";
import styles from "./ImageGallery.module.css";
import ImageCarousal from "../ImageCarousal/ImageCarousal";

const ImageGallery = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const uniqueID = useId();

  const getKey = (title, currentImgIndex) => {
    return `${uniqueID}--${title}--${currentImgIndex}`;
  };

  useEffect(() => {
    const getImagesList = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;
        console.log(products);
        setIsLoading(false);
        setProductList(products);
      } catch (err) {
        console.log(err);
      }
    };
    getImagesList();
  }, []);
  if (isLoading) return <>Loading....</>;
  if (productList.length === 0) return null;
  return (
    <>
      <section className={styles.imagesList}>
        {productList.length > 0 &&
          productList.map(({ title, images }, index) => {
            const keyVal = getKey(title, index);
            return (
              <section key={keyVal} className={styles.carousal}>
                <ImageCarousal images={images} title={title} index={index} />
              </section>
            );
          })}
      </section>
    </>
  );
};

export default ImageGallery;
