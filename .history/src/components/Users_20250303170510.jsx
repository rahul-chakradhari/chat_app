 import "./myStyles.css";
// import { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { IconButton } from "@mui/material";
// import logo from "./images/live-chat.png";
// import { useSelector } from "react-redux"; // ✅ Fix added: Redux selector import
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "./images/live-chat.png";
import { useSelector } from "react-redux";

const Users = () => {
  const lighttheme = useSelector((state) => state.theme.isLightTheme);

  const [users, setUsers] = useState([
    { id: 1, name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
    { id: 2, name: "Test#2", lastMessage: "Last Message #2", timeStamp: "today" },
    { id: 3, name: "Test#3", lastMessage: "Last Message #3", timeStamp: "today" },
    { id: 4, name: "Test#4", lastMessage: "Last Message #4", timeStamp: "today" },
    { id: 5, name: "Test#5", lastMessage: "Last Message #5", timeStamp: "today" },
  ]);

  return (
    <div className="list">
      <div className={`headerlist ${lighttheme ? "" : "dark"}`}>
        <div className={`header-box ${lighttheme ? "" : "dark"}`}>
          <img src={logo} alt="logo" className="logo-img" />
          <p className="ugtitle">Online Users</p>
        </div>
      </div>

      <div className={`search ${lighttheme ? "" : "dark"}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className={`box ${lighttheme ? "" : "dark"}`} />
      </div>

      {/* Users List */}
      <div className="uglist">
        {users.map((user) => (
          <UserItem key={user.id} {...user} />  {/* ✅ Mapping Users */}
        ))}
      </div>
    </div>
  );
};

export default Users;
