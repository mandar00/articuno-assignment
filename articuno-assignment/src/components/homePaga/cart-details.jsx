import React from "react";
import "../../styles/components/homepage/cart-details.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CartCard from "./cart-card";

const CartDetails = (props) => {
  const { cartItems } = props;
  return (
    <>
      <div className="cart-details-main-container">
        <div className="cart-details-truck-icn-container">
          <div className="outlined-cart d-flex-center">
            <ShoppingCartOutlinedIcon sx={{ fontSize: "1vw" }} />
          </div>
          <div className="divider"></div>
          <div className="contained-truck-icn  d-flex-center">
            <LocalShippingOutlinedIcon
              sx={{ fontSize: "1vw", color: "white" }}
            />
          </div>
        </div>
        <div className="your-cart-container">
          <div className="your-cart-title">Your cart</div>
          {cartItems.map((item) => {
            return (
              <CartCard
                image={item.image}
                name={item.name}
                id={item.id}
                price={item.price}
              />
            );
          })}
          <div className="total-cost-container">
            <span style={{ fontWeight: "100" }}>Total Cost</span>
            <span style={{ fontWeight: "500" }}>159.98</span>
          </div>
          <div className="free-shipping-container">
            <LocalShippingOutlinedIcon
              sx={{ fontSize: "1vw", color: "black" }}
            />
            <div className="free-shipping-text">
              You are <span style={{ fontWeight: "500" }}>$30.02</span> away
              from free shipping!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartDetails;
