import './TopMenu.css';
import React from "react";

const TopMenu = () => {
  return(
    <div id="container">
      <div id="logo"
            style={{backgroundImage: 'url(/logo.jpeg)'}}></div>
      <div id="purchase"
           style={{backgroundImage: 'url(/purchase.jpeg)'}}></div>
      <div id="material"
           style={{backgroundImage: 'url(/material.jpeg)'}}></div>
    </div>
  )
}

export default TopMenu;
