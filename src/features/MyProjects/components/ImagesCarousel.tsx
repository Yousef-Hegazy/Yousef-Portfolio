import { Box, IconButton, styled } from "@mui/material";
import { PanInfo, motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import { PiArrowLeftBold, PiArrowRightBold } from "react-icons/pi";
import { Project } from "../models";
import { TFunction } from "i18next";

const ImagesCarousel = ({
  project,
  lang,
  t,
}: {
  project: Project;
  lang: string;
  t: TFunction<"translation", undefined>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(
    (e?: React.MouseEvent<HTMLElement>) => {
      e?.stopPropagation();
      setCurrentIndex((currentIndex + 1) % project.images.length);
    },
    [currentIndex, project.images.length]
  );

  const handlePrevious = useCallback(
    (e?: React.MouseEvent<HTMLElement>) => {
      e?.stopPropagation();
      setCurrentIndex(
        (currentIndex - 1 + project.images.length) % project.images.length
      );
    },
    [currentIndex, project.images.length]
  );

  const handleIndClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, index: number) => {
      e.stopPropagation();
      setCurrentIndex(index);
    },
    []
  );

  const handleDrag = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (info.offset.x < 0) {
        {
          lang === "ar" ? handlePrevious() : handleNext();
        }
      } else {
        {
          lang === "ar" ? handleNext() : handlePrevious();
        }
      }
    },
    [handleNext, handlePrevious, lang]
  );

  return (
    <Slider>
      {project.images.map((image, index) => (
        <Slide
          onClick={(e) => e.stopPropagation()}
          key={image}
          component={motion.div}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDrag}
          animate={{
            x:
              lang === "ar"
                ? `${(currentIndex - index) * 100}%`
                : `${(index - currentIndex) * 100}%`,
            opacity: currentIndex === index ? 1 : 0.3,
          }}
          whileDrag={{
            cursor: "grabbing",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 16,
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <SlideImage src={image} alt={t(project.name)} />
        </Slide>
      ))}

      <CarouselForwardBtn onClick={handleNext}>
        {lang === "ar" ? <PiArrowLeftBold /> : <PiArrowRightBold />}
      </CarouselForwardBtn>

      <CarouselBackBtn onClick={handlePrevious}>
        {lang === "ar" ? <PiArrowRightBold /> : <PiArrowLeftBold />}
      </CarouselBackBtn>

      <IndicatorsContainer>
        {project.images.map((image, index) => {
          return (
            <IndicatorBtn
              key={image + "indiactor"}
              animate={{
                backgroundColor:
                  index === currentIndex
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(255, 255, 255, 0.3)",
                scale: index === currentIndex ? 1.4 : 1,
              }}
              onClick={(e) => handleIndClick(e, index)}
            />
          );
        })}
      </IndicatorsContainer>
    </Slider>
  );
};

const SliderDefaultStyles = styled(Box)(
  ({ theme }) => `
  width: 100%;
  max-width: ${theme.breakpoints.values.md}px;
  height: 450px;
  max-height: 100%;

  ${theme.breakpoints.down("sm")} { 
    height: 300px;
  }
`
) as typeof Box;

const Slider = styled(SliderDefaultStyles)`
  position: relative;
` as typeof Box;

const Slide = styled(SliderDefaultStyles)`
  position: absolute;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: grab;
` as typeof Box;

const SlideImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`;

const CarouselBtn = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transition: background-color 0.2s ease-out;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
` as typeof IconButton;

const CarouselBackBtn = styled(CarouselBtn)`
  left: 20px;
`;

const CarouselForwardBtn = styled(CarouselBtn)`
  right: 20px;
` as typeof IconButton;

const IndicatorsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  z-index: 999;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
` as typeof Box;

const IndicatorBtn = styled(motion.div)`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
`;

export default ImagesCarousel;
