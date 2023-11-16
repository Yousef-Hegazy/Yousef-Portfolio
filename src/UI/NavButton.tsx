import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { TFunction } from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TextUnderline } from "./commonStyles.tsx";

const NavButton = ({
  navLink,
  afterNavClick = undefined,
  t,
}: {
  navLink: { path: string; name: string; icon: ReactNode };
  afterNavClick?: () => void;
  t: TFunction<"translation", undefined>;
}) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname === navLink.path);
  }, [location.pathname]);

  return (
    <Stack component={motion.div} layout direction="column" spacing={1}>
      <Button
        disableRipple
        startIcon={navLink.icon}
        color="inherit"
        component={Link}
        to={navLink.path}
        variant={active ? "contained" : "text"}
        onClick={afterNavClick}
      >
        {t(navLink.name)}
      </Button>

      {active ? (
        <TextUnderline
          component={motion.div}
          layoutId="underline"
          bgcolor="#007a11c4"
        />
      ) : null}
    </Stack>
  );
};

export default NavButton;
