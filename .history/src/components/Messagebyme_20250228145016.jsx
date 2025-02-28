import "./myStyles.css";

function MessageByMe() {
  const messages = [
    { message: "Me Hi", time: "10:05am" },
    { message: "Aaj milte hai coding question solve krenge", time: "12:00pm" },
  ];

  return (
    <div className="selfmessagecontainer">
      {messages.map((msg, index) => (
        <div key={index} className="messageBox">
          <p>{msg.message}</p>
          <p className="self-timeStamp">{msg.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageByMe;
