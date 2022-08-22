import React from "react";
import HomeLayout from "../layout/home-layout";
import { createTheme } from "@mui/material/styles";
import paypalLogo from "../images/paypal.png";
import VisaLogo from "../images/visa.png";
import DiscoverLogo from "../images/discover.png";
import IdealLogo from "../images/Ideal.png";
import MaestroLogo from "../images/maestro.png";
import MasterCardLogo from "../images/master-card.png";
import inPostLogo from "../images/inpost.png";
import DpdLogo from "../images/dpd.png";
import DHLLogo from "../images/dhl.png";
import FedExLogo from "../images/fedx.png";
import WhiteTshirt from "../images/white-tshirt.png";
import BlackTshirt from "../images/black-tshirt.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#55efc4",
    },
    secondary: {
      main: "#2d3436",
    },
  },
});
const HomeController = () => {
  const inputs = [
    {
      type: "email",
      placeHolder: "Email",
    },
    {
      type: "text",
      placeHolder: "Address",
    },
    {
      type: "text",
      placeHolder: "Full Name",
    },
    {
      type: "text",
      placeHolder: "City",
    },
    {
      type: "text",
      placeHolder: "Last Name",
    },
    {
      type: "number",
      placeHolder: "Postal Code /ZIP",
    },
    {
      type: "tel",
      placeHolder: "Phone number",
    },
  ];
  const paymentMethod = [
    {
      src: paypalLogo,
      alt: "paypal",
    },
    {
      src: VisaLogo,
      alt: "visa",
    },
    {
      src: MasterCardLogo,
      alt: "master card",
    },
    {
      src: MaestroLogo,
      alt: "maestro",
    },
    {
      src: DiscoverLogo,
      alt: "discover",
    },
    {
      src: IdealLogo,
      alt: "ideal",
    },
  ];
  const deliveryMethod = [
    {
      src: inPostLogo,
      alt: "in post",
      amount: "20",
    },
    {
      src: DpdLogo,
      alt: "dpd",
      amount: "12",
    },
    {
      src: DHLLogo,
      alt: " dhl",
      amount: "15",
    },
    {
      src: FedExLogo,
      alt: "fed ex",
      amount: "10",
    },
  ];
  const cartItems = [
    {
      image: WhiteTshirt,
      name: "T-shirt Summer Vibes",
      id: "#245243",
      price: "89.99",
    },
    {
      image: BlackTshirt,
      name: "Black Slim Fit T-shirt",
      id: "#25648",
      price: "69.99",
    },
  ];
  return (
    <>
      <HomeLayout
        theme={theme}
        inputs={inputs}
        paymentMethod={paymentMethod}
        deliveryMethod={deliveryMethod}
        cartItems={cartItems}
      />
    </>
  );
};
export default HomeController;
