import { Box } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedText from "../../UI/AnimatedText";
import Frame from "../../UI/Frame";
import { pageAnimation } from "../../animations";
import { Certificate } from "./models";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

const CertificatesCarousel = lazy(
  () => import("./components/CertificatesCarousel")
);

const certificates: Certificate[] = [
  {
    title: "certificates.graduation",
    img: "/graduation-cert.jpg",
  },
  {
    title: "certificates.SCE",
    img: "/sec-cert.jpg",
  },
  {
    title: "certificates.reactNative",
    img: "/react-native-cert.jpg",
  },
  {
    title: "certificates.react",
    img: "/react-cert.jpg",
  },
  {
    title: "certificates.next",
    img: "/next-cert.jpg",
  },
];

export const Component = () => {
  const { t, i18n: {language: lang} } = useTranslation();

  return (
    <>
      <Box
        component={motion.div}
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        px={3}
        py={4}
      >
        <Frame backgroundColor="rgba(255, 255, 255, 0.2)" />

        <AnimatedText
          variant="h6"
          text={t("certificates.title")}
          textAlign="center"
        />

        <CertificatesCarousel certificates={certificates} t={t} lang={lang} />
      </Box>
    </>
  );
};
