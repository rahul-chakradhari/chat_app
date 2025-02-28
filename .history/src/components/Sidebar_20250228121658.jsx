import { useState } from "react";
import Conversationitem from "./Conversationitem";
import "./Mystyles.css";

const Sidebar = ({ setSelectedChat }) => {
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
    <div className="side">
      <div className="conversation">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => setSelectedChat(conversation)}
          >
            <Conversationitem {...conversation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
