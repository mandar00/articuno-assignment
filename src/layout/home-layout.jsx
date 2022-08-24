import { Button } from "@mui/material";
import React from "react";
import CartDetails from "../components/homePaga/cart-details";
import PaymentDelivery from "../components/homePaga/payment-delivery";
import ProceedPaymentBar from "../components/homePaga/proceed-payment-bar";
import ShippingAndPayments from "../components/homePaga/shipping-and-payments";
import "../styles/components/homepage/home-layout.css";
import { useSelector } from "react-redux";

const HomeLayout = (props) => {
  const {
    theme,
    inputs,
    paymentMethod,
    deliveryMethod,
    cartItems,
    handleApiRequest,
    apiResponse,
  } = props;
  const loading = useSelector((state) => state?.update?.loading);
  const success = useSelector((state) => state?.update?.success);
  const error = useSelector((state) => state?.update?.error);
  return (
    <>
      <div className="home-layout-main-container">
        <ShippingAndPayments theme={theme} inputs={inputs} />
        <PaymentDelivery
          theme={theme}
          paymentMethod={paymentMethod}
          deliveryMethod={deliveryMethod}
        />
        <CartDetails cartItems={cartItems} />
      </div>
      <div className="axios-call-container">
        <Button variant="contained" onClick={handleApiRequest}>
          fill up
        </Button>
        <div className="redux-states">
          <div>{`laoding :${loading.toString()}`}</div>
          <div>{`success :${success.toString()}`}</div>
          <div>{`error :${error.toString()}`}</div>
        </div>
        <div className="api-response-conatiner">
          {apiResponse.map((post, i) => {
            return (
              <div className="response-div" key={i}>
                <div>{post.userId}</div>
                <div> {post.title}</div>
              </div>
            );
          })}
        </div>
      </div>
      <ProceedPaymentBar theme={theme} />
    </>
  );
};
export default HomeLayout;
