import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TFunction } from "i18next";
import { useCallback } from "react";
import { titleTextColor } from "../../../UI/colors";
import { Certificate } from "../models";

const CertificateCard = ({
  certificate,
  scaleImage,
  t,
}: {
  certificate: Certificate;
  scaleImage: (src: string) => void;
  t: TFunction<"translation", undefined>;
}) => {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleScaleImage = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      scaleImage(certificate.img);
    },
    [certificate.img, scaleImage]
  );

  return (
    <StyledCard>
      <CertImage
        component="img"
        src={certificate.img}
        alt={t(certificate.title)}
        onClick={handleScaleImage}
      />
      <CardContent>
        <Tooltip
          disableHoverListener={largeScreen}
          title={
            <Typography textAlign="center">{t(certificate.title)}</Typography>
          }
        >
          <Typography
            color={titleTextColor}
            gutterBottom
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            noWrap
          >
            {t(certificate.title)}
          </Typography>
        </Tooltip>
      </CardContent>
    </StyledCard>
  );
};

export default CertificateCard;

const StyledCard = styled(Card)`
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
` as typeof Card;

const CertImage = styled(CardMedia)(
  ({ theme }) => `
    height: 400px;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: contain;
    cursor: pointer;
  
    ${theme.breakpoints.down("sm")} {
      height: 280px;
    }
  `
) as typeof CardMedia;
