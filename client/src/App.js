import React, { useContext, useEffect } from "react";

import Cart from "./components/Cart";
import Card from "./components/Card";

import { GlobalContext } from "./context/GlobalState";

const App = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div className="container">
      <h2 className="mt-5">Products</h2>
      <div className="card-deck mt-5">
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
      <hr />
      <Cart />
    </div>
  );
};

export default App;
