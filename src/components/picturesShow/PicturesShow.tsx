import { Box, MediaQuery, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";

import { Carousel } from "@mantine/carousel";
import React from "react";
import gabinet1 from "../../assets/gabinetx1.jpg";
import gabinet2 from "../../assets/gabinetx2.jpg";
import gabinet3 from "../../assets/gabinetx3.jpg";
import gabinet4 from "../../assets/gabinetx4.jpg";
import gabinet5 from "../../assets/gabinetx5.jpg";
import gabinet6 from "../../assets/gabinetx6.jpg";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "100vw",
    maxHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  innerContainer: {
    marginTop: "1rem",
    width: "100%",
    maxHeight: "calc(100vh - 50px)",
    padding: "1rem 0",
  },
  img: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  g1: {
    backgroundImage: `url(${gabinet1})`,
  },
  g2: {
    backgroundImage: `url(${gabinet2})`,
  },
  g3: {
    backgroundImage: `url(${gabinet3})`,
  },
  g4: {
    backgroundImage: `url(${gabinet4})`,
  },
  g5: {
    backgroundImage: `url(${gabinet5})`,
  },
  g6: {
    backgroundImage: `url(${gabinet6})`,
  },
}));

const PicturesShow: React.FC = () => {
  const { classes } = useStyles();
  const initialH =
    window.innerWidth <= 499
      ? window.innerHeight * 0.3
      : window.innerWidth <= 899 && window.innerWidth >= 500
      ? window.innerHeight * 0.4
      : window.innerWidth >= 899 && window.innerWidth >= 1100
      ? window.innerHeight * 0.6
      : window.innerHeight * 0.8;
  const [h, setH] = useState(initialH);
  const [w, setW] = useState(window.innerWidth);
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    setW(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth <= 499) setH(window.innerHeight * 0.3);
    if (window.innerWidth <= 899 && window.innerWidth >= 500)
      setH(window.innerHeight * 0.4);
    if (window.innerWidth >= 899 && window.innerWidth >= 1100)
      setH(window.innerHeight * 0.6);
    if (window.innerWidth >= 1100) setH(window.innerHeight * 0.8);

    function handleResize() {
      if (window.innerWidth <= 499) setH(window.innerHeight * 0.3);
      if (window.innerWidth <= 899 && window.innerWidth >= 500)
        setH(window.innerHeight * 0.4);
      if (window.innerWidth >= 899 && window.innerWidth >= 1100)
        setH(window.innerHeight * 0.6);
      if (window.innerWidth >= 1100) setH(window.innerHeight * 0.8);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.innerContainer}>
        <Carousel
          sx={{ maxWidth: "95vw" }}
          mx={"auto"}
          withIndicators
          slideSize={w < 700 ? "100%" : "70%"}
          height={h}
          slideGap="lg"
          loop
        >
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g1}`}></div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g2}`}></div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g3}`}></div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g4}`}></div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g5}`}></div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className={`${classes.img} ${classes.g6}`}></div>
          </Carousel.Slide>
        </Carousel>
      </Box>
    </Box>
  );
};

export default PicturesShow;
