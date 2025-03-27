import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import Creategroups from "./Creategroups";
import Users from "./Users";
import { Outlet } from "react-router-dom";
import Groups from "./Groups";
import Signup from "./Signup";

const Maincontainer = () => {
  return (
    <div className="main">
      {<Sidebar />}
      {<Outlet />}
      {/*<Groups />*/}
      {/*<Chatarea />*/}
      {/*<Welcome />*/}
      {/*<Creategroups />*/}
      {/*<Users />*/}
      {/*<Signup/>*/}
    </div>
  );
};

export default Maincontainer;
