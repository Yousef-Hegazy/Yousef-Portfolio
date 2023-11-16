import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { TFunction } from "i18next";
import React, { lazy, useCallback, useState } from "react";
import {
  FiChevronUp,
  FiExternalLink,
  FiGithub,
  FiImage,
  FiX,
} from "react-icons/fi";
import { titleTextColor } from "../../../UI/colors.ts";
import { OverflowHidden } from "../../../UI/commonStyles.tsx";
import { overlayAnimation, projectCardAnimation } from "../animations.ts";
import { Project } from "../models.ts";

const ProjectTechStack = lazy(() => import("./ProjectTechStack.tsx"));
const LinkButton = lazy(() => import("./LinkButton.tsx"));
const ImagesCarousel = lazy(() => import("./ImagesCarousel.tsx"));

const ProjectCard = ({
  project,
  t,
  lang,
}: {
  project: Project;
  t: TFunction<"translation", undefined>;
  lang: string;
}) => {
  const [open, setOpen] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const openDesc = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDesc = useCallback(() => {
    setOpen(false);
  }, []);

  const openImages = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    document.body.style.overflow = "hidden";
    setImagesOpen(true);
  }, []);

  const closeImages = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    document.body.style.overflow = "auto";
    setImagesOpen(false);
  }, []);

  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        alignItems="center"
        maxWidth="100%"
        overflow="hidden"
      >
        <OverflowHidden width="100%">
          <StyledCard
            component={motion.div}
            variants={projectCardAnimation}
            onMouseEnter={sm ? undefined : openDesc}
            onMouseLeave={sm ? undefined : closeDesc}
          >
            <StyledCardHeader
              title={t(project.name)}
              titleTypographyProps={{
                variant: "h6",
                color: "#1b1b1b",
                textAlign: "center",
              }}
              action={
                <Stack direction="row" spacing={2}>
                  {sm ? (
                    <Tooltip
                      title={
                        <Typography>{t("common.viewDescription")}</Typography>
                      }
                    >
                      <IconButton
                        sx={{
                          color: titleTextColor,
                          outline: `1px solid ${titleTextColor}`,
                        }}
                        onClick={open ? closeDesc : openDesc}
                      >
                        <StyledMoreBtn
                          component={motion.div}
                          initial={{ rotate: 0 }}
                          animate={{ rotate: open ? "180deg" : 0 }}
                          transition={{
                            duration: 0.2,
                            type: "spring",
                            damping: 15,
                            stiffness: 300,
                          }}
                        >
                          <FiChevronUp size="1.7rem" />
                        </StyledMoreBtn>
                      </IconButton>
                    </Tooltip>
                  ) : null}

                  <Tooltip
                    title={<Typography>{t("common.viewImages")}</Typography>}
                  >
                    <IconButton
                      onClick={openImages}
                      sx={{
                        color: titleTextColor,
                        outline: `1px solid ${titleTextColor}`,
                      }}
                    >
                      <FiImage />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            />

            <Divider />

            <StyledCardMedia
              component={motion.img}
              src={project.images[0]}
              srcSet={project.images[0]}
              alt={project.name}
              initial={{ scale: 1 }}
              animate={{
                scale: open ? 0.85 : 1,
                filter: open ? "blur(4px)" : "blur(0)",
              }}
              transition={{
                duration: 0.4,
              }}
            />

            <StyledPopup
              component={motion.div}
              initial={{ transform: "translateY(120%)" }}
              animate={{
                transform: open ? "translateY(0)" : "translateY(120%)",
              }}
            >
              <Typography
                textAlign="justify"
                variant="subtitle1"
                fontWeight="bold"
              >
                {t(project.description)}
              </Typography>

              <Stack direction="row" spacing={2}>
                {project.github ? (
                  <LinkButton
                    href={project.github}
                    icon={<FiGithub />}
                    text="Github"
                  />
                ) : null}
                {project.demoLink ? (
                  <LinkButton
                    href={project.demoLink}
                    icon={<FiExternalLink />}
                    text="Demo"
                  />
                ) : null}
              </Stack>
            </StyledPopup>
          </StyledCard>
        </OverflowHidden>

        <OverflowHidden width="100%">
          <ProjectTechStack techStack={project.techStack} />
        </OverflowHidden>
      </Stack>

      <AnimatePresence>
        {imagesOpen && (
          <Overlay
            key="images-overlay"
            component={motion.div}
            variants={overlayAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closeImages}
          >
            <CloseBtn
              disableRipple
              startIcon={<FiX />}
              color="inherit"
              variant="outlined"
            >
              {t("common.close")}
            </CloseBtn>
            <ImagesCarousel project={project} lang={lang} t={t} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledCard = styled(Card)`
  height: 350px;
  width: 800px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  color: white;
  border-radius: 0.5rem;
` as typeof Card;

const StyledCardHeader = styled(CardHeader)`
  padding: 0.8rem;
` as typeof CardHeader;

const StyledMoreBtn = styled(Box)`
  height: max-content;
  width: max-content;
  transform-origin: center;
` as typeof Box;

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
` as typeof CardMedia;

const StyledPopup = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70%;
  padding: 1rem 1.5rem;
  background-color: rgba(0, 140, 88, 0.86);
  border-radius: 1rem 1rem 0 0;
  overflow-y: auto;
  box-shadow: 0 -0.8rem 2rem rgba(0, 0, 0, 0.3);
  color: #e7fff7;
` as typeof Box;

const Overlay = styled(Box)(
  ({ theme }) => `
  margin: 0 !important;
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: ${theme.breakpoints.values.xl}px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 99;
  overflow-x: hidden;
  overflow-y: auto;
`
) as typeof Box;

const CloseBtn = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
` as typeof Button;

export default ProjectCard;
