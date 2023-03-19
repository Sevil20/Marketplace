import React from "react";
import Package from "../../Components/Package/Package";
import "./Azercell.css";

export default function Azercell() {
  return (
    <div id="azercell-container">
      <div id="azercell-main-section">
        <h1 id="h1-main-section">Monthly internet packages</h1>
        <p id="p-main-section">
        Choose the most suitable internet package for your needs
        </p>
      </div>
      <div id="azercell-package-lists">
        <h1 id="h1-azercell-package-list">List of packages</h1>
        <div id="package-container">
          <Package />
          <Package />
          <Package />
        </div>
      </div>
    </div>
  );
}
