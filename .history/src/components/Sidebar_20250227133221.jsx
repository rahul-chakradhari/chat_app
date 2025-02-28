import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
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
          <PersonAddIcon />
        </IconButton>
        <IconButton>
          <GroupAddIcon />
        </IconButton>
      </div>
      <div className="search">Search</div>
      <div className="conver">Conversion</div>
    </div>
  );
};

export default Sidebar;
