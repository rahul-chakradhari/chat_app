import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/live-chat.png";
import axios from "axios";
import "./Mystyles.css";
import { useState } from "react";

const Signup = () => {
  const [data, setdata] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ msg: "", key: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const response = await axios.post(
        "http://localhost:8081/user/signup",
        data,
        config
      );

      console.log(response);

      setStatus({ msg: "Signup successful!", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/app/welcome");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 405) {
        setStatus({
          msg: "User with this email already exists...",
          key: Math.random(),
        });
      } else if (error.response?.status === 406) {
        setStatus({
          msg: "Username already taken...",
          key: Math.random(),
        });
      } else {
        setStatus({
          msg: "Something went wrong!",
          key: Math.random(),
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="loginimage">
        <img src={logo} alt="Signup Logo" className="loginlogo" />
      </div>

      <div className="loginbox">
        <div className="logintitle">
          <p>Create an account</p>
        </div>

        <TextField
          name="name"
          label="Full Name"
          variant="outlined"
          margin="normal"
          className="input-field small-gap"
          value={data.name}
          onChange={handleChange}
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          variant="outlined"
          className="input-field small-gap"
          value={data.email}
          onChange={handleChange}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          className="input-field small-gap"
          value={data.password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          className="btn"
          onClick={signup}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Signup"}
        </Button>

        {status.msg && <p>{status.msg}</p>}

        <div className="redirect-text">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Signup;
