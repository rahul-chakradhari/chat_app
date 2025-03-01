import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import Creategroups from "./Creategroups";
import Users from "./Users";

const Maincontainer = () => {
  return (
    <div className="main">
      <Sidebar />
      {/*<Creategroups />*/}
      {/*<Welcome />*/}
      {/*<Chatarea />*/}
      <Users />
    </div>
  );
};

export default Maincontainer;
