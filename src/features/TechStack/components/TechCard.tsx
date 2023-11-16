import { motion } from "framer-motion";
import { Box, Stack, styled, Typography } from "@mui/material";
import { cardBackground } from "../../../UI/colors.ts";
import { techCardAnimation } from "../animations.ts";

const TechCard = ({ imgSrc, imgAlt = "", text }: { imgSrc: string; imgAlt?: string; text: string; }) => {
    return (
        <CardContainer direction='column' spacing={1} component={motion.div} variants={techCardAnimation}>
            <Box component='img' width={70} height={70} maxWidth='100%' maxHeight='100%' src={imgSrc} alt={imgAlt} />

            <Typography variant='h6' gutterBottom>{text}</Typography>
        </CardContainer>
    );
};

const CardContainer = styled(Stack)`
  background-color: ${cardBackground};
  color: #EFFFFF;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0.1rem rgba(0, 0, 0, 0.1);
  transform-origin: left;
` as typeof Stack;

export default TechCard;
