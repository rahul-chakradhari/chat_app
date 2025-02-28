import logo from "./images/live-chat.png";

const Login = () => {
  return (
    <div className="login">
      <div className="loginimage">
        <img src={logo} alt="" className="loginlogo" />
      </div>
      <div className="loginbox">Login to your account</div>
    </div>
  );
};

export default Login;
