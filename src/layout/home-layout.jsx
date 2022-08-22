import React from "react";
import CartDetails from "../components/homePaga/cart-details";
import PaymentDelivery from "../components/homePaga/payment-delivery";
import ProceedPaymentBar from "../components/homePaga/proceed-payment-bar";
import ShippingAndPayments from "../components/homePaga/shipping-and-payments";
import "../styles/components/homepage/home-layout.css";

const HomeLayout = (props) => {
  const { theme, inputs, paymentMethod, deliveryMethod, cartItems } = props;
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
      <ProceedPaymentBar theme={theme} />
    </>
  );
};
export default HomeLayout;
