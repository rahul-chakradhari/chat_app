// import DeleteIcon from "@mui/icons-material/Delete";
// import { IconButton } from "@mui/material";

// const Chatarea = (selectedChat) => {
//   return (
//     <div className="chat">
//       <div className="chattingwith">
//         <IconButton>
//           <DeleteIcon className="trash" />
//         </IconButton>
//       </div>
//       <div className="mess"> Message </div>
//       <div className="inputbox">text-input-area</div>
//     </div>
//   );
// };

// export default Chatarea;
// import DeleteIcon from "@mui/icons-material/Delete";
// import { IconButton } from "@mui/material";

// const Chatarea = ({ selectedChat }) => {
//   return (
//     <div className="chat">
//       {/* 🔹 Chat Header with Selected User and Delete Icon */}
//       <div className="chat-header">
//         {selectedChat ? (
//           <>
//             <div className="chat-info">
//               <div className="avatar">T</div>
//               <h3>{selectedChat.name}</h3>
//             </div>
//             <IconButton>
//               <DeleteIcon className="trash" />
//             </IconButton>
//           </>
//         ) : (
//           <h3>Select a conversation</h3>
//         )}
//       </div>

//       {/* 🔹 Messages Container */}
//       <div className="mess">Messages will appear here</div>

//       {/* 🔹 Input Box */}
//       <div className="inputbox">
//         <input type="text" placeholder="Type a message..." />
//       </div>
//     </div>
//   );
// };

// export default Chatarea;
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Chatarea = () => {
  const rajConversation = {
    id: 1,
    name: "Raj Vikaramaditya",
    lastMessage: "be in a meet at 6:30 pm today",
    timeStamp: "today",
  };

  return (
    <div className="chat">
      {/* 🔹 Chat Header (Only for Raj Vikaramaditya) */}
      <div className="chat-header">
        <div className="chat-info">
          <div className="avatar">R</div>
          <div>
            {" "}
            <h3>{rajConversation.name}</h3>
          </div>
          <div>
            {" "}
            <h6 className="niche">{rajConversation.timeStamp}</h6>
          </div>
        </div>
        <IconButton>
          <DeleteIcon className="trash" />
        </IconButton>
      </div>

      {/* 🔹 Messages Container */}
      <div className="mess">{rajConversation.lastMessage}</div>

      {/* 🔹 Input Box */}
      <div className="inputbox">
        <input type="text" placeholder="Type a message..." />
      </div>
    </div>
  );
};

export default Chatarea;
