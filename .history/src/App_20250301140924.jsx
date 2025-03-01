import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Maincontainer from "./components/Maincontainer";
import Welcome from "./components/Welcome";
import Chatarea from "./components/Chatarea";
import Users from "./components/Users";
import Creategroups from "./components/Creategroups";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<Maincontainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<Chatarea />} />
          <Route path="users" element={<Users />} />
          <Route path="creategroups" element={<Creategroups />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
