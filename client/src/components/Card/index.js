import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Card = ({ product }) => {
  const { addToCart } = useContext(GlobalContext)
  const { name, price, description, image } = product;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="row">
          <div className="col d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-info"
              onClick={e => addToCart({
                name,
                price
              })}
            >
              Add to cart
            </button>
            <h4>${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
