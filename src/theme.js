import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32", // green
    },
    secondary: {
      main: "#f9a825", // yellow
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
