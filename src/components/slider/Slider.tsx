import {
	Box,
	createStyles,
} from "@mantine/core";

import React from "react";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "100%",
		height: "calc(100vh - 50px)",
		display: "flex",
		alignItems: "center",
  },
}));

interface ISlider {
	children: React.ReactNode;
}

const Slider: React.FC<ISlider> = ({ children }) => {
  const { classes } = useStyles();

  return <Box id='slider' className={classes.mainContainer}>{children}</Box>;
};

export default Slider;
