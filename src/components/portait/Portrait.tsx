import { BackgroundImage, Box, Text, createStyles } from "@mantine/core";

import React from "react";

const useStyles = createStyles((theme, _params, getRef) => ({
  mainContainer: {
    width: "25%",
    height: "calc(100vh - 50px)",
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
			// boxShadow: "1rem 1rem black",
			[`.${getRef('text')}`]: {
				opacity: "1",
				transform: "translateY(0)"
			},
    },
  },
  text: {
		color: "white",
    opacity: "0",
		ref: getRef('text'),
		display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .5s ease",
		transform: "translateY(100%)",
		fontSize: "2rem",
  },
}));

interface IPortrait {
  name: string;
  img: string;
}

const Portrait: React.FC<IPortrait> = ({ name, img }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <BackgroundImage className={classes.image} src={img} radius={0}>
        <Text className={classes.text}>{name}</Text>
      </BackgroundImage>
    </Box>
  );
};

export default Portrait;
