import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { IconButton } from "@mui/material";

const Creategroups = () => {
  return (
    <div className="group">
      <input placeholder="Enter group name" className="inputgroup" />
      <IconButton>
        <TaskAltIcon />
      </IconButton>
    </div>
  );
};

export default Creategroups;
