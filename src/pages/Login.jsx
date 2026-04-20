import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    alert("Please register first");
    return;
  }

  // 🔥 Find matching user
  const foundUser = users.find(
    (u) => u.mobile === mobile && u.password === password
  );

  if (!foundUser) {
    alert("Invalid mobile or password");
    return;
  }

  // Login success
localStorage.setItem("isLoggedIn", "true");

localStorage.setItem(
  "userName",
  foundUser.firstName + " " + foundUser.lastName
);

localStorage.setItem("role", foundUser.role);

  // 🔥 ROLE BASED REDIRECT
  if (foundUser.role === "distributor") {
    navigate("/distributor");
  } else {
    navigate("/");
  }
};
  return (
    <Container className="login-container">
      <Paper elevation={6} className="login-card">
        <Typography variant="h5" className="login-title">
          🌱 Login to Farming Friend
        </Typography>

        <Typography className="login-subtitle">
          Access your account
        </Typography>

        <TextField
          label="Contact Number"
          fullWidth
          margin="normal"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography className="register-link">
          New user? <Link to="/register">Create account</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;

