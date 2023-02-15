import { BackgroundImage, Box, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

import React from "react";
import homeImg from "../../assets/home.jpg";
import homeImgMobile from "../../assets/mobileHome.jpg";
import homeImgMobileExtraSmall from "../../assets//homeImgSuperSmall.jpg";

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
  const hasWindow = typeof window !== "undefined";
  const initialImg =
    window.innerWidth <= 1200
      ? homeImgMobileExtraSmall
      : window.innerWidth <= 1750 && window.innerWidth >= 1201
      ? homeImgMobile
      : homeImg;
  const [image, setImage] = useState(initialImg);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1200) setImage(homeImgMobileExtraSmall);
      if (window.innerWidth <= 1750 && window.innerWidth >= 1201)
        setImage(homeImgMobile);
      if (window.innerWidth >= 1751) setImage(homeImg);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
