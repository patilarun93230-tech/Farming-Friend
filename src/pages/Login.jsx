import { Button, TextField, Container, Typography, Paper } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      localStorage.setItem("isLoggedIn", "true");

      // Show full name from register data
      localStorage.setItem(
        "userName",
        savedUser.firstName + " " + savedUser.lastName
      );

      navigate("/");
    } else {
      alert("Please register first");
    }
  };

  return (
    <Container className="login-container">
      <Paper elevation={6} className="login-card">
        <Typography variant="h5" className="login-title">
          🌱 Farmer Login
        </Typography>

        <Typography className="login-subtitle">
          Login to your Farming Friend account
        </Typography>

        <TextField label="Contact Number" fullWidth margin="normal" />

        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button
          variant="contained"
          fullWidth
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography className="register-link">
          New farmer? <Link to="/register">Create account</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
