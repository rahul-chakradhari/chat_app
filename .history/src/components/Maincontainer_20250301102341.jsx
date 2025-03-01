import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import Creategroups from "./Creategroups";

const Maincontainer = () => {
  return (
    <div className="main">
      <Sidebar />
      {/*<Creategroups />*/}
      {/*<Welcome />*/}
      {/*<Chatarea />*/}
    </div>
  );
};

export default Maincontainer;
