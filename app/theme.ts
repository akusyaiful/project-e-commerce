import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px",
          minHeight: "100vh",
          maxWidth: "444px !important",
          width: "100%",
          borderLeft: "1px solid lightgrey",
          borderRight: "1px solid lightgrey",
        },
      },
    },
  },
});

export default theme;
