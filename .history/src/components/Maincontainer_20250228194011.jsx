import "./Mystyles.css";
import Sidebar from "./Sidebar";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";

const Maincontainer = () => {
  return (
    <div className="main">
      <Sidebar />
      {/*<Welcome />*/}
      {/*<Chatarea />*/}
    </div>
  );
};

export default Maincontainer;
