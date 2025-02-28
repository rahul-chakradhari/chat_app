import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Raj Vikaramaditya",
      lastMessage: "be in a meet at 6:30 pm today",
      timeStamp: "today",
    },
    {
      name: "Love Babbar",
      lastMessage: "You can follow me ",
      timeStamp: "tomorrow",
    },
    {
      name: "Code  with harry",
      lastMessage: "subscribe to my channel",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="side">
      <div className="headers">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAlt1Icon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
        </div>
      </div>
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input placeholder="Search" className="box" />
      </div>
      <div className="conver">
        <Conversationitem />
      </div>
      <div className="conversation">
        {conversations.map((conversation) => {
          return <Conversationitem props={conversation} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
