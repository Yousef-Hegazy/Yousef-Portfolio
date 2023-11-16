import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import AnimatedOutlet from "./UI/AnimatedOutlet";
import theme from "./theme";

const Navbar = lazy(() => import("./UI/Navbar"));

const emptyCache = createCache({ key: "emptycache" });

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const location = useLocation();
  const {
    i18n: { language: lang },
  } = useTranslation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CacheProvider value={lang === "ar" ? cacheRtl : emptyCache}>
          <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
            <Navbar />

            <ScrollRestoration getKey={(location) => location.key} />

            <AnimatePresence mode="wait">
              <AnimatedOutlet key={location.key} />
            </AnimatePresence>
          </Container>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
