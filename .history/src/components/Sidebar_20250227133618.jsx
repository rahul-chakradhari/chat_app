import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="side">
      <div className="headers">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <PersonAddAlt1Icon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <DarkModeIcon />
        </IconButton>
      </div>
      <div className="search">Search</div>
      <div className="conver">Conversion</div>
    </div>
  );
};

export default Sidebar;
