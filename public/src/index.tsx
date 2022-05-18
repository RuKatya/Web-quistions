import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./Router/Index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Index />
  </React.StrictMode>
);
