import { Box, Typography, TypographyProps } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animatedTextAnimation } from "../animations.ts";

interface Props extends TypographyProps {
    text: string,
    threshold?: number,
    once?: boolean,
}

const AnimatedText = ({ text, threshold = 0.5, once = true, ...rest }: Props) => {
        const ref = useRef<Element>(null);
        const inView = useInView(ref, { amount: threshold, once });

        return (
            <Box component={motion.div}>
                <Typography
                    ref={ref}
                    component={motion.p}
                    initial='initial'
                    animate={inView ? 'animate' : undefined}
                    transition={{ staggerChildren: 0.03 }}
                    {...rest}
                >
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={char + index}
                            variants={animatedTextAnimation}>{char}</motion.span>
                    ))}
                </Typography>
            </Box>
        );
    }
;

export default AnimatedText;
