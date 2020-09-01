import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
import products from "./products.js";

// Initial State
const initialState = {
  products: products,
  count: 0,
  total: 0,
  cart: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addToCart = product => {
    console.log(product)
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        count: state.count,
        total: state.total,
        cart: state.cart,
        products: state.products,
        addToCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
