import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";
function Header() {
  return (
    <div className="header_container">
      <div className="header">
        <div className="header_logo">
          <Avatar
            src="https://avatars.githubusercontent.com/u/31488121?s=460&u=348efb34634b4e91044174e57c7997d9ce1ee895&v=4"
            alt="arpit kumat avatar"
          />
        </div>
        <div className="header_left">
          <IconButton>
            <DonutLargeIcon className="header_left_icons" />
          </IconButton>
          <IconButton>
            <ChatIcon className="header_left_icons" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="header_left_icons" />
          </IconButton>
        </div>
      </div>
      <div className="header_search">
        <div className="search_header">
          <SearchIcon className="searchicon" />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
    </div>
  );
}

export default Header;
