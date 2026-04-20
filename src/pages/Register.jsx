import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("farmer");

  const handleRegister = (e) => {
  e.preventDefault();

  const firstName = e.target.firstName.value.trim();
  const lastName = e.target.lastName.value.trim();
  const mobile = e.target.mobile.value.trim();
  const password = e.target.password.value.trim();

  const land = e.target.land?.value;
  const experience = e.target.experience?.value;

  if (!firstName || !lastName || !mobile || !password) {
    alert("Please fill all fields");
    return;
  }

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find((u) => u.mobile === mobile);
  if (userExists) {
    alert("User already exists with this number");
    return;
  }

  const newUser = {
    firstName,
    lastName,
    mobile,
    password,
    role,
    ...(role === "farmer" && { land, experience }),
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful ✅");

  e.target.reset();
  navigate("/login");
};

  return (
    <Container className="register-container">
      <Paper elevation={6} className="register-card">
        <Typography variant="h5" className="register-title">
          🌾 Register on Farming Friend
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            margin="normal"
          />

          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            margin="normal"
          />

          {/* ROLE SELECT 🔥 */}
          <TextField
            id="id1"
            select
            label="Select Role"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="farmer">🌾 Farmer</MenuItem>
            <MenuItem value="distributor">🏪 Distributor</MenuItem>
          </TextField>

          {/* Farmer Fields */}
          {role === "farmer" && (
            <>
              <TextField
                select
                name="land"
                label="Land Area (Acres)"
                fullWidth
                margin="normal"
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <MenuItem key={i} value={i}>
                    {i} Acres
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                name="experience"
                label="Farming Experience"
                fullWidth
                margin="normal"
              >
                <MenuItem value="fresher">🌱 Fresher</MenuItem>
                <MenuItem value="experienced">🌾 Experienced</MenuItem>
              </TextField>
            </>
          )}

          <TextField
            name="mobile"
            label="Contact Number"
            fullWidth
            margin="normal"
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="register-btn"
          >
            Register
          </Button>
        </form>

        <Typography className="login-link">
          Already registered? <Link to="/login">Login here</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Register;