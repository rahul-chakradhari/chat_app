// import { useState } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import SearchIcon from "@mui/icons-material/Search";
// import Conversationitem from "./Conversationitem";
// import "./Mystyles.css";
// import { IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [lighttheme, setlightTheme] = useState(true);
//   const [conversations, setConversations] = useState([
//     {
//       id: 1,
//       name: "Raj Vikaramaditya",
//       lastMessage: "be in a meet at 6:30 pm today",
//       timeStamp: "today",
//     },
//     {
//       id: 2,
//       name: "Love Babbar",
//       lastMessage: "You can follow me ",
//       timeStamp: "tomorrow",
//     },
//     {
//       id: 3,
//       name: "Code with Harry",
//       lastMessage: "subscribe to my channel",
//       timeStamp: "today",
//     },
//   ]);
//   const navigate = useNavigate();
//   return (
//     <div className="side">
//       <div className={"headers " + (lighttheme ? "" : "dark")}>
//         <div>
//           <IconButton>
//             <AccountCircleIcon
//               className={"headers " + (lighttheme ? "" : "dark")}
//             />
//           </IconButton>
//         </div>
//         <div>
//           <IconButton>
//             <PersonAddAlt1Icon
//               className={"headers " + (lighttheme ? "" : "dark")}
//               onClick={() => {
//                 navigate("users");
//               }}
//             />
//           </IconButton>
//           <IconButton>
//             <GroupAddIcon
//               className={"headers " + (lighttheme ? "" : "dark")}
//               onClick={() => {
//                 navigate("groups");
//               }}
//             />
//           </IconButton>
//           <IconButton>
//             <AddCircleIcon
//               className={"headers " + (lighttheme ? "" : "dark")}
//               onClick={() => {
//                 navigate("creategroups");
//               }}
//             />
//           </IconButton>
//           <IconButton
//             onClick={() => {
//               setlightTheme((prevValue) => {
//                 return !prevValue;
//               });
//             }}
//           >
//             {lighttheme && (
//               <DarkModeIcon
//                 className={"headers " + (lighttheme ? "" : "dark")}
//               />
//             )}
//             {!lighttheme && (
//               <LightModeIcon
//                 className={"headers " + (lighttheme ? "" : "dark")}
//               />
//             )}
//           </IconButton>
//         </div>
//       </div>

//       <div className="search">
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//         <input placeholder="Search" className="box" />
//       </div>

//       <div className="conversation">
//         {conversations.map((conversation) => (
//           <Conversationitem key={conversation.id} {...conversation} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";

import Conversationitem from "./Conversationitem";
import "./Mystyles.css";

const Sidebar = () => {
  const [lighttheme, setLightTheme] = useState(true);
  const [conversations] = useState([
    {
      id: 1,
      name: "Raj Vikaramaditya",
      lastMessage: "be in a meet at 6:30 pm today",
      timeStamp: "today",
    },
    {
      id: 2,
      name: "Love Babbar",
      lastMessage: "You can follow me",
      timeStamp: "tomorrow",
    },
    {
      id: 3,
      name: "Code with Harry",
      lastMessage: "subscribe to my channel",
      timeStamp: "today",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div className="side">
      {/* Header Section */}
      <div className={`headers ${lighttheme ? "" : "dark"}`}>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>

        <div className="header-icons">
          <IconButton onClick={() => navigate("users")}>
            <PersonAddAlt1Icon />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("creategroups")}>
            <AddCircleIcon />
          </IconButton>
          <IconButton onClick={() => setLightTheme((prev) => !prev)}>
            {lighttheme ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="box" />
      </div>

      {/* Conversations List */}
      <div className="conversation">
        {conversations.map((conversation) => (
          <Conversationitem key={conversation.id} {...conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
