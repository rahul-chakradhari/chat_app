import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const logo = "/live-chat-removebg-preview.png";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themekey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  console.log(userData);
  return (
    <div
      className={`main-container ${lightTheme ? "" : "dark"}`}
      style={{ backgroundColor: lightTheme ? "#3FFF" : "#222" }}
    >
      {/* Main Content */}
      <div className="content">
        <motion.img
          drag
          whileTap={{ scale: 1.05, rotate: 360 }}
          src={logo}
          alt="Logo"
          className="welcome-logo"
        />

        <b>Hi {userData?.name || "Guest"}</b>
        <p>View and text directly to people present in the chat rooms.</p>
      </div>
    </div>
  );
};

export default Welcome;
