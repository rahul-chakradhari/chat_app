import "./myStyles.css";

import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
const Users = () => {
  return (
    <div className="list">
      Users
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

export default Users;
