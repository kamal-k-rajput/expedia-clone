import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

import { StaysInputContextProvider } from "./Contexts/StaysInputContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StaysInputContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StaysInputContextProvider>
  </React.StrictMode>
);
