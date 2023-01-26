import { Box, createStyles } from "@mantine/core";

import About from "../about/About";
import Portrait from "../portait/Portrait";
import Slider from "../slider/Slider";
import Welcome from "../welcome/Welcome";
import adaImg from "../../assets/ada_big.jpg";
import annaImg from "../../assets/ania_big.jpg";
import olaImg from "../../assets/ola_big.jpg";
import olgaImg from "../../assets/olga_big.jpg";

const useStyles = createStyles(() => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Home: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <Welcome />
      <About />
      <Slider>
        <Portrait
          name="Adriana Weremij"
          img={adaImg}
          path="/Adriana_weremij_psychoterapia"
        />
        <Portrait
          name="Olga Jędrzejewicz"
          img={olgaImg}
          path="/olga_jendrzejewicz_psychoterapia"
        />
        <Portrait
          name="Anna Ruszkiewicz"
          img={annaImg}
          path="/anna_ruszkiewicz_psychoterapia"
        />
        <Portrait
          name="Aleksandra Borowa"
          img={olaImg}
          path="/aleksandra_borowa_psychoterapia"
        />
      </Slider>
    </Box>
  );
};

export default Home;
