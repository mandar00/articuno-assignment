import React from "react";
import "../../styles/components/homepage/proceed-payment-bar.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Button, Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const ProceedPaymentBar = (props) => {
  const { theme } = props;
  return (
    <>
      <div className="proceed-payment-bar-main-container">
        <ThemeProvider theme={theme}>
          <Button variant="text" color="secondary">
            <div className="back-btn-container">
              <ArrowBackOutlinedIcon />
              <span>Back</span>
            </div>
          </Button>
          <div className="proceed-payment-btn">
            <Stack direction="row" spacing={2}>
              <Button
                sx={{ 
                  width: "13vw", 
                  height: "3vw", 
                  borderRadius: "2vw" ,
                  fontSize:".7vw"
                }}
                variant="outlined"
                color="secondary"
              >
                CONTINUE SHOPPING
              </Button>
              <Button
                sx={{
                  width: "13vw",
                  height: "3vw",
                  borderRadius: "2vw",
                  color: "white",
                  fontSize:".7vw"
                }}
                variant="contained"
                color="primary"
              >
                PROCEED TO PAYMENT
              </Button>
            </Stack>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default ProceedPaymentBar;
