import React from "react";

const CartCard = (props) => {
  const { image, name, id, price } = props;

  return (
    <>
      <div className="your-cart-card">
        <img className="cart-card-img" src={image} alt="product img" />
        <div className="card-details-text">
          <p className="card-primary">{name}</p>
          <span className="card-secondary">{id}</span>
        </div>
        <div className="card-price">{price}</div>
      </div>
    </>
  );
};
export default CartCard;
