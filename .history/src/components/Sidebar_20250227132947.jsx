import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
      </div>
      <div className="search">Search</div>
      <div className="conver">Conversion</div>
    </div>
  );
};

export default Sidebar;
