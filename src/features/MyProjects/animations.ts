import { Variants } from "framer-motion";

export const moreBtnAnimation: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: "180deg",
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};

export const techChipAnimation: Variants = {
  initial: {
    x: "-100%",
    scale: 0.5,
  },
  animate: {
    x: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 200,
    },
  },
};

export const linkBtnVariants: Variants = {
  hover: ({ bgColor }) => ({
    backgroundColor: bgColor,
    color: "rgba(0, 140, 88, 0.86)",
    scale: 1.15,
    transition: {
      scale: { delay: 0.75, duration: 0.2 },
    },
  }),
};

export const linkBtnText: Variants = {
  hover: {
    x: [0, -12, 12],
    rotate: [0, 20, -10, 0],
    y: [0, -4, 0],
    color: "rgba(0, 140, 88, 0.86)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      x: { duration: 0.4 },
      y: { delay: 0.2 },
      rotate: { delay: 0.25, duration: 0.4 },
    },
  },
};

export const linkBtnIcon: Variants = {
  hover: {
    x: 60,
    y: -20,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200,
      delay: 0.4,
      duration: 0.6,
    },
  },
};

export const overlayAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const projectCardAnimation: Variants = {
  initial: {
    opacity: 0,
    y: "110%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const techStackAnimation: Variants = {
  initial: {
    opacity: 0,
    y: "-110%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};
