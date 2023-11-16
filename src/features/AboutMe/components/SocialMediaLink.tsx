import { Box, Stack, styled, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { socialMediaAnimation } from "../animations";

const LinkStyle = styled(Stack)(
  ({ theme }) => `
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 1.7rem;
  border-radius: 99px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  box-shadow: 0 0.4rem 0.8rem 0.1rem rgba(0, 0, 0, 0.15);
  transition: background-color 0.2s ease-out;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${theme.breakpoints.down("sm")} { 
    width: 2rem;
    height: 2rem;
    padding: 1.5rem;
  }
`
) as typeof Stack;

interface Props {
  link: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  type?: "email" | "link";
}

const SocialMediaLink = ({
  link,
  imgSrc,
  imgAlt,
  name,
  type = "link",
}: Props) => {
  return (
    <Tooltip title={name}>
      <LinkStyle
        component={motion.a}
        variants={socialMediaAnimation}
        href={link}
        target={type === "email" ? "_self" : "_blank"}
      >
        <Box
          component="img"
          width={32}
          height={32}
          src={imgSrc}
          alt={imgAlt}
          borderRadius={2}
        />
      </LinkStyle>
    </Tooltip>
  );
};

export default SocialMediaLink;
