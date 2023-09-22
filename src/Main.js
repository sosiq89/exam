import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./top/TopMenu";
import MiddleMenu from "./middle/MiddleMenu";
import Purchase from "./top/Purchase";
import Material from "./top/Material";

const Main = () => {
  return (
    <div id="MainDiv">
      <BrowserRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<MiddleMenu />}></Route>
          <Route path="/logo" element={<MiddleMenu />}></Route>
          <Route path="/purchase/*" element={<Purchase />}></Route>
          <Route path="/material" element={<Material />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
