import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Maincontainer from "./components/Maincontainer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<Maincontainer />}>
        
                <Route path="welcome" element={<Welcome />}>
                <Route path="app" element={<Maincontainer />}>
                <Route path="app" element={<Maincontainer />}>
                <Route path="app" element={<Maincontainer />}>
                <Route path="app" element={<Maincontainer />}>


        </Route>

      </Routes>
      {/*<Login />*/}
      {/*<Maincontainer />*/}
    </div>
  );
}

export default App;
