import React from "react";

const Chatarea = ({ props }) => {
  return (
    <div className="chat">
      <div className="chattingwith">
        Header
        <p className="iconofchatting">{props.name[0]}</p>
        <div className="header-text">
          {}
          <p className="titleofhatting">{props.name}</p>
          <p></p>
        </div>
      </div>
      <div className="mess"> Message </div>
      <div className="inputbox">text-input-area</div>
    </div>
  );
};

export default Chatarea;
