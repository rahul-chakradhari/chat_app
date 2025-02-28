import "./myStyles.css";

function MessageByMe() {
  var props2 = { message: "This is a Sample!" };
  return (
    <div className="selfmessagecontainer">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageByMe;
