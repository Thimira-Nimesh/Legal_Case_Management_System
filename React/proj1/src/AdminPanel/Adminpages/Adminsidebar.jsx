import React from "react";
import "../Adminpages/Adminsidebar/Adminsidebar.scss";

function Adminsidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Jayawardana</span>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
}

export default Adminsidebar;
