import { Container, Typography, Box, Grid, Button, Paper } from "@mui/material";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
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

          <Box className="hero-buttons">
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
          </Box>
        </Container>
      </Box>
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
        <br></br>
        <br></br>
        <strong>Farming Friend</strong> is a smart digital platform created to
        support farmers with reliable guidance, quality agricultural products,
        real-time market prices, and weather updates. Our goal is to empower
        farmers by connecting them with expert knowledge, trusted resources, and
        modern farming solutions that help increase productivity, improve crop
        quality, and ensure sustainable growth. 🌱
      </Typography>
      {/* ================= HIGHLIGHTS SECTION ================= */}
      <div className="highlights-section">
        <h2 className="highlights-title">Why Choose Farming Friend 🌱</h2>

        <div className="highlights-grid">
          <div className="highlight-box">
            <AgricultureIcon className="highlight-icon success" />
            <h3>Expert Guidance</h3>
            <p>
              Get trusted advice from agricultural experts for better crop
              yield.
            </p>
          </div>

          <div className="highlight-box">
            <StorefrontIcon className="highlight-icon primary" />
            <h3>Quality Products</h3>
            <p>Access certified seeds, fertilizers, and farming tools.</p>
          </div>

          <div className="highlight-box">
            <CurrencyRupeeIcon className="highlight-icon warning" />
            <h3>Market Prices</h3>
            <p>Stay updated with real-time mandi and market prices.</p>
          </div>

          <div className="highlight-box">
            <CloudIcon className="highlight-icon info" />
            <h3>Weather Alerts</h3>
            <p>Plan your farming with accurate weather updates.</p>
          </div>
        </div>
      </div>

      {/* ================= CARDS SECTION ================= */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://english.varthabharati.in/storage/uploads/india/MeetingPTI_vb_81.jpeg"
                alt="Crop Guidance"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Meeting Exports 🤝🏻
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meat exports and increase your knowledgeand give guidance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                alt="Store"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quality Your Food 🍎
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy quality foods, increse your food quality and prices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://tci.cornell.edu/wp-content/uploads/2021/08/Fruit_Mandi_by_PradeepGaurs_Shutterstock.jpg"
                alt="Weather"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Market Price 💰
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find out about the current market price by connecting with us.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* ================= CARDS SECTION ================= */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://kj1bcdn.b-cdn.net/media/42142/kisan.png"
                alt="Crop Guidance"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Smart Crop Guidance 🌾
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get expert guidance to improve crop yield and farm
                  productivity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://img.freepik.com/premium-photo/scientist-examining-maize-crop-field_225486-1477.jpg?w=2000"
                alt="Store"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Trusted Products 🧺
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buy quality seeds, fertilizers and tools at best prices.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="farming-card">
              <CardMedia
                component="img"
                height="180"
                image="https://images.news9live.com/wp-content/uploads/2023/06/monsoon.jpg?w=1200&enlarge=true"
                alt="Weather"
                className="farming-card-img"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Weather Updates ☁️
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get real-time weather alerts for smart farming decisions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <footer className="footer">
        <div className="footer-container">
          {/* Column 1 – About */}
          <div className="footer-col">
            <h3 className="footer-heading">Farming Friend</h3>
            <p className="footer-text">
              Helping farmers with smart guidance and trusted farming products.
            </p>
            <p className="footer-copy">© 2025 Farming Friend</p>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Weather">Weather</a>
              </li>
              <li>
                <a href="/guidance">Guidance</a>
              </li>
              <li>
                <a href="/store">Store</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            
            </ul>
          </div>

          {/* Column 3 – Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-text">Mr. Arun Patil</p>

            <div className="footer-icons">
              <a href="mailto:patilarun93230@gmail.com" className="footer-icon">
                <EmailIcon />
                <span>patilarun93230@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/patil_arun_011"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <InstagramIcon />
                <span>patil_arun_011</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
