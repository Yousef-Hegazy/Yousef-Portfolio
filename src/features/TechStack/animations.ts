import { Variants } from "framer-motion";


export const techTitleAnimation: Variants = {
    initial: {
        y: '-100%',
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            when: 'beforeChildren',
        }
    },
};

export const techOutroAnimation: Variants = {
    initial: {
        y: '150%',
    },
    animate: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            when: 'beforeChildren',
        }
    },
};

export const techStackWordAnimation: Variants = {
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        }
    },
};

export const techCardAnimation: Variants = {
    initial: {
        scale: 0.7,
        x: '-120%',
    },
    animate: {
        scale: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.2,
        }
    },
};