import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const land = e.target.land.value;
    const experience = e.target.experience.value;
    const mobile = e.target.mobile.value;
    const password = e.target.password.value;

    if (
      !firstName ||
      !lastName ||
      !land ||
      !experience ||
      !mobile ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      firstName,
      lastName,
      land,
      experience,
      mobile,
      password,
    };

    // Save user data (mock backend)
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");
  };

  return (
    <Container className="register-container">
      <Paper elevation={6} className="register-card">
        <Typography variant="h5" className="register-title">
          🌾 Farmer Registration
        </Typography>

        <Typography className="register-subtitle">
          Create your Farming Friend account
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

          {/* Land Area Dropdown */}
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

          {/* Experience Dropdown */}
          <TextField
            select
            name="experience"
            label="Farming Experience"
            fullWidth
            margin="normal"
          >
            <MenuItem value="fresher">🌱 Fresher Farmer</MenuItem>
            <MenuItem value="experienced">🌾 Experienced Farmer</MenuItem>
          </TextField>

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
