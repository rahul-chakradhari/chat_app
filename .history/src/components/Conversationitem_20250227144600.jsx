import React from "react";

const Conversationitem = (props) => {
  return (
    <div className="conversationitem">
      <p className="icon">{props.name[0]}</p>
      <p className="name">{props.name}</p>
      <p className="messaage">{props.lastMessage}</p>
      <p className="time">{props.timeStamp}</p>
    </div>
  );
};

export default Conversationitem;
