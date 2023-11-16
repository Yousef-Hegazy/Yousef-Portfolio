import { Tooltip, Typography, IconButton, useTheme, Box } from "@mui/material";
import { TFunction, Callback } from "i18next";

const ChangeLanguageButton = ({
    t,
    lang,
    changeLanguage,
  }: {
    t: TFunction<"translation", undefined>;
    lang: string;
    changeLanguage: (
      lng?: string | undefined,
      callback?: Callback | undefined
    ) => Promise<TFunction<"translation", undefined>>;
  }) => {
    const theme = useTheme();
  
    const handleChangeLang = () => {
      document.dir = lang === "ar" ? "ltr" : "rtl";
      theme.direction = lang === "ar" ? "ltr" : "rtl";
      changeLanguage(lang === "ar" ? "en" : "ar");
    };
  
    return (
      <Tooltip title={<Typography>{t("other_language_name")}</Typography>}>
        <IconButton onClick={handleChangeLang}>
          {lang === "ar" ? (
            <Box
              key="langauge"
              component="img"
              src="/en-usa.svg"
              width="1.5rem"
              height="auto"
              alt="english"
              display="block"
              borderRadius="3px"
            />
          ) : (
            <Box
              key="langauge"
              component="img"
              src="/ar-ksa.svg"
              width="1.5rem"
              height="auto"
              alt="arabic"
              display="block"
              borderRadius="3px"
            />
          )}
        </IconButton>
      </Tooltip>
    );
  };

  export default ChangeLanguageButton;