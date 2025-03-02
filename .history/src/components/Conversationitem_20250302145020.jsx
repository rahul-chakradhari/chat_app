import { useNavigate } from "react-router-dom";

const Conversationitem = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="conversationitem"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="icon">{props.name[0]}</p>
      <div className="conversation-text">
        <p className="title">{props.name}</p>
        <p className="message">{props.lastMessage}</p>
      </div>
      <p className="time">{props.timeStamp}</p>
    </div>
  );
};

export default Conversationitem;
