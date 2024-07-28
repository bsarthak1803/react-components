import React, { useState, useEffect } from "react";
import styles from "./SearchAutoComplete.module.css";

const SearchAutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  //   const [userInput, setUserInput] = useState("");

  const onChangeHandler = (e) => {
    const input = e.target.value;
    // setUserInput(input);
    if (!input) setSuggestions([]);
    else {
      let productList = products;
      let suggestionList = productList.filter((product) =>
        product.title.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(suggestionList);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const products = data.products;
        setProducts(products);
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
        ></input>
      </section>
      <section className={styles.suggestionList}>
        <ul>
          {suggestions.length > 0
            ? suggestions.map((suggestion) => {
                return <li key={suggestion.id}>{suggestion.title}</li>;
              })
            : null}
        </ul>
      </section>
    </main>
  );
};

export default SearchAutoComplete;
