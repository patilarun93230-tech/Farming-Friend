import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CloudIcon from "@mui/icons-material/Cloud";

import "./Home.css";

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    "https://cdn.pixabay.com/photo/2020/01/13/09/03/india-4761926_1280.jpg",
    "https://wallpaperaccess.com/full/6216848.jpg",
  ];

  const [index, setIndex] = useState(0);

  // 🔥 ROLE
  const role = localStorage.getItem("role");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <Box className="hero">
        <Box
          className="hero-bg"
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        <Container maxWidth="lg" className="hero-content">
          <Typography variant="h3" className="hero-title">
            Farming Friend 🌱
          </Typography>

          <Typography className="hero-subtitle">
            Smart guidance and trusted farming products for every farmer
          </Typography>

          {/* 🔥 ROLE BASED BUTTONS */}
          <Box className="hero-buttons">

            {/* 👨‍🌾 FARMER */}
            {role === "farmer" && (
              <>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/guidance"
                >
                  Get Guidance
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/store"
                >
                  Visit Store
                </Button>
              </>
            )}

            {/* 🏪 DISTRIBUTOR */}
            {role === "distributor" && (
              <>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/distributor"
                >
                  Dashboard
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/add-product"
                >
                  Add Product
                </Button>
              </>
            )}

            {/* 🔐 NOT LOGGED */}
            {!role && (
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/login"
              >
                Login First
              </Button>
            )}
          </Box>
        </Container>
      </Box>

      {/* ABOUT */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "20px auto",
          color: "text.secondary",
          lineHeight: 1.8,
          fontSize: "1.05rem",
        }}
      >
        <br />
        <br />
        <strong>Farming Friend</strong> is a smart digital platform created to
        support farmers with reliable guidance, quality agricultural products,
        real-time market prices, and weather updates.
      </Typography>

      {/* HIGHLIGHTS */}
      <div className="highlights-section">
        <h2 className="highlights-title">Why Choose Farming Friend 🌱</h2>

        <div className="highlights-grid">
          <div className="highlight-box">
            <AgricultureIcon className="highlight-icon success" />
            <h3>Expert Guidance</h3>
            <p>Get trusted advice from agricultural experts.</p>
          </div>

          <div className="highlight-box">
            <StorefrontIcon className="highlight-icon primary" />
            <h3>Quality Products</h3>
            <p>Access certified seeds and fertilizers.</p>
          </div>

          <div className="highlight-box">
            <CurrencyRupeeIcon className="highlight-icon warning" />
            <h3>Market Prices</h3>
            <p>Stay updated with mandi prices.</p>
          </div>

          <div className="highlight-box">
            <CloudIcon className="highlight-icon info" />
            <h3>Weather Alerts</h3>
            <p>Plan farming with weather updates.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Farming Friend</h3>
            <p>Helping farmers with smart guidance.</p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <p>Arun Patil</p>

            <div>
              <a href="mailto:patilarun93230@gmail.com">
                <EmailIcon /> Email
              </a>

              <a href="https://www.instagram.com/patil_arun_011">
                <InstagramIcon /> Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;