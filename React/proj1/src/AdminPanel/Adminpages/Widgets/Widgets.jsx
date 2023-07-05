import React from "react";
import "../Widgets/Widgets.scss";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

function Widgets({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "clients":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon2: (
          <PersonOutlineRoundedIcon
            className="icon2"
            style={{ color: "black", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    case "cases":
      data = {
        title: "CASES",
        isMoney: false,
        link: "See all users",
        icon2: (
          <GavelRoundedIcon
            className="icon2"
            style={{ color: "black", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon2: (
          <PaidRoundedIcon
            className="icon2"
            style={{ color: "black", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: false,
        link: "See details",
        icon2: (
          <AccountBalanceRoundedIcon
            className="icon2"
            style={{ color: "black", backgroundColor: "crimson" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widgets">
      <div className="left4">
        <span className="widgettitle">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="left4">
        <div className="percentage positive">
          <KeyboardArrowUpRoundedIcon />
          {diff}%
        </div>
        {data.icon2}
      </div>
    </div>
  );
}

export default Widgets;
