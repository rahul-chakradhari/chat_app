import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/themeSlice";
import { useEffect } from "react";

const Sidebar = () => {
  const lighttheme = useSelector((state) => state.theme.isLightTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Raj ",
      lastMessage: "Hai",
      timeStamp: "Today",
    },
    {
      id: 2,
      name: "Love Babbar",
      lastMessage: "You can follow me",
      timeStamp: "Tomorrow",
    },
    {
      id: 3,
      name: "Harry",
      lastMessage: "Subscribe to my channel",
      timeStamp: "Today",
    },
  ]);

  return (
    <div className="side">
      {/* Header Section */}
      <div className={`headers ${lighttheme ? "" : "dark"}`}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="sicons">
          <IconButton onClick={() => navigate("users")}>
            <PersonAddAlt1Icon />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("creategroups")}>
            <AddCircleIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lighttheme ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
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

      {/* Conversations Section */}
      <div className={`conversation ${lighttheme ? "" : "dark"}`}>
        {conversations.map((conversation) => (
          <Conversationitem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
