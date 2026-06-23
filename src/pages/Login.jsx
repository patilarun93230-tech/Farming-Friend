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

 const handleLogin = async () => {
  try {
const res = await fetch("https://farming-friend-backend.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // 🔥 JWT TOKEN SAVE
    localStorage.setItem("token", data.token);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "userName",
      data.user.firstName + " " + data.user.lastName
    );
    localStorage.setItem("role", data.user.role);

    // 🔥 ROLE BASED REDIRECT
    if (data.user.role === "distributor") {
      navigate("/distributor");
    } else {
      navigate("/");
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};

  return (
    <Container className="login-container">
      <Paper className="login-card">
        <Typography variant="h5">Login</Typography>

        <TextField
          label="Mobile"
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

        <Button onClick={handleLogin} fullWidth variant="contained">
          Login
        </Button>

        <Typography>
          New user? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login; // 🔥 MOST IMPORTANT