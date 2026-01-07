import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./Weather.css";

function Weather() {
  const forecast = [
    { day: "Day 1", temp: "32°C", condition: "Sunny", icon: <WbSunnyIcon /> },
    { day: "Day 2", temp: "31°C", condition: "Cloudy", icon: <CloudIcon /> },
    {
      day: "Day 3",
      temp: "30°C",
      condition: "Rainy",
      icon: <ThunderstormIcon />,
    },
    { day: "Day 4", temp: "29°C", condition: "Sunny", icon: <WbSunnyIcon /> },
    { day: "Day 5", temp: "33°C", condition: "Sunny", icon: <WbSunnyIcon /> },
    {
      day: "Day 6",
      temp: "28°C",
      condition: "Rainy",
      icon: <ThunderstormIcon />,
    },
    { day: "Day 7", temp: "27°C", condition: "Cloudy", icon: <CloudIcon /> },
    { day: "Day 8", temp: "31°C", condition: "Sunny", icon: <WbSunnyIcon /> },
    { day: "Day 9", temp: "30°C", condition: "Cloudy", icon: <CloudIcon /> },
    {
      day: "Day 10",
      temp: "29°C",
      condition: "Rainy",
      icon: <ThunderstormIcon />,
    },
  ];

  return (
    <Container className="weather-page">
      <Typography variant="h4" className="weather-title">
        10-Day Weather In Your City 🌦️
      </Typography>
      <br></br>

      <Grid container spacing={20}>
        {forecast.map((item, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
            <Card className="weather-day-card">
              <CardContent>
                <Typography className="weather-day">{item.day}</Typography>

                <div className="weather-icon">{item.icon}</div>

                <Typography className="weather-temp">{item.temp}</Typography>

                <Typography className="weather-condition">
                  {item.condition}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Weather;
