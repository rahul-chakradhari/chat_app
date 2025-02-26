import React from "react";
import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Workarea from "./Workarea";
const Maincontainer = () => {
  return (
    <div className="main">
      <Sidebar />
      <Workarea />
    </div>
  );
};

export default Maincontainer;
