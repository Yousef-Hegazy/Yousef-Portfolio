import { linkBtnIcon, linkBtnText, linkBtnVariants } from "../animations.ts";
import { motion } from "framer-motion";
import { JSX } from "react";
import { Box, styled } from "@mui/material";

interface LinkButtonProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

const LinkButton = ({ href, icon, text }: LinkButtonProps) => {
  return (
    <StyledLinkButton
      dir="ltr"
      component={motion.a}
      onClick={(e) => e.stopPropagation()}
      variants={linkBtnVariants}
      whileHover="hover"
      href={href}
      target="_blank"
      custom={{ bgColor: "#e7fff7" }}
    >
      <motion.span variants={linkBtnText}>{text}</motion.span>
      <motion.div variants={linkBtnIcon}>{icon}</motion.div>
    </StyledLinkButton>
  );
};

const StyledLinkButton = styled(Box)`
  outline: 2px solid #e7fff7;
  padding: 0.5rem 0.8rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
` as typeof Box;

export default LinkButton;
