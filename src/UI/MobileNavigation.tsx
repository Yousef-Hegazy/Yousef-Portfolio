import { Button, Drawer, Stack, styled } from "@mui/material";
import { Callback, TFunction } from "i18next";
import { lazy, useCallback, useState } from "react";
import { PiCaretDoubleLeftBold, PiCaretDoubleRightBold } from "react-icons/pi";

const NavButton = lazy(() => import("./NavButton.tsx"));
const ChangeLanguageButton = lazy(() => import("./ChangeLanguageButton.tsx"));

const MobileNavigation = ({
  t,
  navLinks,
  lang,
  changeLanguage,
}: {
  t: TFunction<"translation", undefined>;
  lang: string;
  navLinks: { path: string; name: string }[];
  changeLanguage: (
    lng?: string | undefined,
    callback?: Callback | undefined
  ) => Promise<TFunction<"translation", undefined>>;
}) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const openMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  return (
    <>
      <Stack direction="row" spacing={1} alignItems="center">
        <ChangeLanguageButton
          t={t}
          lang={lang}
          changeLanguage={changeLanguage}
        />

        <Button
          onClick={openMenu}
          startIcon={
            lang === "ar" ? (
              <PiCaretDoubleRightBold />
            ) : (
              <PiCaretDoubleLeftBold />
            )
          }
          color="inherit"
        >
          {t("nav.navigation")}
        </Button>
      </Stack>

      <SideMenu open={sideMenuOpen} anchor="right" onClose={closeMenu}>
        <Stack direction="column" spacing={3} width="100%">
          {navLinks.map((navLink) => (
            <NavButton
              navLink={navLink}
              key={navLink.name}
              afterNavClick={closeMenu}
              t={t}
            />
          ))}
        </Stack>
      </SideMenu>
    </>
  );
};

export default MobileNavigation;

const SideMenu = styled(Drawer)`
  .MuiPaper-root {
    background-color: rgba(255, 255, 255, 1);
    color: #403d3d;
    border-radius: 1rem 0 0 1rem;
    padding: 1rem;
    width: 300px;
    max-width: 100%;
  }
` as typeof Drawer;
