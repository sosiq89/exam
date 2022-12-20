import './TopMenu.css';
import React from "react";

const TopMenu = () => {
  return(
    <div id="container">
      <div id="logo"
            style={{backgroundImage: 'url(/logo.jpeg)'}}></div>
      <div id="purchase"></div>
      <div id="material"></div>
    </div>
  )
}

export default TopMenu;
