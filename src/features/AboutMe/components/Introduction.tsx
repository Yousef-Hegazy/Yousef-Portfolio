import { Box, Stack, styled, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { cardBackground, cardShadow, titleTextColor } from "../../../UI/colors";
import { OverflowHidden } from "../../../UI/commonStyles";
import {
  imgAnimation,
  introSectionAnimation,
  introTextAnimation,
  introTitleAnimation,
} from "../animations";
import SocialMediaLink from "./SocialMediaLink";
import { useTranslation } from "react-i18next";
import { aboutCardWidth } from "../../../constants";

const socialMediaList: {
  link: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  type?: "email" | "link";
}[] = [
  {
    link: "https://www.linkedin.com/in/yousef-ashraf-hegazy/",
    imgSrc: "/linkedin.svg",
    imgAlt: "linked in",
    name: "Linkedin",
  },
  {
    link: "https://github.com/Yousef-Hegazy",
    imgSrc: "/github.svg",
    imgAlt: "github",
    name: "Github",
  },
  {
    link: "https://wa.me/966557569465",
    imgSrc: "/whatsapp.svg",
    imgAlt: "whatsapp",
    name: "Whatsapp",
  },
  {
    link: "yousefashraf14725@gmail.com",
    imgSrc: "/gmail.svg",
    imgAlt: "gmail",
    type: "email",
    name: "Gmail",
  },
];

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <StyledIntroContainer
      spacing={2}
      component={motion.div}
      variants={introSectionAnimation}
      direction={{ sm: "column", md: "row" }}
      alignItems={{ sm: "stretch", md: "center" }}
      justifyContent="start"
    >
      <OverflowHidden>
        <StyledImg variants={imgAnimation} src="/img/my-photo.jpeg" />
      </OverflowHidden>

      <Box flex={1} p={2}>
        <OverflowHidden>
          <Typography
            variants={introTitleAnimation}
            component={motion.h4}
            gutterBottom
            variant="h4"
            color={titleTextColor}
            textAlign={{ sm: "center", md: "start" }}
          >
            {t("intro.title")}
          </Typography>
        </OverflowHidden>

        <Stack direction="column" spacing={2.5} mb={{ sm: 2, md: 0 }}>
          <OverflowHidden>
            <Typography
              variants={introTextAnimation}
              component={motion.h6}
              variant="h6"
              textAlign={{ sm: "center", md: "start" }}
            >
              {t('intro.text')}
            </Typography>
          </OverflowHidden>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {socialMediaList.map((media) => (
              <SocialMediaLink
                key={media.link}
                link={media.link}
                imgSrc={media.imgSrc}
                imgAlt={media.imgAlt}
                type={media.type}
                name={media.name}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </StyledIntroContainer>
  );
};

const StyledIntroContainer = styled(Stack)<{
  component?: unknown;
  variants?: Variants;
}>`
  border-radius: 0.5rem;
  box-shadow: ${cardShadow};
  background-color: ${cardBackground};
  backdrop-filter: blur(3px);
  width: ${aboutCardWidth};
  max-width: 100%;
  overflow: hidden;
`;

const StyledImg = styled(motion.img)`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  margin-right: auto;
  display: block;
  aspect-ratio: 10/9;
`;

export default Introduction;
