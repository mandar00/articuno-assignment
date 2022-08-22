import React from "react";
import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import HomeController from "./controllers/home-controller";
import Navbar from "./components/shared/navbar";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact={true} path="/articuno-assignment" element={<HomeController />} />
      </Routes>
    </div>
  );
}

export default App;
