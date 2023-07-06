import React from "react";
import Adminsidebar from "../Adminpages/Adminsidebar";
import Adminnavbar from "../Adminpages/Adminnavbar/Adminnavbar";
import "../Adminlist/Adminlist.scss";
import Datatable from "../Adminpages/datatable/Datatable";

function Adminlist() {
  return (
    <div className="adminlist">
      <Adminsidebar />
      <div className="adminlistcontainer">
        <Adminnavbar />
        <Datatable />
      </div>
    </div>
  );
}

export default Adminlist;
