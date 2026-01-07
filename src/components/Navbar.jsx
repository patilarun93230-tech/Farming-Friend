import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";

import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <AppBar position="sticky" elevation={3}>
      <Toolbar className="navbar">
        {/* Logo / App Name */}
        <Typography variant="h6" className="logo">
          <AgricultureIcon sx={{ mr: 1 }} />
          Farming Friend
        </Typography>

        {/* Navigation Buttons */}
        <Box className="nav-links">
          <Button component={Link} to="/" className="nav-btn">
            Home
          </Button>

          <Button component={Link} to="/guidance" className="nav-btn">
            Guidance
          </Button>

          <Button component={Link} to="/store" className="nav-btn">
            Store
          </Button>
          <Button component={Link} to="/weather" className="nav-btn">
            Weather
          </Button>

          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/login" className="nav-btn">
                Login
              </Button>

              <Button component={Link} to="/register" className="register-btn">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/cart" className="nav-btn">
                Cart
              </Button>
              <Button component={Link} to="/videocall" className="nav-btn">
                Video Call
              </Button>

              <Button
                onClick={handleLogout}
                variant="outlined"
                className="logout-btn"
              >
                Logout ({userName})
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
