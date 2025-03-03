import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Messagebyme from "./Messagebyme";
import MessageOthers from "./Messagebyothers";
import { useSelector } from "react-redux";

const Chatarea = () => {
  const lighttheme = useSelector((state) => state.theme.lightTheme);
  console.log("Light Theme Value:", lighttheme);
  const rajConversation = {
    id: 1,
    name: "Raj Vikaramaditya",
    lastMessage: "be in a meet at 6:30 pm today",
    timeStamp: "today",
  };

  return (
    <div className="chat">
      {/* 🔹 Chat Header (Only for Raj Vikaramaditya) */}
      <div className={`chat-header ${lighttheme ? "" : "dark"}`}>
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

      <div className="mess">
        <Messagebyme />
        <MessageOthers />
        <Messagebyme />
        <MessageOthers />
        <Messagebyme />
        <MessageOthers />
        <Messagebyme />
        <MessageOthers />
        <Messagebyme />
        <MessageOthers />
      </div>

      <div className="inputbox">
        <input
          type="text"
          placeholder="Type a message..."
          className="input1box"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chatarea;
