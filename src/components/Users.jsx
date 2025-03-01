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
    {
      id: 6,
      name: "Test#6",
      lastMessage: "Last Message #6",
      timeStamp: "today",
    },
    {
      id: 7,
      name: "Test#7",
      lastMessage: "Last Message #7",
      timeStamp: "today",
    },
    {
      id: 8,
      name: "Test#8",
      lastMessage: "Last Message #8",
      timeStamp: "today",
    },
    {
      id: 9,
      name: "Test#9",
      lastMessage: "Last Message #9",
      timeStamp: "today",
    },
    {
      id: 10,
      name: "Test#10",
      lastMessage: "Last Message #10",
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
