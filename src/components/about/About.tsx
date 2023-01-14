import "transition-style";

import { Box, Image, MediaQuery, Text, createStyles } from "@mantine/core";

import React from "react";
import handsHorizontalImg from "../../assets/hands_horizontal.jpg";
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
    flexDirection: "column",
    gap: "1.5rem",
    maxHeight: "90%",
    overflowY: "auto",
    padding: "0 2rem 0 0",
  },
  image: {
    margin: "0 4rem",
  },
  image2Container: {
    width: "99.9vw",
    overflow: "hidden",
    marginTop: "-1.5rem",
    display: "flex",
    justifyContent: "center",
  },
  image2: {
    width: "70%",
  },
  bold: {
    fontWeight: "bold",
  },
}));

const Slider: React.FC = () => {
  const { classes } = useStyles();

  return (
    <MediaQuery
      query="(max-width: 1000px)"
      styles={{
        padding: "4rem 0",
        minHeight: "fit-content",
        display: "inline-block",
      }}
    >
      <Box id="about" className={classes.mainContainer}>
        <MediaQuery
          query="(max-width: 1000px)"
          styles={{ padding: "2rem 1rem", height: "fit-content" }}
        >
          <Box className={classes.innerContainer}>
            <MediaQuery
              query="(max-width: 1000px)"
              styles={{ display: "none" }}
            >
              <Box>
                <Image
                  className={classes.image}
                  height="80vh"
                  width="20vw"
                  src={handsImg}
                />
              </Box>
            </MediaQuery>
            <MediaQuery
              query="(max-width: 1000px)"
              styles={{ padding: "1rem", maxHeight: "fit-content" }}
            >
              <Box className={classes.textContainer}>
                <h3 className={classes.title}>O nas:</h3>
                <Text>
                  Jesteśmy zespołem terapeutycznym, którego celem jest tworzenie
                  bezpiecznej przestrzeni do odkrywania siebie i przeżywania
                  emocji, a także do zmiany i rozwoju. Pracujemy w nurcie
                  poznawczo - behawioralnym, integrujemy w swojej pracy
                  podejścia z trzeciej fali (ACT i DBT) oraz terapię schematu.
                </Text>
                <Text>
                  Dbamy o profesjonalizm usług kształcąc się w szkołach
                  posiadających rekomendację Polskiego Towarzystwa Terapii
                  Poznawczej i Behawioralnej. Jesteśmy zrzeszone w towarzystwie
                  terapii CBT, które wyznacza wytyczne dotyczące etyki naszej
                  pracy. Pracujemy pod stałą superwizją, czyli nadzorem i
                  wsparciem zaawansowanych i wykwalifikowanych terapeutów. Łączy
                  nas pasja do wykonywanego zawodu, dlatego nieustannie
                  poszerzamy wiedzę na szkoleniach i konferencjach.
                </Text>
                <Text>
                  Pracujemy stacjonarnie w gabinecie na warszawskim Powiślu oraz
                  online.
                </Text>
              </Box>
            </MediaQuery>
          </Box>
        </MediaQuery>
        <MediaQuery query="(min-width: 999px)" styles={{ display: "none" }}>
          <Box className={classes.image2Container}>
            <img className={classes.image2} src={handsHorizontalImg} />
          </Box>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
};

export default Slider;
