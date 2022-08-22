import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import "../../styles/components/homepage/payment-delivery.css";

const PaymentDelivery = (props) => {
  const { theme, paymentMethod, deliveryMethod } = props;
  return (
    <>
      <div className="payment-delivery-main-container">
        <div className="payment-method">
          <div className="payment-method-title">Payment Method</div>
          <div className="payment-method-btn-container">
            <ThemeProvider theme={theme}>
              {paymentMethod.map((method) => {
                return (
                  <Button
                    sx={{ borderRadius: "1vw" }}
                    variant="outlined"
                    color="secondary"
                  >
                    <img
                      style={{
                        width: "3.5vw",
                        height: "1.5vw",
                      }}
                      src={method.src}
                      alt={method.alt}
                    />
                  </Button>
                );
              })}
            </ThemeProvider>
          </div>
        </div>
        <div className="delivery-method">
          <div className="payment-method-title">Delivery Method</div>
          <div className="delivery-method-btn-container">
            <ThemeProvider theme={theme}>
              {deliveryMethod.map((method) => {
                return (
                  <Button
                    sx={{ borderRadius: "1vw", fontSize: "1vw" }}
                    variant="outlined"
                    color="secondary"
                  >
                    <img
                      style={{
                        width: "3.5vw",
                        height: "1.5vw",
                        marginRight: ".8vw",
                      }}
                      src={method.src}
                      alt={method.alt}
                    />
                    {`$${method.amount}.00`}
                  </Button>
                );
              })}
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDelivery;
