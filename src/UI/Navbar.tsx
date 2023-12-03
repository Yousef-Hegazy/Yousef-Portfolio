import {
  AppBar,
  Stack,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import {
  PiCertificateFill,
  PiSquaresFourFill,
  PiStackFill,
  PiUserListFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import routeNames from "../router/routeNames.ts";

const NavButton = lazy(() => import("./NavButton.tsx"));
const ChangeLanguageButton = lazy(() => import("./ChangeLanguageButton.tsx"));
const MobileNavigation = lazy(() => import("./MobileNavigation.tsx"));

const navLinks = [
  {
    path: routeNames.home,
    name: "links.about",
    icon: <PiUserListFill />,
  },
  {
    path: routeNames.techStack,
    name: "links.techStack",
    icon: <PiStackFill />,
  },
  {
    path: routeNames.myProjects,
    name: "links.myProjects",
    icon: <PiSquaresFourFill />,
  },
  {
    path: routeNames.certificates,
    name: "links.certificates",
    icon: <PiCertificateFill />,
  },
];

const Navbar = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const {
    t,
    i18n: { language: lang, changeLanguage },
  } = useTranslation();

  return (
    <MyAppBar position="sticky">
      <StyledToolbar>
        <Typography fontWeight="bold" fontFamily="Marck Script" variant="h5">
          <LogoLink to="/">Yousef.dev</LogoLink>
        </Typography>
        {md ? (
          <MobileNavigation
            t={t}
            lang={lang}
            navLinks={navLinks}
            changeLanguage={changeLanguage}
          />
        ) : (
          <Stack direction="row" spacing={1} alignItems="center">
            <ChangeLanguageButton
              t={t}
              lang={lang}
              changeLanguage={changeLanguage}
            />

            {navLinks.map((navLink) => (
              <NavButton navLink={navLink} key={navLink.name} t={t} />
            ))}
          </Stack>
        )}
      </StyledToolbar>
    </MyAppBar>
  );
};

const MyAppBar = styled(AppBar)`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  border-radius: 0 0 5px 5px;
  color: #403d3d;
  z-index: 10;
  overflow: hidden;
` as typeof AppBar;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledToolbar = styled(Toolbar)`
  gap: 1rem;
  justify-content: space-between;
` as typeof Toolbar;

export default Navbar;
