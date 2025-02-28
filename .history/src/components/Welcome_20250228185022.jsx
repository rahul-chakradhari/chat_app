import logo from "./images/live-chat.png";
const Welcome = () => {
  return (
    <div className="welcome">
      <img src={logo} alt="" className="logo" />
      <p>View and text directly to people present in the chat rooms.</p>
    </div>
  );
};

export default Welcome;
