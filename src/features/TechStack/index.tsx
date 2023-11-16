import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import { lazy } from "react";
import Frame from "../../UI/Frame.tsx";
import { pageAnimation } from "../../animations.ts";
import { useTranslation } from "react-i18next";

const TechCard = lazy(() => import("./components/TechCard.tsx"));
const GridSkillsContainer = lazy(
  () => import("./components/GridSkillsContainer.tsx")
);

const techStack: { src: string; text: string }[] = [
  {
    src: "/img/html5.png",
    text: "HTML5",
  },
  {
    src: "/img/css3.png",
    text: "CSS3",
  },
  {
    src: "/img/js.png",
    text: "JavaScript",
  },
  {
    src: "/img/typescript.png",
    text: "Typescript",
  },
  {
    src: "/img/react.png",
    text: "ReactJS",
  },
  {
    src: "/img/next.png",
    text: "NextJS",
  },
  {
    src: "/img/nodejs.png",
    text: "NodeJS",
  },
  {
    src: "/img/dotnet.png",
    text: ".Net Core",
  },
  {
    src: "/img/Flutter.png",
    text: "Flutter",
  },
  {
    src: "/img/MUI.png",
    text: "MaterialUI",
  },
  {
    src: "/img/tailwind.svg",
    text: "TailwindCSS",
  },
  {
    src: "/img/framer-motion.svg",
    text: "Framer Motion",
  },
  {
    src: "/img/cypress.svg",
    text: "Cypress",
  },
];

export const Component = () => {
  const { t } = useTranslation();

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
      <Frame backgroundColor="rgba(255, 255, 255, 0.1)" />
      <GridSkillsContainer t={t}>
        {techStack.map((item) => (
          <Grid2
            key={item.text}
            lg={2}
            md={3}
            sm={4}
            xs={12}
            sx={{ overflowX: "hidden" }}
          >
            <TechCard imgSrc={item.src} text={item.text} />
          </Grid2>
        ))}
      </GridSkillsContainer>
    </Box>
  );
};
