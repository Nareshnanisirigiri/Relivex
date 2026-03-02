import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C83A7A",
      light: "#E06AA0",
      dark: "#9A2B5D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1CB5B0",
      light: "#6EDAD6",
      dark: "#138F8B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2933",
      secondary: "#5F6C7B",
    },
  },

  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",

    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2.6rem",
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: "2.1rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.7rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.6,
      color: "#5F6C7B",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.3px",
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "10px 28px",
          boxShadow: "none",
        },
        containedPrimary: {
          background:
            "linear-gradient(135deg, #C83A7A, #E06AA0)",
          boxShadow: "0px 8px 22px rgba(200,58,122,0.35)",
          "&:hover": {
            boxShadow: "0px 12px 28px rgba(200,58,122,0.45)",
          },
        },
        containedSecondary: {
          background:
            "linear-gradient(135deg, #1CB5B0, #6EDAD6)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0px 14px 32px rgba(0,0,0,0.07)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1F2933",
        },
      },
    },
  },
});

export default theme;