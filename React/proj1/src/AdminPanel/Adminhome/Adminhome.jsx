import React from "react";
import Adminsidebar from "../Adminpages/Adminsidebar";
import "../Adminhome/Adminhome.scss";
import Adminnavbar from "../Adminpages/Adminnavbar/Adminnavbar";
import Widgets from "../Adminpages/Widgets/Widgets";

function Adminhome() {
  return (
    <div className="adminhome">
      <Adminsidebar />
      <div className="adminhomecontainer">
        <Adminnavbar />
        <div className="adminwidgets">
          <Widgets type="clients" />
          <Widgets type="cases" />
          <Widgets type="earnings" />
          <Widgets type="balance" />
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
