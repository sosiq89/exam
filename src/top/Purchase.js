import "./purchase.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CompanyNew from "./purchase/CompanyNew";
import CompanyEdit from "./purchase/CompanyEdit";
import CompanyList from "./purchase/CompanyList";
import Order from "./purchase/Order";

const Purchase = () => {
  let navigate = useNavigate();
  let urlPath = (e) => {
    let urlPathName = "/purchase/";
    urlPathName += e.target.id;
    navigate(urlPathName);
  };
  return (
    <div id="purchaseContainer">
      <h3>구매관리 TEST</h3>
      <div id="purchaseMenu">
        <div id="companyList" onClick={urlPath}>
          <label className="purchaseLabel">업체 목록</label>
        </div>
        <div id="companyNew" onClick={urlPath}>
          <label className="purchaseLabel">업체 등록</label>
        </div>
        <div id="order" onClick={urlPath}>
          <label className="purchaseLabel">발주 등록</label>
        </div>
      </div>
      <div id="purchaseContent">
        <Routes>
          <Route path="/" element={<CompanyList />}></Route>
          <Route path="/companyList" element={<CompanyList />}></Route>
          <Route path="/companyNew" element={<CompanyNew />}></Route>
          <Route path="/companyEdit" element={<CompanyEdit />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Purchase;
