import {
  BackgroundImage,
  Box,
  Group,
  Header,
  Image,
  MediaQuery,
  Text,
  createStyles,
} from "@mantine/core";

import About from "../about/About";
import { Link } from "react-scroll";
import Portrait from "../portait/Portrait";
import Slider from "../slider/Slider";
import Welcome from "../welcome/Welcome";
import annaImg from "../../assets/Anna.jpg";
import homeImg from "../../assets/homeImg.png";
import sofaImg from "../../assets/sofa.jpg";

const useStyles = createStyles(() => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
  }
}));

const Home: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <Welcome />
      <About />
      <Slider>
        <Portrait name="Anna Ruszkiewicz" img={annaImg} />
        <Portrait name="Aleksandra Borowa" img={homeImg} />
        <Portrait name="Sanczo Pansa" img={sofaImg} />
        <Portrait name="Lord Vader" img={homeImg} />
      </Slider>
    </Box>
  );
};

export default Home;
