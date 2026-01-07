import { Container, Typography, Button, Paper } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import "./CropDetail.css";

function CropDetail() {
  const { name } = useParams();

  return (
    <Container className="crop-detail">
      {/* Title */}
      <Typography variant="h4" className="crop-title">
        <AgricultureIcon className="crop-icon" />
        {name} Farming Guide
      </Typography>
      <br></br>

      {/* Guide Card */}
      <Paper className="guide-card">
        <Typography className="guide-point">
          🌱 <strong>Best Soil Type:</strong> Well-drained fertile soil
        </Typography>

        <Typography className="guide-point">
          💧 <strong>Water Requirement:</strong> Regular but controlled
          irrigation
        </Typography>

        <Typography className="guide-point">
          🧪 <strong>Fertilizer Usage:</strong> Use recommended fertilizer as
          per stage
        </Typography>

        <Typography className="guide-point">
          🐛 <strong>Common Pests:</strong> Aphids, worms, insects
        </Typography>

        <Typography className="guide-point">
          ⏰ <strong>Irrigation Timing:</strong> Water at proper time intervals
        </Typography>

        <Typography className="guide-point">
          ✅ <strong>Best Practice:</strong> Always use the right fertilizer
        </Typography>
      </Paper>

      {/* CTA */}
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/store"
        className="buy-btn"
      >
        Buy Recommended Fertilizer
      </Button>
    </Container>
  );
}

export default CropDetail;
