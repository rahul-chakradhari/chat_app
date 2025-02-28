import logo from "./images/live-chat.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginimage">
        <img src={logo} alt="" className="loginlogo" />
      </div>
      <div className="loginbox">
        <p>Login to your account</p>
      </div>
    </div>
  );
};

export default Login;
