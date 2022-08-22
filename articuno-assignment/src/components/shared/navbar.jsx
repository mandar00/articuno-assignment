import React from "react";
import "../../styles/components/shared/navbar.css";
import logo from "../../images/logo.png";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2d3436",
    },
  },
});
const Navbar = () => {
  return (
    <>
      <div className="navbar-main-container">
        <div className="navbar-logo-container">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="e-shop-container">
            <span style={{ color: "#e67e22" }}>E-</span>
            Shop
          </div>
        </div>
        <div className="navbar-gender-selection">
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="text">
              Men
            </Button>
            <Button color="primary" variant="text">
              Women
            </Button>
            <Button color="primary" variant="text">
              Kids
            </Button>
          </ThemeProvider>
        </div>
        <div className="navbar-icon-container">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
export default Navbar;
