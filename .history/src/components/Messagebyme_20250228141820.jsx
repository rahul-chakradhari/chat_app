import "./myStyles.css";

function MessageByMe() {
  var props2 = { message: "be in a meet at 6:30 pm today" };
  return (
    <div className="selfmessagecontainer">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">10:00am</p>
      </div>
    </div>
  );
}

export default MessageByMe;
