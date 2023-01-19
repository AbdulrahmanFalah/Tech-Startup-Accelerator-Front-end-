import React from "react";
import "../index.css";
import housen from "../re/housen.png";
import vector from "../re/Vector.png";
import menu from "../re/menu.png";
import "./nav-bar.css";

export default function Navbar() {
  function show() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  return (
    <nav>
      <img src={housen} className="logo" alt="" />
      <div className="nav-list">
        <ul>
          <a href="#" rel="noreferrer">
            Buy a house
          </a>
          <a href="#" rel="noreferrer">
            Rent a house
          </a>
          <a href="#" rel="noreferrer">
            Mortgage
          </a>
        </ul>
      </div>
      <img src={vector} id="night-mode-btn" className="mood" alt="" />
      <div className="dropdown">
        <img src={menu} onClick={show} className="menu dropbtn" alt="" />
        <div className="dropdown-content " id="myDropdown">
          <a href="#" rel="noreferrer">
            Buy a house
          </a>
          <a href="#" rel="noreferrer">
            Rent a house
          </a>
          <a href="#" rel="noreferrer">
            Mortgage
          </a>
          <img
            src={vector}
            id="night-mode-btn "
            className="mood menu-mode"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}
