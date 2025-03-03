// import "./myStyles.css";
// import { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import logo from "./images/live-chat.png";
// import { useSelector } from "react-redux"; // ✅ Fix added: Redux selector import

const Users = () => {
  const lighttheme = useSelector((state) => state.theme.isLightTheme); // ✅ Fix added: Theme state access

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      id: 2,
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      id: 3,
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
    {
      id: 4,
      name: "Test#4",
      lastMessage: "Last Message #4",
      timeStamp: "today",
    },
    {
      id: 5,
      name: "Test#5",
      lastMessage: "Last Message #5",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="list">
      {" "}
      {/* ✅ Fix applied: Theme class added */}
      {/* Online Users Box */}
      <div className={`headerlist ${lighttheme ? "" : "dark"}`}>
        {" "}
        {/* ✅ Fix applied */}
        <div className={`header-box ${lighttheme ? "" : "dark"}`}>
          <img src={logo} alt="logo" className="logo-img" />
          <p className="ugtitle">Online Users</p>
        </div>
      </div>
      {/* Search Section */}
      <div className={`search ${lighttheme ? "" : "dark"}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={`box ${lighttheme ? "" : "dark"}`}
        />
      </div>
      {/* User List */}
      <div className="uglist">
        {conversations.map((user) => (
          <div key={user.id} className="listitem">
            <div className="user-icon">{user.name.charAt(0)}</div>
            <div className="user-info">
              <p className="username">{user.name}</p>
              <p className="last-message">{user.lastMessage}</p>
            </div>
            <p className="timestamp">{user.timeStamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
