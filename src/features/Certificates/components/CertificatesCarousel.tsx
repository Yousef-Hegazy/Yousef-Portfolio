import { Box, Button, IconButton, Stack, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, useCallback, useState } from "react";
import { PiArrowLeftBold, PiArrowRightBold, PiXBold } from "react-icons/pi";
import { overlayAnimation } from "../../MyProjects/animations";
import { Certificate } from "../models";
import { TFunction } from "i18next";

const CertificateCard = lazy(() => import("./CertificateCard.tsx"));

const CertificatesCarousel = ({
  certificates,
  t,
  lang,
}: {
  certificates: Certificate[];
  t: TFunction<"translation", undefined>;
  lang: string;
}) => {
  const [currentCert, setCurrentCert] = useState(0);
  const [openImage, setOpenImage] = useState<string | null>(null);

  const handleNext = useCallback(() => {
    setCurrentCert((currentCert + 1) % certificates.length);
  }, [certificates.length, currentCert]);

  const handlePrevious = useCallback(() => {
    setCurrentCert(
      (currentCert - 1 + certificates.length) % certificates.length
    );
  }, [certificates.length, currentCert]);

  const scaleImage = useCallback((src: string) => {
    setOpenImage(src);
    document.body.style.overflowY = "hidden";
  }, []);

  const closeScaledImage = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpenImage(null);
    document.body.style.overflowY = "auto";
  }, []);

  return (
    <>
      <CarouselContainer>
        <Slider>
          <IndicatorsContainer direction="row" spacing={2.5}>
            {certificates.map((cert, index) => (
              <CarouselIndicator
                key={cert.title + index}
                component={motion.div}
                animate={{
                  scale: index === currentCert ? 1.2 : 1,
                  backgroundColor:
                    index === currentCert
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
                onClick={() => setCurrentCert(index)}
              />
            ))}
          </IndicatorsContainer>

          <ForwardBtn disableRipple onClick={handleNext} title="next">
            {lang === "en" ? <PiArrowRightBold /> : <PiArrowLeftBold />}
          </ForwardBtn>

          <BackBtn disableRipple onClick={handlePrevious} title="previous">
            {lang === "en" ? <PiArrowLeftBold /> : <PiArrowRightBold />}
          </BackBtn>

          {certificates.map((certificate, index) => (
            <Slide
              key={certificate.title}
              component={motion.div}
              animate={{
                x:
                  lang === "ar"
                    ? `${(currentCert - index) * 100}%`
                    : `${(index - currentCert) * 100}%`,
                opacity: currentCert === index ? 1 : 0.3,
                scale: currentCert === index ? 1 : 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 16,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <CertificateCard
                t={t}
                certificate={certificate}
                scaleImage={scaleImage}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselContainer>

      <AnimatePresence>
        {openImage && (
          <Overlay
            variants={overlayAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closeScaledImage}
          >
            <OverlayCloseBtn
              disableRipple
              color="inherit"
              variant="outlined"
              onClick={closeScaledImage}
              startIcon={<PiXBold />}
            >
              {t("common.close")}
            </OverlayCloseBtn>
            <ScaledImage src={openImage} alt="scaled-certificate" />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificatesCarousel;

const CarouselContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  overflow-x: hidden;
` as typeof Box;

const SlideDefaultStyle = styled(Box)(
  ({ theme }) => `
  max-width: 800px;
  width: 100%;
  height: 530px;
  max-height: 100%;

  ${theme.breakpoints.down("sm")} {
    height: 400px;
  }
`
) as typeof Box;

const Slider = styled(SlideDefaultStyle)`
  position: relative;
` as typeof Box;

const Slide = styled(SlideDefaultStyle)`
  position: absolute;
  top: 0;
  padding: 1rem;
` as typeof Box;

const BtnStyle = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.2s ease-out;
  z-index: 99;

  :hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
` as typeof IconButton;

const ForwardBtn = styled(BtnStyle)`
  right: 20px;
` as typeof IconButton;

const BackBtn = styled(BtnStyle)`
  left: 20px;
` as typeof IconButton;

const IndicatorsContainer = styled(Stack)`
  position: absolute;
  z-index: 99;
  height: max-content;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
` as typeof Stack;

const CarouselIndicator = styled(Box)`
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50px;
` as typeof Box;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  overflow-y: auto;
`;

const ScaledImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: contain;
  object-position: center;
  aspect-ratio: 16/9;
`;

const OverlayCloseBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99999;
` as typeof Button;
