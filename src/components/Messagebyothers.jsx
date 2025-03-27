// import "./myStyles.css";

// function MessageOthers() {
//   var props1 = { name: "Rahul", message: "be in a meet at 6:30 pm today" };

//   return (
//     <div className="other-message">
//       <div className="conversationother">
//         <div className="othertextcontent">
//           <p className="con-lastMessage">{props1.message}</p>
//           <p className="self-timestamp">12:00am</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MessageOthers;
import "./myStyles.css";

function MessageOthers() {
  var props1 = { name: "Rahul", message: "be in a meet at 6:30 pm today" };

  return (
    <div className="other-message">
      <div className="othertextcontent">
        <p className="con-lastMessage">{props1.message}</p>
        <p className="self-timestamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageOthers;
