import { Variants } from "framer-motion";

export const introSectionAnimation: Variants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
};

export const imgAnimation: Variants = {
    initial: {
        opacity: 0,
        scale: 1.6,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.5,
        },
    },
};

export const introTitleAnimation: Variants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 100,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.7,
        },
    },
};

export const introTextAnimation: Variants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 100,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.7,
        },
    },
};

export const socialMediaAnimation: Variants = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 100,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.6,
            stiffness: 150,
            damping: 6,
        },
    },
    hover: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: {
            delay: 0,
        },
    },
};

export const aboutSectionAnimation: Variants = {
    initial: {
        opacity: 0,
        y: -60,
    },
    animate: {
        opacity: 1,
        y: 0,

        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
            ease: "easeOut",
            duration: 0.4,
        },
    },
};

export const aboutTitleAnimation: Variants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 100,
        x: 0,
    },
};

export const underlineAnimation: Variants = {
    initial: {
        scaleX: 0,
    },
    animate: {
        scaleX: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'linear',
        }
    },
};

export const aboutTextAnimation: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
};

export const arrowAnimation: Variants = {
    initial: {
        x: 0,
    },
    animate: {
        x: 4,
    },
}
