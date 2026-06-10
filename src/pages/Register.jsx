import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("farmer");

  const handleRegister = async (e) => {
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

  try {
    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        mobile,
        password,
        role,
        ...(role === "farmer" && { land, experience }),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    alert("Registration Successful ✅");

    e.target.reset();
    navigate("/login");

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};

  return (
    <Container className="register-container">
      <Paper elevation={6} className="register-card">
        <Typography variant="h5">
          🌾 Register on Farming Friend
        </Typography>

        <form onSubmit={handleRegister}>
          <TextField name="firstName" label="First Name" fullWidth margin="normal" />
          <TextField name="lastName" label="Last Name" fullWidth margin="normal" />

          <TextField
            select
            label="Select Role"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="farmer">Farmer</MenuItem>
            <MenuItem value="distributor">Distributor</MenuItem>
          </TextField>

          {role === "farmer" && (
            <>
              <TextField
                select
                name="land"
                label="Land Area"
                fullWidth
                margin="normal"
              >
                {[...Array(11).keys()].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i} Acres
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                name="experience"
                label="Experience"
                fullWidth
                margin="normal"
              >
                <MenuItem value="fresher">Fresher</MenuItem>
                <MenuItem value="experienced">Experienced</MenuItem>
              </TextField>
            </>
          )}

          <TextField name="mobile" label="Mobile" fullWidth margin="normal" />
          <TextField name="password" label="Password" type="password" fullWidth margin="normal" />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Register;