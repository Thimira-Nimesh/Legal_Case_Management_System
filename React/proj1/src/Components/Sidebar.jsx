import React from "react";

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
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icons" />
            <Link to="/admin">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <GavelIcon className="icons" />

            <Link to="/viewcases">
              <span>My Cases</span>
            </Link>
          </li>
          <li>
            <CalendarMonthIcon className="icons" />
            <span>Case Calander</span>
          </li>
          <p className="title">Appointments</p>
          <li>
            <AccountCircleIcon className="icons" />
            <span>Confirmed Appointments</span>
          </li>
          <li>
            <LocalPoliceRoundedIcon className="icons" />
            <span>Pending Appointments</span>
          </li>
          <li>
            <BalanceRoundedIcon className="icons" />
            <span>Expired Appointments</span>
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

export default Sidebar;
