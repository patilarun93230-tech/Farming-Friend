// import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import CloudIcon from "@mui/icons-material/Cloud";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import { useEffect, useState } from "react";
// import "./Weather.css";

// function Weather() {
//   const [forecast, setForecast] = useState([]);

//   const API_KEY = "c633dc19279c69aa889ec40554fa24f9";

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=Indore&appid=${API_KEY}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); // 👈 DEBUG

//         if (!data.list) {
//           console.error("API Error:", data);
//           return;
//         }

//         const dailyData = data.list.filter((item, index) => index % 8 === 0);

//         const formattedData = dailyData.slice(0, 5).map((item, index) => {
//           const condition = item.weather[0].main;

//           let icon;
//           if (condition === "Clear") icon = <WbSunnyIcon />;
//           else if (condition === "Clouds") icon = <CloudIcon />;
//           else icon = <ThunderstormIcon />;

//           return {
//             day: `Day ${index + 1}`,
//             temp: `${item.main.temp}°C`,
//             condition,
//             icon,
//           };
//         });

//         setForecast(formattedData);
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, []);

//   return (
//     <Container className="weather-page">
//       <Typography variant="h4" className="weather-title">
//         Weather Forecast 🌦️
//       </Typography>

//       {/* 👇 Loading state */}
//       {forecast.length === 0 ? (
//         <p>Loading weather data...</p>
//       ) : (
//         <Grid container spacing={3}>
//           {forecast.map((item, index) => (
//             <Grid item xs={6} sm={4} md={2} key={index}>
//               <Card className="weather-day-card">
//                 <CardContent>
//                   <Typography className="weather-day">{item.day}</Typography>

//                   <div className="weather-icon">{item.icon}</div>

//                   <Typography className="weather-temp">
//                     {item.temp}
//                   </Typography>

//                   <Typography className="weather-condition">
//                     {item.condition}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// }

// export default Weather;





import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("Indore");
  const [search, setSearch] = useState("Indore");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "c633dc19279c69aa889ec40554fa24f9";

  // 🔥 Fetch by city
  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.list) {
          setError("City not found!");
          setForecast([]);
          setLoading(false);
          return;
        }

        const dailyData = data.list.filter((item, i) => i % 8 === 0);

        const formattedData = dailyData.slice(0, 5).map((item, index) => {
          const condition = item.weather[0].main;

          let icon;
          if (condition === "Clear")
            icon = <WbSunnyIcon sx={{ color: "#FFD700", fontSize: 40 }} />;
          else if (condition === "Clouds")
            icon = <CloudIcon sx={{ color: "#90CAF9", fontSize: 40 }} />;
          else
            icon = (
              <ThunderstormIcon sx={{ color: "#FF5252", fontSize: 40 }} />
            );

          return {
            day: `Day ${index + 1}`,
            temp: `${item.main.temp}°C`,
            condition,
            icon,
          };
        });

        setForecast(formattedData);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoading(false);
      });
  }, [search]);

  // 📍 Get current location
  const getLocationWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setLoading(true);

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {
          const dailyData = data.list.filter((item, i) => i % 8 === 0);

          const formattedData = dailyData.slice(0, 5).map((item, index) => {
            const condition = item.weather[0].main;

            let icon;
            if (condition === "Clear")
              icon = <WbSunnyIcon sx={{ color: "#FFD700", fontSize: 40 }} />;
            else if (condition === "Clouds")
              icon = <CloudIcon sx={{ color: "#90CAF9", fontSize: 40 }} />;
            else
              icon = (
                <ThunderstormIcon sx={{ color: "#FF5252", fontSize: 40 }} />
              );

            return {
              day: `Day ${index + 1}`,
              temp: `${item.main.temp}°C`,
              condition,
              icon,
            };
          });

          setForecast(formattedData);
          setLoading(false);
        });
    });
  };

  return (
    <Container className="weather-page">
      <Typography variant="h4" className="weather-title">
        Weather In Your City 🌦️
      </Typography>
      <br />
      <br />

      {/* 🔍 Search UI */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button variant="contained" onClick={() => setSearch(city)}>
          Search
        </Button>

        <Button
          variant="outlined"
          startIcon={<MyLocationIcon />}
          onClick={getLocationWeather}
        >
          Use Location
        </Button>
      </div>

      {/* ⏳ Loading */}
      {loading && <p>Loading weather data...</p>}

      {/* ❌ Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* 📊 Weather Cards */}
      {!loading && forecast.length > 0 && (
        <Grid container spacing={3}>
          {forecast.map((item, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Card className="weather-day-card">
                <CardContent>
                  <Typography>{item.day}</Typography>
                  <div>{item.icon}</div>
                  <Typography>{item.temp}</Typography>
                  <Typography>{item.condition}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Weather;