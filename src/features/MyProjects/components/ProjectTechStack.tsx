import {
  Box,
  Paper,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { titleTextColor } from "../../../UI/colors.ts";
import { BsBack, BsFront } from "react-icons/bs";
import Grid2 from "@mui/material/Unstable_Grid2";
import { TechStackModel as TechStackModel } from "../models.ts";
import { motion } from "framer-motion";
import { techChipAnimation, techStackAnimation } from "../animations.ts";

type TechsType = "frontend" | "backend";

const TechsGrid = ({
  techStack,
  activeTab,
}: {
  techStack: TechStackModel;
  activeTab: TechsType;
}) => {
  return (
    <StyledGridContainer
      component={Paper}
      container
      rowSpacing={1.5}
      columnSpacing={1}
    >
      {techStack[activeTab].map((stack: string) => (
        <Grid2 key={stack} xs={12} sm={4} md={3} overflow="hidden">
          <StyledChip component={motion.div} variants={techChipAnimation}>
            <Typography textAlign="center">{stack}</Typography>
          </StyledChip>
        </Grid2>
      ))}
    </StyledGridContainer>
  );
};

const projectTypes: { frontend: "frontend"; backend: "backend" } = {
  frontend: "frontend",
  backend: "backend",
};

const ProjectTechStack = ({ techStack }: { techStack: TechStackModel }) => {
  const [activeTab, setActiveTab] = useState<TechsType>(projectTypes.frontend);

  return (
    <Stack
      component={motion.div}
      variants={techStackAnimation}
      direction="column"
      width="100%"
    >
      <StyledTabs component={Paper} value={activeTab} variant="fullWidth">
        <StyledTab
          disableRipple
          icon={<BsFront />}
          value={projectTypes.frontend}
          label="Frontend"
          onClick={() => setActiveTab(projectTypes.frontend)}
          iconPosition="start"
        />

        <StyledTab
          disableRipple
          icon={<BsBack />}
          value={projectTypes.backend}
          label="Backend"
          onClick={() => setActiveTab(projectTypes.backend)}
          iconPosition="start"
        />
      </StyledTabs>

      <TechsGrid techStack={techStack} activeTab={activeTab} />
    </Stack>
  );
};

const StyledTabs = styled(Tabs)`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;

  & .MuiTabs-indicator {
    background-color: ${titleTextColor};
  }
` as typeof Tabs;

const StyledTab = styled(Tab)`
  text-transform: none;

  &.Mui-selected {
    color: ${titleTextColor};
    font-weight: bold;
  }
` as typeof Tab;

const StyledGridContainer = styled(Grid2)`
  width: 100%;
  margin: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem 2rem;
` as typeof Grid2;

const StyledChip = styled(Box)`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  outline: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  color: rgba(0, 0, 0, 0.7);
  cursor: default;
  transform: translateX(-100%) scale(0.2);

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 0.9);
  }
` as typeof Box;

export default ProjectTechStack;
