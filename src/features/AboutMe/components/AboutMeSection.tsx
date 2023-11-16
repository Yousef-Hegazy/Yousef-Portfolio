import { Box, Stack, styled, Typography } from "@mui/material";
import {
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  Variants,
} from "framer-motion";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { cardBackground, cardShadow, titleTextColor } from "../../../UI/colors";
import { OverflowHidden, TextUnderline } from "../../../UI/commonStyles";
import routeNames from "../../../router/routeNames";
import {
  aboutSectionAnimation,
  aboutTextAnimation,
  aboutTitleAnimation,
  arrowAnimation,
  underlineAnimation,
} from "../animations";
import { aboutCardWidth } from "../../../constants.ts";
import { useTranslation } from "react-i18next";

const AboutMeSection = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation();

  return (
    <AboutContainer
      component={motion.div}
      variants={aboutSectionAnimation}
      p={3}
      spacing={0.5}
      direction="column"
    >
      <OverflowHidden width="10rem">
        <Typography
          gutterBottom
          component={motion.h4}
          variants={aboutTitleAnimation}
          variant="h4"
          textAlign="center"
          fontFamily={lang === "ar" ? "Cairo" : "Marck Script"}
        >
          {t("about.title")}
        </Typography>

        <TextUnderline
          component={motion.div}
          variants={underlineAnimation}
          bgcolor={titleTextColor}
          mb={3}
        />
      </OverflowHidden>

      <Box textAlign="justify">
        <OverflowHidden component="span">
          <Typography
            component={motion.span}
            variants={aboutTextAnimation}
            variant="h6"
          >
            {t("about.text.0")}
          </Typography>
        </OverflowHidden>

        <OverflowHidden component="span">
          <Typography
            component={motion.span}
            variants={aboutTextAnimation}
            variant="h6"
          >
            {t("about.text.1")}
          </Typography>
        </OverflowHidden>

        <OverflowHidden component="span">
          <Typography
            component={motion.span}
            variants={aboutTextAnimation}
            variant="h6"
          >
            {t("about.text.2")}
          </Typography>
        </OverflowHidden>

        <OverflowHidden component="span">
          <Typography
            component={motion.span}
            variants={aboutTextAnimation}
            variant="h6"
          >
            {t("about.text.3")}
          </Typography>
        </OverflowHidden>

        <OverflowHidden component={motion.span} variants={aboutTextAnimation}>
          <IconLink
            direction="row"
            spacing={0.3}
            component={Link}
            to={routeNames.techStack}
          >
            <Typography color="inherit" variant="h6" lineHeight={1.8}>
              {t("common.here")}
            </Typography>

            <Box
              component={motion.span}
              variants={arrowAnimation}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                repeatType: "mirror",
              }}
            >
              {lang === "en" ? <BiRightArrowAlt /> : <BiLeftArrowAlt />}
            </Box>
          </IconLink>
        </OverflowHidden>
      </Box>
    </AboutContainer>
  );
};

const AboutContainer = styled(Stack)<{
  component?:
    | HTMLElement
    | ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
  variants?: Variants;
  animate?: AnimationControls;
}>`
  box-shadow: ${cardShadow};
  width: ${aboutCardWidth};
  max-width: 100%;
  align-items: center;
  background-color: ${cardBackground};
  backdrop-filter: blur(3px);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const IconLink = styled(Stack)`
  display: inline-flex;
  text-decoration: none;
  border-bottom: 0;
  color: ${titleTextColor};
  align-items: end;
  font-size: 1.2rem;
  margin: 0 0.5rem;
` as typeof Stack;

export default AboutMeSection;
