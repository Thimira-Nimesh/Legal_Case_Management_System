import React from "react";
import "../Adminnavbar/Adminnavbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";

const Adminnavbar = () => {
  return (
    <div className="adminnavbar">
      <div className="adminwrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchRoundedIcon />
        </div>
        <div className="adminitems">
          <div className="adminitem">
            <LanguageRoundedIcon className="adminicon" />
            English
          </div>
          <div className="adminitem">
            <DarkModeRoundedIcon className="adminicon" />
          </div>
          <div className="adminitem">
            <FullscreenExitRoundedIcon className="adminicon" />
          </div>
          <div className="adminitem">
            <NotificationsActiveRoundedIcon className="adminicon" />
            <div className="counter">1</div>
          </div>
          <div className="adminitem">
            <ChatBubbleRoundedIcon className="adminicon" />
            <div className="counter">2</div>
          </div>
          <div className="adminitem">
            <FormatListBulletedRoundedIcon className="adminicon" />
          </div>
          <div className="adminitem">
            <img
              src="https://i.ibb.co/MMQQcfM/pexels-pixabay-415829.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminnavbar;
