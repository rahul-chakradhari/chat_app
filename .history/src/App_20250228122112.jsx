import { useState } from "react";

import ChatArea from "./ChatArea";

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <ChatArea selectedChat={selectedChat} />
    </div>
  );
};

export default App;
