import { Box, styled } from "@mui/material";
import { titleTextColor } from "./colors.ts";
import { motion } from "framer-motion";
import { frameAnimation } from "../animations.ts";

const Frame = ({ backgroundColor = titleTextColor }: { backgroundColor?: string; }) => {
    return (
        <StyledFrame component={motion.div} variants={frameAnimation} bgcolor={backgroundColor} />
    );
};

const StyledFrame = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
` as typeof Box;

export default Frame;
