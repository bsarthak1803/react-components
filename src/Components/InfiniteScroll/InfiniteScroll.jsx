import React, { useState, useCallback, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]); //state for products list
  const [hasMore, setHasMore] = useState(true); //flag to check if there is more data to be fetched
  const [page, setPage] = useState(0); //state to store current page number

  const lastProductRef = useRef(null); //stores the ref to the last div element which we would be observing

  const fetchMoreItems = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${50}&skip=${page * 50}`
      );
      const data = await response.json();
      if (data.products.length === 0) setHasMore(false);
      //if the data has no further products then set has more to false
      else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]); //add the new products to the existing products list
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const intersectionCallback =
    //callback function for IntersectionObserver interface
    (enteries) => {
      const firstEntry = enteries[0];
      if (firstEntry.isIntersecting && hasMore) fetchMoreItems();
    };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback);
    if (observer && lastProductRef.current)
      observer.observe(lastProductRef.current);

    return () => {
      //component will unmount
      //cleanup function
      if (observer) observer.disconnect();
    };
  }, [products]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ul>
        {products.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
        {hasMore && <div ref={lastProductRef}>Loading Items....!!</div>}
      </ul>
    </main>
  );
};

export default InfiniteScroll;
