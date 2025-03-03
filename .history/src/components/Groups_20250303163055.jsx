import { useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "./images/live-chat.png";
import { useSelector } from "react-redux";
const Groups = () => {
  const [groups, setGroups] = useState([
    {
      id: 4,
      name: "MERN Developers",
      lastMessage: "Latest MERN Updates",
      timeStamp: "10:30 AM",
    },
    {
      id: 5,
      name: "Coder  Squad",
      lastMessage: "Upcoming Contest Details",
      timeStamp: "11:15 AM",
    },
    {
      id: 6,
      name: "Open Source Team",
      lastMessage: "New Contribution Guidelines",
      timeStamp: "9:45 AM",
    },
  ]);
  const lighttheme = useSelector((state) => state.theme.isLightTheme);
  console.log("Light Theme:", lighttheme);
  useEffect(() => {
    if (lighttheme) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [lighttheme]);

  return (
    <div className={`list ${lighttheme ? "" : "dark"}`}>
      {/* Group Header */}
      <div className="headerlist">
        <div className="header-box">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="ugtitle"> Available Groups</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`search ${lighttheme ? "" : "dark"}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search Groups" className="box" />
      </div>

      {/* Group List */}
      <div className="uglist">
        {groups.map((group) => (
          <div key={group.id} className="listitem">
            <div className="user-icon">{group.name.charAt(0)}</div>
            <div className="user-info">
              <p className="username">{group.name}</p>
              <p className="last-message">{group.lastMessage}</p>
            </div>
            <p className="timestamp">{group.timeStamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
