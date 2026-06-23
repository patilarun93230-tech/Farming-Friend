import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useEffect, useState } from "react";
import "./VideoCall.css";

function VideoCall() {
  const [farmers, setFarmers] = useState([]);

  // 🔥 Fetch experienced farmers
  useEffect(() => {
fetch("https://farming-friend-backend.onrender.com/api/users/experienced")
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.log(err));
  }, []);

  const startCall = (name) => {
    alert(`Connecting video call with ${name} (Demo UI)`);
  };

  return (
    <Container className="video-call-page">
      <Typography variant="h4" className="vc-heading">
        👨‍🌾 Connect with Experienced Farmers
      </Typography>

      <Typography className="vc-subtitle">
        Get real-time farming guidance through video calls
      </Typography>

      <br /><br />

      <Grid container spacing={4}>
        {farmers.length === 0 ? (
          <Typography>No experienced farmers available</Typography>
        ) : (
          farmers.map((farmer) => (
            <Grid item xs={12} sm={6} md={4} key={farmer._id}>
              <Card className="vc-card">
                <CardContent>
                  <Box className="vc-header">
                    <Avatar
                      src={
                        farmer.photo ||
                        "https://via.placeholder.com/100"
                      }
                      alt={farmer.firstName}
                      className="vc-avatar"
                    />

                    <Chip label="Online" color="success" size="small" />
                  </Box>

                  <Typography variant="h6" className="farmer-name">
                    {farmer.firstName} {farmer.lastName}
                  </Typography>

                  <Typography className="farmer-info">
                    Experience: Experienced Farmer
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<VideocamIcon />}
                    className="vc-btn"
                    onClick={() =>
                      startCall(farmer.firstName)
                    }
                  >
                    Start Video Call
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}

export default VideoCall;