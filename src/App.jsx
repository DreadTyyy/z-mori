import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import ReactGA from "react-ga4";

const Container = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    maxW: "100em",
    w: "100%",
    h: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: { base: "5%", md: "32px", lg: "120px" },
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    lineHeight: 1.5,
    px: "32px",
    py: "24px",
  },
  // Styles for the size variantions
  sizes: {
    md: {
      fontSize: "18px",
    },
  },
  // Styles for the visual style variations
  variants: {
    moriwhite: {
      bg: "#F1F1F1",
      color: "#0C0D0D",
      px: 0,
    },
    morilink: {
      bg: "transparent",
      fontSize: "16px",
      color: "#F1F1F1",
      _hover: {
        textDecoration: "underline",
      },
    },
    gradient: {
      bg: "linear-gradient(90deg, #CAFF30, #23CDEB)",
      color: "#191426",
      bgSize: "200% 200%",
      transition: "all 0.5s ease",
      _hover: {
        animation: "gradientMove 1s infinite alternate",
        color: "#191426",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

const theme = extendTheme({
  fonts: {
    body: "Inter, Helvetica, sans-serif",
  },
  colors: {
    primary: "#191426",
    secondary: "#CAFF30",
    tersier: "#23CDEB",
    whitemori: "#F1F1F1",
    blackmori: {
      900: "#0C0D0D",
      750: "#545454",
      500: "#8F9090",
      350: "#A1A1A1",
      150: "#DCDDDD",
      50: "#EFEFEF",
    },
  },
  components: {
    Container,
    Button,
  },
});

function App() {
  ReactGA.initialize("G-GYE4M20J9L");
  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
