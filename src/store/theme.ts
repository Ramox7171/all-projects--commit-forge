import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#242424",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#dadada",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          background: "#8338ec",
          color: "#ffff",
        },
      },
    },
  },
});

export default theme;
