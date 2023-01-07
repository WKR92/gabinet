import { Box, MediaQuery, Text, createStyles } from "@mantine/core";

import ColorBlock from "../reusable/ColorBlock";
import InfoPanel from "../reusable/InfoPanel";
import ada_w_big from "../../../assets/ada_big.jpg";
import ada_w_small from "../../../assets/ada_crircle_2.jpg";

const useStyles = createStyles(() => ({
  mainContainer: {
    maxWidth: "99.9vw",
    height: "auto",
  },
  innerContainer: {
    height: "calc(100vh - 50px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    maxHeight: "calc(100vh - 50px)",
    width: "50%",
  },
  image: {
    objectFit: "fill",
    width: "70%",
    maxHeight: "80%",
  },
  descriptionArea: {
    padding: "0 2rem 2rem 0 ",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flex: "1",
    minWidth: "0",
    maxHeight: "calc(100vh - 50px)",
    width: "50%",
    overflowY: "auto",
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: "40px",
    margin: "0px",
  },
  firstText: {
    marginTop: "1rem",
  },
  circleImageContainer: {
    padding: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    maxHeight: "fit-content",
  },
  circleImage: {
    width: "70%",
    maxHeight: "80%",
  },
}));

const ARSection: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <MediaQuery
        query="(max-width: 1000px)"
        styles={{ flexDirection: "column", height: "100%" }}
      >
        <Box className={classes.innerContainer}>
          <MediaQuery
            query="(max-width: 1000px)"
            styles={{ width: "99vw", padding: "1rem", display: "none" }}
          >
            <Box className={classes.imageContainer}>
              <img
                src={ada_w_big}
                className={classes.image}
                alt="adrianna_weremij_psychoterapia"
              />
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(min-width: 1000px)"
            styles={{ width: "99.9vw", padding: "1rem", display: "none" }}
          >
            <Box className={classes.circleImageContainer}>
              <img
                src={ada_w_small}
                className={classes.circleImage}
                alt="adrianna_weremij_psychoterapia"
              />
            </Box>
          </MediaQuery>

          <MediaQuery
            query="(max-width: 1000px)"
            styles={{
              width: "99.9vw",
              padding: "1rem",
              maxHeight: "fit-content",
              overflow: "hidden",
            }}
          >
            <Box
              transition-style="in:wipe:top-right"
              className={classes.descriptionArea}
            >
              <h1 className={classes.title}>Adriana Weremij</h1>
              <ColorBlock />
              <Text className={classes.firstText}>
                Z wykształcenia jestem psycholożką. Ukończyłam 4 letnie
                szkolenie w nurcie terapii poznawczo-behawioralnej, odbyłam cykl
                szkoleń z Terapii Schematu oraz terapii ACT. Doświadczenie
                zdobywałam pracując na oddziale psychiatrycznym oraz w
                praktykując w prywatnych gabinetach. Pracuję pod stałą
                superwizją, aktywnie uczestniczę w dodatkowych szkoleniach z
                różnych zakresów psychologii aby poszerzać wiedzę i kompetencje.
                W ramach dbałości o jakość mojej pracy jestem również w procesie
                terapii własnej.
              </Text>
              <Text>
                W swojej pracy stawiam przede wszystkim na indywidualne
                podejście do każdego pacjenta. Moją główną bazą jest Terapia
                Schematów oraz techniki poznawczo-behawioralne, ale w swoim
                podejściu integruje również techniki oparte na uważności,
                psychoedukację z zakresu regulacji emocji, neuropsychologii a
                także pracy z ciałem szukając w porozumieniu z klientem
                najlepszych form pomocy. Ponad stosowanymi technikami
                najważniejsza dla mnie jest relacja z drugim człowiekiem oparta
                na zaufaniu, otwartości na jego potrzeby, wyznawane wartości
                oraz zasoby indywidualne, które postrzegam jako motor napędowy
                do pokonywania trudności.
              </Text>
              <Text>
                Prowadzę regularną psychoterapię (cotygodniowe spotkanie
                trwające 50 min.) oraz konsultacje psychologiczne (jedno lub
                kilka spotkań dla osób potrzebujących doraźnej pomocy). Pracuję
                tylko z osobami pełnoletnimi.
              </Text>
              <Text>
                Obszary, w których prowadzę psychoterapię to depresja,
                zaburzenia lękowe, zaburzenia osobowości, perfekcjonizm, niska
                samoocena, trudności w regulacji emocji, trudności w relacjach
                interpersonalnych. Prowadzę również konsultacje psychologiczne z
                obszaru ogólnego rozwoju osobistego, pracy nad kompetencjami
                miękkimi, a także z poczuciem wypalenia zawodowego, trudności w
                radzeniu sobie ze stresem oraz trudności psychologicznych w
                obszarze relacji z jedzeniem.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Adrianna Weremij"
          phone={123456789}
          priceFirst={120}
          priceRegular={150}
        />
      </div>
    </Box>
  );
};

export default ARSection;
