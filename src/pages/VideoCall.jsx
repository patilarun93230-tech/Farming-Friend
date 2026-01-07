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
import "./VideoCall.css";

const farmers = [
  {
    id: 1,
    name: "Aakash Patil",
    experience: "10 Years",
    speciality: "Wheat, Soybean",
    status: "Online",
    photo: "https://images.unsplash.com/photo-1598514982846-f34cbbf14c36",
  },
  {
    id: 2,
    name: "Dhanraj Sapkale",
    experience: "8 Years",
    speciality: "Cotton, Rice",
    status: "Online",
    photo: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8",
  },
  {
    id: 3,
    name: "Satyam Pawar",
    experience: "12 Years",
    speciality: "Vegetables",
    status: "Online",
    photo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 4,
    name: "Yugal Patil ",
    experience: "12 Years",
    speciality: "Vegetables",
    status: "Online",
    photo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

function VideoCall() {
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
      <br></br>
      <br></br>
      <Grid container spacing={4}>
        {farmers.map((farmer) => (
          <Grid item xs={12} sm={6} md={4} key={farmer.id}>
            <Card className="vc-card">
              <CardContent>
                <Box className="vc-header">
                  <Avatar
                    src={farmer.photo}
                    alt={farmer.name}
                    className="vc-avatar"
                  />

                  <Chip
                    label={farmer.status}
                    color={farmer.status === "Online" ? "success" : "default"}
                    size="small"
                  />
                </Box>

                <Typography variant="h6" className="farmer-name">
                  {farmer.name}
                </Typography>

                <Typography className="farmer-info">
                  Experience: {farmer.experience}
                </Typography>

                <Typography className="farmer-info">
                  Speciality: {farmer.speciality}
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<VideocamIcon />}
                  className="vc-btn"
                  disabled={farmer.status !== "Online"}
                  onClick={() => startCall(farmer.name)}
                >
                  Start Video Call
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default VideoCall;
