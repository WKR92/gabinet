import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  colorBlock: {
    width: "10rem",
    height: "16px",
    background: "linear-gradient(to right, #1f4037, #99f2c8)",
  },
  p: {
    visibility: "hidden",
    margin: "0",
  },
}));

const ColorBlock: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.colorBlock}>
      <p className={classes.p}>0</p>
    </div>
  );
};

export default ColorBlock;
