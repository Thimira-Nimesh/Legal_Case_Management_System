import React from "react";
import "../Adminsidebar/Adminsidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";
import BalanceRoundedIcon from "@mui/icons-material/BalanceRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function Adminsidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Jayawardana</span>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <li>
            <GavelIcon className="icons" />
            <span>Cases</span>
          </li>
          <li>
            <CalendarMonthIcon className="icons" />
            <span>Case Calander</span>
          </li>
          <p className="title">Users</p>
          <li>
            <AccountCircleIcon className="icons" />
            <span>Clients</span>
          </li>
          <li>
            <LocalPoliceRoundedIcon className="icons" />
            <span>Lawyers</span>
          </li>
          <li>
            <BalanceRoundedIcon className="icons" />
            <span>Judges</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <QueryStatsRoundedIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveRoundedIcon className="icons" />
            <span>Notification</span>
          </li>
          <li>
            <BookRoundedIcon className="icons" />
            <span>Logs</span>
          </li>
          <p className="title">User</p>
          <li>
            <SettingsRoundedIcon className="icons" />
            <span>Settings</span>
          </li>
          <li>
            <AssignmentIndRoundedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRoundedIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
}

export default Adminsidebar;
