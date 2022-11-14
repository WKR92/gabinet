import 'transition-style';

import { Box, Image, Text, createStyles } from "@mantine/core";

import React from "react";
import handsImg from "../../assets/hands.jpg";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "100%",
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
  },
  innerContainer: {
    background: "linear-gradient(to right, #1f4037, #99f2c8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    gap: "2rem",
    height: "70vh",
  },
  title: {
    margin: "0",
  },
  textContainer: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexDirection: "column",
  },
  image: {
    margin: "0 4rem",
  }
}));

const Slider: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box id='about' className={classes.mainContainer}>
      <Box className={classes.innerContainer}>
        <Box >
          <Image className={classes.image} height="80vh" width="20vw" src={handsImg} />
        </Box>

        <Box className={classes.textContainer}>
          <Text>
            Jesteśmy zespołem terapeutycznym, którego celem jest tworzenie
            bezpiecznej przestrzeni do odkrywania siebie i przeżywania emocji, a
            także do zmiany i rozwoju. Pracujemy w nurcie poznawczo -
            behawioralnym, integrujemy w swojej pracy podejścia z 3 fali (ACT i
            DBT) oraz Terapię Schematów.
          </Text>
          <Text>
            Dbamy o profesjonalizm usług przygotowując się do zawodu w szkołach
            posiadających rekomendację Polskiego Towarzystwa Terapii Poznawczej
            i Behawioralnej Jesteśmy zrzeszone w towarzystwie terapii CBT, które
            wyznacza wytyczne dotyczące etyki naszej pracy. Pracujemy pod stałą
            superwizją, czyli nadzorem i wsparciem zaawansowanych i
            wykwalifikowanych do tego terapeutów. Łączy nas pasja do
            wykonywanego zawodu, dlatego nieustannie poszerzamy wiedzę na
            szkoleniach i konferencjach.
          </Text>
          <Text>Pracujemy stacjonarnie i online.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
