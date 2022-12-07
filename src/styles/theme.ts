import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F7FAFC",
      "100": "#EDF2F7",
      "200": "#E2E8F0",
      "300": "#CBD5E0",
      "400": "#A0AEC0",
      "500": "#718096",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#171923",
    },
    attention: "#fa023c",
    attention_light: "rgba(250, 2, 60, 0.7)",
  },
  breakpoints: {
    sm: "18.75rem", // 300px
    md: "25rem", // 400px
    lg: "31.25rem", // 500px
    xl: "37.5rem", // 600px
    "2xl": "43.75rem", // 700px
    "3xl": "50rem", // 800px
    nb: "85.375rem", // 1366px
    d: "120rem", // 1920px
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
  fontSizes: {
    "1xs": "0.625rem", // 10px
    "2xs": "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.375rem", // 22px
    "3xl": "1.5rem", // 24px
    "4xl": "1.625rem", // 26px
    "5xl": "1.75", // 28px
    "6xl": "1.875rem", // 30px
    "7xl": "2rem", // 32px
    "8xl": "2.125rem", // 34px
    "9xl": "2.25rem", // 36px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        boxSizeing: "border-box",
        bg: "gray.900",
        color: "gray.50",
        overflowX: "hidden",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          width: "0.6rem",
          height: "0.6rem",
          bg: "gray.800",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.500",
          borderRadius: "20px",
        },
        ":hover::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.400",
        },
        ":active::-webkit-scrollbar-thumb": {
          backgroundColor: "gray.300",
        },
        "::-webkit-scrollbar-corner": {
          backgroundColor: "gray.800",
          borderRadius: "20px",
        },
      },
    },
  },
});
