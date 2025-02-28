import { TextField } from "@mui/material";
import logo from "./images/live-chat.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginimage">
        <img src={logo} alt="" className="loginlogo" />
      </div>
      <div className="loginbox">
        <p>Login to your account</p>
        <TextField
          id="standard-basic"
          label="Enter Username"
          variant="standard"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default Login;
