import {
  Button,
  TextField,
  CircularProgress,
  Backdrop,
  Alert,
  Snackbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./images/live-chat.png";
import "./Mystyles.css";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({ name: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ msg: "", type: "info", show: false });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    setLoading(true);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };

      const response = await axios.post(
        "http://localhost:8081/user/login",
        data,
        config
      );

      console.log(response);
      setStatus({ msg: "Login successful!", type: "success", show: true });
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/app/welcome");
    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        setStatus({
          msg: "Invalid username or password",
          type: "error",
          show: true,
        });
      } else {
        setStatus({
          msg: "Invalid username or password",
          type: "warning",
          show: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="loginimage">
        <img src={logo} alt="Login Logo" className="loginlogo" />
      </div>

      <div className="loginbox">
        <div className="logintitle">
          <p>Login to your account</p>
        </div>

        <TextField
          name="name"
          label="Enter Your Name"
          variant="outlined"
          margin="normal"
          className="input-field"
          value={data.name}
          onChange={handleChange}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          className="input-field"
          value={data.password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={login}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>

        <div className="redirect-text">
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>

      {/* Snackbar for top-right alert */}
      <Snackbar
        open={status.show}
        autoHideDuration={3000}
        onClose={() => setStatus({ ...status, show: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setStatus({ ...status, show: false })}
          severity={status.type}
          sx={{ width: "100%" }}
        >
          {status.msg}
        </Alert>
      </Snackbar>

      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Login;
