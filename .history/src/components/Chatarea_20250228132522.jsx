import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Chatarea = (props) => {
  // ✅ Fixed props
  if (!props || !props.name) {
    return <div>Error: Name not provided</div>;
  }

  return (
    <div className="chat">
      <div className="chattingwith">
        <p className="iconofchatting">{props.name[0]}</p>
        <div className="header-text">
          <p className="titleofhatting">{props.name}</p>
          <p className="timestamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="mess"> Message </div>
      <div className="inputbox">text-input-area</div>
    </div>
  );
};

export default Chatarea;
