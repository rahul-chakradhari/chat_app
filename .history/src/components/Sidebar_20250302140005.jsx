import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
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
  const navigate = useNavigate();
  return (
    <div className="side">
      <div className="headers dark">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAlt1Icon
              onClick={() => {
                navigate("users");
              }}
            />
          </IconButton>
          <IconButton>
            <GroupAddIcon
              onClick={() => {
                navigate("groups");
              }}
            />
          </IconButton>
          <IconButton>
            <AddCircleIcon
              onClick={() => {
                navigate("creategroups");
              }}
            />
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

      <div className="conversation">
        {conversations.map((conversation) => (
          <Conversationitem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
