import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Chatarea = (selectedChat) => {
  return (
    <div className="chat">
      <div className="chattingwith">
        {selectedChat ? (
          <>
            <h3>{selectedChat.name}</h3>
            <p>{selectedChat.lastMessage}</p>
          </>
        ) : (
          <h3>select a conversation</h3>
        )}
        <IconButton>
          <DeleteIcon className="trash" />
        </IconButton>
      </div>
      <div className="mess"> Message </div>
      <div className="inputbox">text-input-area</div>
    </div>
  );
};

export default Chatarea;
