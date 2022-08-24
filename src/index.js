import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state/store"
import { Provider } from "react-redux";

store.subscribe(()=>{console.log(store.getState())})
ReactDOM.render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </>,
  document.getElementById("root")
);
