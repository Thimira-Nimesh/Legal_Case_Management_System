import React from "react";
import "../Adminsingle/Adminsingle.scss";
import Adminsidebar from "../Adminpages/Adminsidebar/Adminsidebar";
import Adminnavbar from "../Adminpages/Adminnavbar/Adminnavbar";
import Chart from "../Adminpages/chart/Chart";
import ListTable from "../Adminpages/table/Table";

function Adminsingle() {
  return (
    <div className="adminsingle">
      <Adminsidebar />
      <div className="adminsinglecontainer">
        <Adminnavbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.ibb.co/r0xwkRY/pexels-pixabay-415829.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemkey">Email: </span>
                  <span className="itemvalue">janedoe@gmail</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone: </span>
                  <span className="itemvalue">0719954902</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address: </span>
                  <span className="itemvalue">64/8,Delgahard,ranala</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country: </span>
                  <span className="itemvalue">Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending(last 6 months" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <ListTable />
        </div>
      </div>
    </div>
  );
}

export default Adminsingle;
