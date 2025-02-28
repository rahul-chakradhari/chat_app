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
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Chatarea = ({ selectedChat }) => {
  return (
    <div className="chat">
      {/* 🔹 Chat Header with Selected User and Delete Icon */}
      <div className="chat-header">
        {selectedChat ? (
          <>
            <div className="chat-info">
              <div className="avatar">T</div>
              <h3>{selectedChat.name}</h3>
            </div>
            <IconButton>
              <DeleteIcon className="trash" />
            </IconButton>
          </>
        ) : (
          <h3>Select a conversation</h3>
        )}
      </div>

      {/* 🔹 Messages Container */}
      <div className="mess">Messages will appear here</div>

      {/* 🔹 Input Box */}
      <div className="inputbox">
        <input type="text" placeholder="Type a message..." />
      </div>
    </div>
  );
};

export default Chatarea;
