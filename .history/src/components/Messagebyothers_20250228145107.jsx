import "./myStyles.css";

function MessageOthers() {
  var props1 = { name: "Rahul", message: "Hi" };
  var props2 = { name: "Rahul", message: "aaghe kya krna hai ??" };

  return (
    <div className="other-message">
      <div className="conversation">
        <div className="othertextcontent">
          <p className="con-lastMessage">{props1.message}</p>
          <p className="self-timestamp">10:00am</p>
        </div>
        <div className="othertextcontent">
          <p className="con-lastMessage">{props2.message}</p>
          <p className="self-timestamp">11:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
