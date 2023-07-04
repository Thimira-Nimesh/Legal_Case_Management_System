import React from "react";
import Adminsidebar from "../Adminpages/Adminsidebar";
import "../Adminhome/Adminhome.scss";

function Adminhome() {
  return (
    <div className="adminhome">
      <Adminsidebar />
      <div className="adminhomecontainer">container</div>
    </div>
  );
}

export default Adminhome;
