import { BackgroundImage, Box, createStyles } from "@mantine/core";

import React from "react";
import homeImg from "../../assets/homeImg.png";

const useStyles = createStyles(() => ({
  welcomeContainer: {
    height: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

const Welcome: React.FC = () => {
  const { classes } = useStyles();

  return (
    <BackgroundImage
      transition-style="in:circle:hesitate"
      className={classes.welcomeContainer}
      radius={0}
      src={homeImg}
    ></BackgroundImage>
  );
};

export default Welcome;
