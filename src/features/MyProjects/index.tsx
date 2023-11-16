import { Box, Stack, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AnimatedText from "../../UI/AnimatedText.tsx";
import Frame from "../../UI/Frame.tsx";
import { titleTextColor } from "../../UI/colors.ts";
import { OverflowHidden } from "../../UI/commonStyles.tsx";
import { pageAnimation } from "../../animations.ts";
import routeNames from "../../router/routeNames.ts";
import {
  techOutroAnimation,
  techStackWordAnimation,
} from "../TechStack/animations.ts";
import projects from "./data.ts";
import { Project } from "./models.ts";

const ProjectCard = lazy(() => import("./components/ProjectCard.tsx"));

export const Component = () => {
  const { t, i18n: {language: lang} } = useTranslation();

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
      <Frame />
      <Frame backgroundColor="rgba(255, 255, 255, 0.15)" />
      <Stack direction="column" spacing={2.5} alignItems="center">
        <AnimatedText variant="h6" text={t("projects.title")} />

        {projects.map((project: Project) => (
          <ProjectCard project={project} key={project.name} t={t} lang={lang} />
        ))}

        <OverflowHidden
          component={Link}
          width="max-content"
          maxWidth="100%"
          display="block"
          margin="0 auto"
          to={routeNames.certificates}
        >
          <ProjectsLink
            component={motion.h4}
            variants={techOutroAnimation}
            textAlign="center"
            variant="h4"
            gutterBottom
          >
            {t("projects.certificates.0")}
            <Typography
              component={motion.p}
              variants={techStackWordAnimation}
              color={titleTextColor}
              display="inline-block"
              variant="inherit"
            >
              {t("projects.certificates.1")}
            </Typography>
            {t("projects.certificates.2")}
          </ProjectsLink>
        </OverflowHidden>
      </Stack>
    </Box>
  );
};

const ProjectsLink = styled(Typography)`
  max-width: 100%;
  &:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 0.5rem;

    & .MuiTypography-root {
      text-decoration: underline;
      text-decoration-style: wavy;
      text-underline-offset: 0.5rem;
    }
  }
` as typeof Typography;
