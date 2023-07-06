import React from "react";
import Adminsidebar from "../Adminpages/Adminsidebar";
import "../Adminhome/Adminhome.scss";
import Adminnavbar from "../Adminpages/Adminnavbar/Adminnavbar";
import Widgets from "../Adminpages/Widgets/Widgets";
import Featured from "../Adminpages/featured/Featured";
import Chart from "../Adminpages/chart/Chart";
import ListTable from "../Adminpages/table/Table";

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
        <div className="admincharts">
          <Featured />
          <Chart />
        </div>
        <div className="listcontainer">
          <div className="listTitle">Latest Cases</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
