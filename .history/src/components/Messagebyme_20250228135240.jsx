import React from "react";
import "./myStyles.css";

function Messagebyme() {
  var props2 = { message: "This is a Sample!" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default Messagebyme;
