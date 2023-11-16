import { cardBackground, titleTextColor } from "../../../UI/colors.ts";
import { ReactNode } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import {
  techOutroAnimation,
  techStackWordAnimation,
  techTitleAnimation,
} from "../animations.ts";
import { OverflowHidden } from "../../../UI/commonStyles.tsx";
import { Link } from "react-router-dom";
import routeNames from "../../../router/routeNames.ts";
import { TFunction } from "i18next";

const GridSkillsContainer = ({
  t,
  children,
}: {
  t: TFunction<"translation", undefined>;
  children: ReactNode;
}) => {
  return (
    <Grid2
      container
      m="0 auto"
      p={1}
      spacing={3}
      bgcolor={cardBackground}
      width="100%"
      borderRadius={2}
      flexWrap="wrap"
    >
      <Grid2 xs={12}>
        <OverflowHidden>
          <Typography
            component={motion.h4}
            variants={techTitleAnimation}
            textAlign="center"
            variant="h4"
            gutterBottom
          >
            {t("techStack.header.0")}
            <Typography
              component={motion.p}
              variants={techStackWordAnimation}
              color={titleTextColor}
              display="inline-block"
              variant="inherit"
            >
              {t("techStack.header.1")}
            </Typography>{" "}
            {t("techStack.header.2")}
          </Typography>
        </OverflowHidden>
      </Grid2>
      {children}

      <Grid2 xs={12}>
        <OverflowHidden
          component={Link}
          width="max-content"
          maxWidth="100%"
          display="block"
          margin="0 auto"
          to={routeNames.myProjects}
        >
          <ProjectsLink
            component={motion.h4}
            variants={techOutroAnimation}
            textAlign="center"
            variant="h4"
            gutterBottom
          >
            {t("techStack.projects.0")}
            <Typography
              component={motion.p}
              variants={techStackWordAnimation}
              color={titleTextColor}
              display="inline-block"
              variant="inherit"
            >
              {t("techStack.projects.1")}
            </Typography>
            {t("techStack.projects.2")}
          </ProjectsLink>
        </OverflowHidden>
      </Grid2>
    </Grid2>
  );
};

export default GridSkillsContainer;

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
