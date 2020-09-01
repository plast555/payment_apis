import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Table = () => {
  const { cart } = useContext(GlobalContext);


  

  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">_id</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item, i) => (
          <tr key={i}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
