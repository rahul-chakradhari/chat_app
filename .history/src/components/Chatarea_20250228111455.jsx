import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const Chatarea = () => {
  return (
    <div className="chat">
      <div className="chattingwith">
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
