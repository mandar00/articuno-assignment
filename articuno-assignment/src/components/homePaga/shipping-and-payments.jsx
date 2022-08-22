import React from "react";
import "../../styles/components/homepage/shipping-and-payments.css";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { GoogleLogin } from "../../helpers/google-login";

const ShippingAndPayments = (props) => {
  const { theme, inputs } = props;

  return (
    <>
      <div className="shipping-and-payments-main-container">
        <div className="title-container">Shipping and Payments</div>
        <div className="login-btn-container">
          <Stack direction="row" spacing={2}>
            <ThemeProvider theme={theme}>
              <Chip
                color="primary"
                sx={{
                  width: "8vw",
                  height: "3vw",
                  borderRadius: "4vw",
                  fontSize: ".8vw",
                }}
                label="LOG-IN"
                onClick={GoogleLogin}
              />
              <Chip
                color="secondary"
                sx={{
                  width: "8vw",
                  height: "3vw",
                  borderRadius: "4vw",
                  fontSize: ".8vw",
                }}
                label="SIGN-UP"
                variant="outlined"
                onClick={() => {}}
              />
            </ThemeProvider>
          </Stack>
        </div>
        <div className="shipping-info-container">
          <div className="shipping-info-title">Shipping information</div>
          <div className="shipping-info-inputs-container">
            {inputs.map((input) => {
              return (
                <input
                  type={input.type}
                  placeholder={input.placeHolder}
                  className="shipping-input-feild"
                ></input>
              );
            })}
            <select
              style={{ paddingRight: "2vw" }}
              name="cars"
              id="cars"
              className="shipping-input-feild"
            >
              <option value="Pollad">Pollad</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShippingAndPayments;
