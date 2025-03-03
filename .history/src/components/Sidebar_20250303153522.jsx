import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/themeSlice";
import {
  AccountCircle as AccountCircleIcon,
  PersonAddAlt1 as PersonAddAlt1Icon,
  GroupAdd as GroupAddIcon,
  AddCircle as AddCircleIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";

const Sidebar = () => {
  const lighttheme = useSelector((state) => state.theme.isLightTheme); // ✅ Initialize First
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Light Theme:", lighttheme); // ✅ Now it will not be undefined
  }, [lighttheme]);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Raj Vikaramaditya",
      lastMessage: "Be in a meet at 6:30 PM today",
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
      name: "Code with Harry",
      lastMessage: "Subscribe to my channel",
      timeStamp: "Today",
    },
  ]);

  return (
    <div className={`side ${lighttheme ? "light-mode" : "dark-mode"}`}>
      {/* Header Section */}
      <div className={`headers ${lighttheme ? "light-header" : "dark-header"}`}>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
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
      <div className={`search ${lighttheme ? "light-search" : "dark-search"}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={`box ${lighttheme ? "light-box" : "dark-box"}`}
        />
      </div>

      {/* Conversations Section */}
      <div
        className={`conversation ${
          lighttheme ? "light-conversation" : "dark-conversation"
        }`}
      >
        {conversations.map((conversation) => (
          <Conversationitem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
