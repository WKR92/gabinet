import { BackgroundImage, Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

import React from "react";
import homeImg from "../../assets/home.jpg";
import homeImgMobile from "../../assets/mobileHome.jpg"

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
  const hasWindow = typeof window !== 'undefined';
  const [image, setImage] = useState(homeImg);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 899) setImage(homeImgMobile);
      if (window.innerWidth >= 900) setImage(homeImg);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]);

  return (
    <BackgroundImage
      transition-style="in:circle:hesitate"
      className={classes.welcomeContainer}
      radius={0}
      src={image}
    ></BackgroundImage>
  );
};

export default Welcome;
