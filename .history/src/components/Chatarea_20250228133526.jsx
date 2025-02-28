import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Chatarea = () => {
  const rajConversation = {
    id: 1,
    name: "Raj Vikaramaditya",
    lastMessage: "be in a meet at 6:30 pm today",
    timeStamp: "today",
  };

  return (
    <div className="chat">
      {/* 🔹 Chat Header (Only for Raj Vikaramaditya) */}
      <div className="chat-header">
        <div className="chat-info">
          <div className="avatar">R</div>
          <div className="name-time">
            <h3>{rajConversation.name}</h3>
            <h6 className="niche">{rajConversation.timeStamp}</h6>
          </div>
        </div>
        <IconButton>
          <DeleteIcon className="trash" />
        </IconButton>
      </div>

      <div className="mess">{rajConversation.lastMessage}</div>

      <div className="inputbox">
        <input
          type="text"
          placeholder="Type a message..."
          className="inputbox"
        />
      </div>
    </div>
  );
};

export default Chatarea;
