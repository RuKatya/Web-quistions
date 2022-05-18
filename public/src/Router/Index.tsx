import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index element={<Home />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
