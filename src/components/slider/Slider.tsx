import { Box, MediaQuery, createStyles } from "@mantine/core";

import React from "react";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "100%",
    height: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

interface ISlider {
  children: React.ReactNode;
}

const Slider: React.FC<ISlider> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <MediaQuery query="(max-width: 900px)" styles={{ height: "fit-content" }}>
      <Box id="slider" className={classes.mainContainer}>
        {children}
      </Box>
    </MediaQuery>
  );
};

export default Slider;
