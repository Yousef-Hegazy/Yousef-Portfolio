import { Box, LinearProgress, styled } from "@mui/material";

const PageLoader = () => {
  return (
    <LoaderContainer>
      <LinearProgress />
    </LoaderContainer>
  );
};

const LoaderContainer = styled(Box)`
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
` as typeof Box;

export default PageLoader;
