import { useState } from "react";
import "./Mystyles.css";

const Sidebar = ({ setSelectedChat }) => {
  const [conversations] = useState([
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
    <div className="sidebar">
      <input type="text" placeholder="🔍 search" className="search-bar" />
      <div className="conversations">
        {conversations.map((chat) => (
          <div
            key={chat.id}
            className="conversation-item"
            onClick={() => setSelectedChat(chat)}
          >
            <div className="avatar">T</div>
            <div className="chat-details">
              <h4>{chat.name}</h4>
              <p>{chat.lastMessage}</p>
            </div>
            <span className="timestamp">{chat.timeStamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatHeader = ({ selectedChat }) => {
  return (
    <div className="chat-header">
      {selectedChat ? (
        <>
          <div className="avatar">T</div>
          <h3>{selectedChat.name}</h3>
          <div className="icons">➕ 👥 ⚙️ 🗑️</div>
        </>
      ) : (
        <h3>Select a conversation</h3>
      )}
    </div>
  );
};

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="chat-container">
      <Sidebar setSelectedChat={setSelectedChat} />
      <div className="chat-area">
        <ChatHeader selectedChat={selectedChat} />
        <div className="messages-container">Messages container</div>
        <div className="input-box">text-input-area</div>
      </div>
    </div>
  );
};

export default App;
