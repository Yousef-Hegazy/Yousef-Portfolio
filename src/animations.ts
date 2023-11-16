import { Variants } from "framer-motion";

export const pageAnimation: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export const frameAnimation: Variants = {
    initial: {
        x: '-130%',
        skew: '45deg',
    },
    animate: {
        x: '100%',
        skew: '0deg',
        transition: {
            duration: 0.4,
        }
    }
}

export const animatedTextAnimation: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.03
        }
    },
};
