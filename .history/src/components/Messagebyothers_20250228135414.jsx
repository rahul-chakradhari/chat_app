import "./myStyles.css";

function MessageOthers() {
  var props1 = { name: "Rahul", message: "Hi raj" };
  return (
    <div className="other-message">
      <div className="conversation">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastMessage">{props1.message}</p>
          <p className="self-timestamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
