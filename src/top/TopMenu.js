import './TopMenu.css';
import React from "react";
import { useNavigate} from "react-router-dom";

const TopMenu = () => {
  let navigate = useNavigate();
  let urlChange = (e) => {
    let urlPath = e.target.id;
    navigate(urlPath);
  }
  return(
    <div id="container">
      <div id="logo"
            style={{backgroundImage: 'url(/logo.jpeg)'}}
            onClick={urlChange}></div>
      <div id="purchase"
           style={{backgroundImage: 'url(/purchase.jpeg)'}}
           onClick={urlChange}></div>
      <div id="material"
           style={{backgroundImage: 'url(/material.jpeg)'}}
           onClick={urlChange}>
      </div>
    </div>
  )
}

export default TopMenu;
