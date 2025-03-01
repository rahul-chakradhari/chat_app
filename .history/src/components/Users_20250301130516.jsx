import "./myStyles.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "./images/live-chat.png";

const Users = () => {
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
  ]);

  return (
    <div className="list">
      {/* Online Users Box */}
      <div className="headerlist">
        <div className="header-box">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="ugtitle">Online Users</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="box" />
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
