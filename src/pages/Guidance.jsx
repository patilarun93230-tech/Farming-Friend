import { useState } from "react";
import axios from "axios";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import "./Guidance.css";

const crops = [
  {
    id: 1,
    name: "Wheat",
    season: "Rabi",
    image:
      "https://i0.wp.com/razzanj.com/wp-content/uploads/2016/07/nature-landscape-nature-landscape-hd-image-download-wheat-farm-hd-wallpaper-notebook-background-wheat-farmers-wheat-farming-process-wheat-farming-in-kenya.jpg?ssl=1",
  },
  {
    id: 2,
    name: "Rice",
    season: "Kharif",
    image:
      "https://modernfarmer.com/wp-content/uploads/2022/04/shutterstock_1566410314.jpg",
  },
  {
    id: 3,
    name: "Cotton",
    season: "Kharif",
    image:
      "https://img.freepik.com/free-photo/cotton-growing-plantation-close-up-harvest-seasons_1268-29294.jpg",
  },
  {
    id: 4,
    name: "Corn",
    season: "Kharif",
    image:
      "https://img.freepik.com/premium-photo/corn-field-close-up-selective-focus-green-maize-corn-field-plantation-summer-agricultural-season-close-up-corn-cob-field_721890-317.jpg?w=2000",
  },
  {
    id: 5,
    name: "Gram",
    season: "Kharif",
    image:
      "https://thumbs.dreamstime.com/b/gram-farm-green-healthy-gram-plants-asian-country-gram-farm-green-healthy-gram-plants-asian-country-194642007.jpg",
  },
  {
    id: 6,
    name: "Shugarcan",
    season: "Kharif",
    image:
      "https://media.istockphoto.com/id/518044433/photo/sugarcane-field-and-road-with-white-cloud-in-thailand.webp?b=1&s=170667a&w=0&k=20&c=iC_yVJAbSMyc5akmM0zCwjJUlgtbM54tJAG7Ksgaad0=",
  },
  {
    id: 7,
    name: "Paddy",
    season: "Kharif",
    image:
      "https://images.unsplash.com/photo-1599328580087-15c9dab481f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8cGFkZHklMjBmaWVsZHx8MHx8fHwxNjI4ODEzNTk3&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: 8,
    name: "Pearl Millet",
    season: "Kharif",
    image:
      "https://media.istockphoto.com/id/1401693326/photo/millet-or-sorghum-plant-views-in-a-farmland-cultivation-pearls-millet-fields-pearls.jpg?s=612x612&w=0&k=20&c=2NIRFHCJAILXGIqj59ZM9CbEQZcHi33wQ1h0vPoANDs=",
  },
  {
    id: 9,
    name: "Sorghum",
    season: "Kharif",
    image:
      "https://img.freepik.com/premium-photo/sorghum-crop-farm-india_75648-1755.jpg",
  },
  {
    id: 10,
    name: "Mustared",
    season: "Kharif",
    image:
      "https://img.freepik.com/premium-photo/beautiful-spring-view-mustard-farm-nepal_131480-212.jpg",
  },
  {
    id: 11,
    name: "Green Gram",
    season: "Kharif",
    image:
      "https://img.freepik.com/premium-photo/green-gram-crop-field-moong-high-protein-green-mung-beans-plant-gardenagriculture-mong-bean_1048944-23348801.jpg",
  },
  {
    id: 12,
    name: "Potato",
    season: "Rabi",
    image: "https://s3.envato.com/files/350490138/potatoes_field.jpg",
  },
  {
    id: 13,
    name: "Onion",
    season: "Rabi",
    image:
      "https://www.farmatma.in/wp-content/uploads/2017/12/onion-farming.jpg",
  },
  {
    id: 14,
    name: "Soyabin",
    season: "Kharif",
    image:
      "https://c4.wallpaperflare.com/wallpaper/1023/102/576/field-fog-dawn-morning-wallpaper-preview.jpg",
  },
  {
    id: 15,
    name: "Pigeon Pea",
    season: "Kharif",
    image:
      "https://myknowledgebase.in/wp-content/uploads/2023/04/lush-foliage-blossoms-large-pigeon-tree-branches-having-green-long-pods-young-beans-green-been-pigeon-pea-155977868-1.jpg",
  },
  {
    id: 17,
    name: "Tomato",
    season: "Kharif",
    image:
      "https://media.istockphoto.com/photos/picking-tomatoes-picture-id122699722?k=20&m=122699722&s=612x612&w=0&h=W7cuVxU7o2u8Oz5AAr3dK9Ikh_5o5H5LfH2P-YsHYhA=",
  },
  {
    id: 18,
    name: "Pea",
    season: "Kharif",
    image:
      "https://img.freepik.com/premium-photo/peas-field-farming-background-concept_407474-26456.jpg",
  },
  {
    id: 19,
    name: "Sesame",
    season: "Kharif",
    image: "https://kj1bcdn.b-cdn.net/media/52071/sesame-farming.jpg",
  },
];

function Guidance() {
  const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [loading, setLoading] = useState(false);
const askAI = async () => {
  if (!question.trim()) return;

  setLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/chat",
      {
        message: question,
      }
    );

    setAnswer(res.data.reply);
  } catch (error) {
    console.error(error);
    setAnswer("Failed to get AI response.");
  }

  setLoading(false);
};
  return (
  <Container className="guidance">

    {/* Title */}
    <Typography variant="h4" className="guidance-title">
      <AgricultureIcon className="guidance-icon" />
      Farming Guidance
    </Typography>

    {/* AI Assistant */}
    <Card
      sx={{
        mb: 5,
        p: 4,
        borderRadius: 4,
        background:
          "linear-gradient(135deg, #e8f5e9, #ffffff)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#2e7d32",
          mb: 1,
        }}
      >
        🤖 Farming AI Assistant
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#555",
          mb: 3,
        }}
      >
        Ask questions about crops, fertilizers,
        diseases, irrigation and modern farming.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
  fullWidth
  variant="outlined"
  placeholder="Ask your farming question..."
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") askAI();
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "#fff",
    },
  }}
/>

        <Button
  variant="contained"
  onClick={askAI}
  sx={{
    minWidth: "140px",
    borderRadius: "14px",
    fontWeight: 600,
    backgroundColor: "#2e7d32",
  }}
>
  Ask AI
</Button>
      </Box>

      {loading && (
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {answer && (
        <Card
          sx={{
            mt: 4,
            borderRadius: 3,
            backgroundColor: "#f9fff9",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                color: "#2e7d32",
                fontWeight: "bold",
              }}
            >
              🌾 AI Recommendation
            </Typography>

            <Typography sx={{ mt: 1 }}>
              {answer}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Card>

    {/* Crop Cards */}
    <Grid container spacing={4}>
      {crops.map((crop) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={crop.id}
        >
          <Card className="crop-card">
            <CardMedia
              component="img"
              height="180"
              image={crop.image}
              alt={crop.name}
              className="crop-image"
            />

            <CardContent>
              <Typography
                variant="h6"
                className="crop-name"
              >
                {crop.name}
              </Typography>

              <Typography className="crop-season">
                Season: {crop.season}
              </Typography>

              <Link
                to={`/crop/${crop.name}`}
                className="crop-link"
              >
                View Details →
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

  </Container>
);
}

export default Guidance;  