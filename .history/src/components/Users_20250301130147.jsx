import "./myStyles.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
import logo from "./images/live-chat.png";
const Users = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Raj Vikaramaditya",
      lastMessage: "be in a meet at 6:30 pm today",
      timeStamp: "today",
    },
    {
      id: 2,
      name: "Love Babbar",
      lastMessage: "You can follow me ",
      timeStamp: "tomorrow",
    },
    {
      id: 3,
      name: "Code with Harry",
      lastMessage: "subscribe to my channel",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="list">
      {/* Header List with Box Style */}
      <div className="headerlist">
        <div className="header-box">
          <img
            src={logo}
            style={{ height: "1.8rem", width: "1.8rem" }}
            alt=""
          />
          <p className="ugtitle">Online Users</p>
        </div>
      </div>
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="box" />
      </div>
      <div className="uglist">
        <div className="listtem">
          <p className="icon">R</p>
          <p className="title">Test User 1</p>
        </div>
        <div className="listtem">
          <p className="icon">R</p>
          <p className="title">Test User 2</p>
        </div>
        <div className="listtem">
          <p className="icon">R</p>
          <p className="title">Test User 3</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
