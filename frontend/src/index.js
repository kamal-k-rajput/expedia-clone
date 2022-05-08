import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { StaysInputContextProvider } from "./Contexts/StaysInputContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StaysInputContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StaysInputContextProvider>
  </React.StrictMode>
);
