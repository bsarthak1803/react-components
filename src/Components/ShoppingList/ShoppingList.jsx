import React, { useState, useEffect } from "react";
import styles from "./ShoppingList.module.css";

const debounce = (cb, delay) => {
  let timerID;
  return function (...args) {
    let context = this;
    if (timerID) clearTimeout(timerID);

    timerID = setTimeout(() => {
      cb.apply(context, [...args]);
    }, delay);
  };
};

const ShoppingList = () => {
  //state variables
  const [suggestions, setSuggestions] = useState([]);
  const [cart, setCart] = useState([]); //array of obj -- items name, isChecked flag for if checked or not
  const [searchQuery, setSearchQuery] = useState("");

  const debounceInput = debounce(setSearchQuery, 500); //debounced input

  const onChangeHandler = (e) => {
    debounceInput(e.target.value);
  };

  const onAddItem = (e) => {
    const item = e.target.innerText;
    let obj = {
      itemName: item,
      isChecked: false,
    };
    setCart([...cart, obj]);
  };

  const onRemoveItem = (item) => {
    let cartList = cart;
    cartList = cartList.filter(
      (cartItem) => cartItem.itemName !== item.itemName
    );
    setCart(cartList);
  };

  const onItemCheckHandler = (item) => {
    let shoppingCart = cart;
    shoppingCart.forEach((cartItem) => {
      if (cartItem.itemName === item.itemName)
        cartItem.isChecked = !cartItem.isChecked;
    });
    setCart(shoppingCart);
  };

  const fetchItems = async () => {
    //always keep the fetch call outside useEffect and call it from inside useEffect
    try {
      const response = await fetch(
        `https://api.frontendeval.com/fake/food/${searchQuery}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 1) fetchItems();
  }, [searchQuery]);

  return (
    <main>
      <section className={styles.mainContainer}>
        <input
          type="text"
          placeholder="search items"
          onChange={onChangeHandler}
        ></input>
        {suggestions.length > 0 && (
          <section className={styles.suggestionList}>
            <ul onClick={onAddItem}>
              {suggestions.map((suggestion, index) => {
                return <li key={index}>{suggestion}</li>;
              })}
            </ul>
          </section>
        )}
        {cart.length > 0 && (
          <section className={styles.listDisplay}>
            {cart.map((cartItem, index) => {
              return (
                <section className={styles.listItem} key={index}>
                  <input
                    type="checkbox"
                    isChecked={cartItem.isChecked}
                    onChange={() => onItemCheckHandler(cartItem)}
                  ></input>
                  <h4>{cartItem.itemName}</h4>
                  <button onClick={() => onRemoveItem(cartItem)}>X</button>
                </section>
              );
            })}
          </section>
        )}
      </section>
    </main>
  );
};

export default ShoppingList;
