import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 STATE FIX
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setRole(localStorage.getItem("role"));
    setUserName(localStorage.getItem("userName"));
  }, [location]); // 🔥 route change pe update

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setRole(null);
    navigate("/");
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const getClass = (path) =>
    location.pathname === path ? "nav-btn active" : "nav-btn";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        background: "rgba(34, 139, 34, 0.85)",
      }}
    >
      <Toolbar className="navbar">

        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="logo"
          style={{ textDecoration: "none", color: "white" }}
        >
          <AgricultureIcon sx={{ mr: 1, fontSize: 18 }} />
          Farming Friend
        </Typography>

        {/* Nav */}
        <Box className="nav-links">

          {/* Home */}
          <Button component={Link} to="/" className={getClass("/")}>
            <HomeIcon sx={{ mr: 1, fontSize: 18 }} />
            Home
          </Button>

          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/login" className={getClass("/login")}>
                <LoginIcon sx={{ mr: 1, fontSize: 18 }} />
                Login
              </Button>

              <Button component={Link} to="/register" className="register-btn">
                <AppRegistrationIcon sx={{ mr: 1, fontSize: 18 }} />
                Register
              </Button>
            </>
          ) : (
            <>
              {/* 👨‍🌾 FARMER */}
              {role === "farmer" && (
                <>
                  <Button component={Link} to="/guidance" className={getClass("/guidance")}>
                    <MenuBookIcon sx={{ mr: 1, fontSize: 18 }} />
                    Guidance
                  </Button>

                  <Button component={Link} to="/store" className={getClass("/store")}>
                    <StoreIcon sx={{ mr: 1, fontSize: 18 }} />
                    Store
                  </Button>

                  <Button component={Link} to="/weather" className={getClass("/weather")}>
                    <WbSunnyIcon sx={{ mr: 1, fontSize: 18 }} />
                    Weather
                  </Button>

                  <Button component={Link} to="/cart" className={getClass("/cart")}>
                    <ShoppingCartIcon sx={{ mr: 1, fontSize: 18 }} />
                    Cart ({cart.length})
                  </Button>
                </>
              )}

              {/* 🏪 DISTRIBUTOR */}
              {role === "distributor" && (
                <>
                  <Button component={Link} to="/distributor" className={getClass("/distributor")}>
                    📊 Dashboard
                  </Button>

                  <Button component={Link} to="/add-product" className={getClass("/add-product")}>
                    ➕ Add Product
                  </Button>

                  <Button component={Link} to="/manage-products" className={getClass("/manage-products")}>
                    📦 Products
                  </Button>

                  <Button component={Link} to="/orders" className={getClass("/orders")}>
                    📋 Orders
                  </Button>
                </>
              )}

              {/* COMMON */}
              {/* <Button component={Link} to="/videocall" className={getClass("/videocall")}>
                <VideoCallIcon sx={{ mr: 1, fontSize: 18 }} />
                Video Call
              </Button> */}

              <Button
                onClick={handleLogout}
                variant="outlined"
                className="logout-btn"
              >
                <LogoutIcon sx={{ mr: 1 }} />
                {userName}
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;