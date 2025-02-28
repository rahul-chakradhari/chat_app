import "./myStyles.css";

function MessageByMe() {
  var props3 = { message: "Hi" };

  var props4 = { message: "what the plan for 6:30 pm today?? " };
  return (
    <div className="selfmessagecontainer">
      <div className="messageBox">
        <p>{props3.message}</p>
        <p className="self-timeStamp">10:05am</p>
      </div>
      <div className="messageBox">
        <p>{props4.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageByMe;
