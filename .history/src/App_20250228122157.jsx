import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/Chatarea";

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="app">
      <Sidebar setSelectedChat={setSelectedChat} />
      <ChatArea selectedChat={selectedChat} />
    </div>
  );
};

export default App;
