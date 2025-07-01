import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto as RobotoFont } from "next/font/google";

const Roboto = RobotoFont({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 390,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    background: {
      paper: "rgba(255, 255, 255, 0.49)",
    },
    primary: {
      main: "#3B5AAE",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
  },
  typography: {
    h1: { fontSize: "57px", fontWeight: 700, lineHeight: 1.12 },
    h2: { fontSize: "32px", fontWeight: 700, lineHeight: 1.375 },
    body1: { fontSize: "18px", lineHeight: 1.78 },
    body2: { fontSize: "16px", lineHeight: 1.5 },
    caption: { fontSize: "14px", lineHeight: 1.43 },
    fontFamily: Roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
          borderRadius: 100,
          textTransform: "capitalize",
          fontSize: "16px",
          fontWeight: 700,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "rgb(25, 49, 107)",
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "inherit",
          textDecoration: "none",
          "&:hover": {
            color: "inherit",
          },
        },
        address: { fontStyle: "normal" },
        img: {
          height: "auto",
          display: "block",
        },
        ul: { margin: 0, padding: 0, listStyle: "none" },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
