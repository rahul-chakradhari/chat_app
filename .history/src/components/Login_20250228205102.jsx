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
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </div>
  );
};

export default Login;
