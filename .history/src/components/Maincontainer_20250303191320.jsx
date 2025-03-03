import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import Creategroups from "./Creategroups";
import Users from "./Users";
import { Outlet } from "react-router-dom";

const Maincontainer = () => {
  return (
    <div className="main">
      {/* <Sidebar />*/}
      {<Outlet />}
      {/*<Creategroups />*/}
      {<Welcome />}
      {/*<Chatarea />*/}
      {/*<Users />*/}
    </div>
  );
};

export default Maincontainer;
