import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CustomMenu from "./components/CustomMenu/index.tsx";
import RcMenu from "./components/rcMenu/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomMenu />
    <RcMenu />
  </React.StrictMode>
);
