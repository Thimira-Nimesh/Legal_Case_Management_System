import React from "react";
import "../featured/Featured.scss";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertRoundedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total Earnings Today</p>
        <p className="amount">42000/=</p>
        <p className="desc">
          Previous transactions processing.Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemtitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="resultAmount">1.2Mn/=</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">Lastweek</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <div className="resultAmount">1.2Mn/=</div>
            </div>
          </div>
          <div className="item">
            <div className="itemtitle">LastMonth</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="resultAmount">1.2Mn/=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
