import React, { useState, useEffect, useRef } from "react";
import styles from "./SearchAutoComplete.module.css";

const SearchAutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  let inputRef = useRef(null);

  const onChangeHandler = () => {
    const input = inputRef.current.value;
    if (!input) setSuggestions(products);
    else {
      let productList = products;
      let suggestionList = productList.filter((product) =>
        product.title.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(suggestionList);
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;
        setProducts(products);
        setSuggestions(products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.inputBox}>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          name="search box"
          placeholder="Search Products"
          onChange={onChangeHandler}
          ref={inputRef}
        ></input>
      </section>
      <section className={styles.suggestionList}>
        <ul>
          {suggestions.length > 0 ? (
            suggestions.map(({ id, title }) => {
              return <li key={id}>{title}</li>;
            })
          ) : (
            <h4>No Suggestions!!</h4>
          )}
        </ul>
      </section>
    </main>
  );
};

export default SearchAutoComplete;
