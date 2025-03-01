import "./myStyles.css";

import SearchIcon from "@mui/icons-material/Search";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";
import { IconButton } from "@mui/material";
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
