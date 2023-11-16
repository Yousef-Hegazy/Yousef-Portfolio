import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { lazy } from "react";
import Frame from "../../UI/Frame.tsx";
import { pageAnimation } from "../../animations.ts";

const Introduction = lazy(() => import("./components/Introduction"));
const AboutMeSection = lazy(() => import("./components/AboutMeSection"));

export const Component = () => {
  return (
    <Box
      component={motion.div}
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      px={3}
      py={4}
    >
      <Stack spacing={4} width="100%" alignItems="center">
        <Frame backgroundColor="rgba(255, 255, 255, 0.1)" />

        <Introduction />

        <AboutMeSection />
      </Stack>
    </Box>
  );
};
