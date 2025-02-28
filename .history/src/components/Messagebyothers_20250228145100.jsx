import "./myStyles.css";

function MessageOthers() {
  const messages = [
    { name: "Other", message: "Hi Buddy", time: "10:00am" },
    {
      name: "Other",
      message: "Be in a meet at 6:30 pm today",
      time: "11:00am",
    },
  ];

  return (
    <div className="other-message">
      <div className="conversation">
        {messages.map((msg, index) => (
          <div key={index} className="othertextcontent">
            <p className="con-lastMessage">{msg.message}</p>
            <p className="self-timestamp">{msg.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messagethers;
