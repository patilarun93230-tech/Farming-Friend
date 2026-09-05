import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  
  const [drawerOpen, setDrawerOpen] = useState(false);
const isMobile = useMediaQuery("(max-width:768px)");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");

  
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setRole(localStorage.getItem("role"));
    setUserName(localStorage.getItem("userName"));
  }, [location]);

  
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
      localStorage.removeItem("cart");

      setIsLoggedIn(false);
      setRole(null);
      setUserName("");

      navigate("/login");
    }
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  
  const getClass = (path) =>
    location.pathname === path ? "nav-btn active" : "nav-btn";

  return (<>
   <AppBar
  position="sticky"
  elevation={0}
  sx={{
    backdropFilter: "blur(10px)",
    background: "rgba(34, 139, 34, 0.85)",
    minHeight: "90px",
  }}
>
    <Toolbar
  className="navbar"
  sx={{
    minHeight: "90px !important",
    height: "90px",
  }}
>

        
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="logo"
          style={{ textDecoration: "none", color: "white" }}
        >
<AgricultureIcon sx={{ mr: 1, fontSize: 28 }} />
          Farming Friend
        </Typography>

        
        {!isMobile ? (
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
                  <Button component={Link} to="/videocall" className={getClass("/videocall")}>
                  <VideoCallIcon sx={{ mr: 1, fontSize: 18 }} />
                   Video Call
                   </Button>
                </>
              )}

              
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
        ) : (
  <IconButton
    color="inherit"
    onClick={() => setDrawerOpen(true)}
  >
    <MenuIcon sx={{ fontSize: 32 }} />
  </IconButton>
)}
        
      </Toolbar>
    </AppBar>
    <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
>
  <Box sx={{ width: 260 }}>

    <List>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to="/"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemText primary="🏠 Home" />
        </ListItemButton>
      </ListItem>

      {!isLoggedIn ? (
        <>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/login"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary="🔑 Login" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/register"
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary="📝 Register" />
            </ListItemButton>
          </ListItem>
        </>
      ) : (
        <>
          {role === "farmer" && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/guidance"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="📖 Guidance" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/store"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="🏪 Store" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/weather"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="☀️ Weather" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/cart"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText
                    primary={`🛒 Cart (${cart.length})`}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/videocall"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="📹 Video Call" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          {role === "distributor" && (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/distributor"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="📊 Dashboard" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/add-product"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="➕ Add Product" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/manage-products"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="📦 Products" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to="/orders"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary="📋 Orders" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setDrawerOpen(false);
                handleLogout();
              }}
            >
              <ListItemText
                primary={`🚪 Logout (${userName})`}
              />
            </ListItemButton>
          </ListItem>
        </>
      )}
    </List>

  </Box>
</Drawer>
   </> 
  );
}

export default Navbar;