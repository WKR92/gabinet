import {
  BackgroundImage,
  Box,
  MediaQuery,
  Text,
  createStyles,
} from "@mantine/core";

import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => ({
  mainContainer: {
    width: "25%",
    minHeight: "calc(100vh - 50px)",
  },
  image: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 50px)",
    transition: "all .5s ease",
    cursor: "pointer",
    position: "relative",

    "&:hover": {
      transform: "scale(0.9)",
      [`.${getRef("text")}`]: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
  },
  text: {
    color: "white",
    opacity: "0",
    ref: getRef("text"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .5s ease",
    transform: "translateY(100%)",
    fontSize: "2rem",
    padding: "0 1rem",
  },
}));

interface IPortrait {
  name: string;
  img: string;
  path: string;
}

const Portrait: React.FC<IPortrait> = ({ name, img, path }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const changePath = (path: string) => {
    navigate(path);
  };

  return (
    <MediaQuery
      query="(max-width: 900px)"
      styles={{ minWidth: "300px", flex: "1" }}
    >
      <Box className={classes.mainContainer} onClick={() => changePath(path)}>
        <BackgroundImage className={classes.image} src={img} radius={0}>
          <MediaQuery
            query="(max-width: 1100px) and (min-width: 900px)"
            styles={{ opacity: "1", transform: "translateY(200%)", marginLeft: "0", padding: "0 3rem" }}
          >
            <MediaQuery
              query="(max-width: 900px)"
              styles={{ opacity: "1", transform: "translateY(500%)" }}
            >
              <Text className={classes.text}>{name}</Text>
            </MediaQuery>
          </MediaQuery>
        </BackgroundImage>
      </Box>
    </MediaQuery>
  );
};

export default Portrait;
