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
                Z wykszta??cenia jestem psycholo??k??. Uko??czy??am 4 letnie
                szkolenie w nurcie terapii poznawczo-behawioralnej, odby??am cykl
                szkole?? z Terapii Schematu oraz terapii ACT. Do??wiadczenie
                zdobywa??am pracuj??c na oddziale psychiatrycznym oraz w
                praktykuj??c w prywatnych gabinetach. Pracuj?? pod sta????
                superwizj??, aktywnie uczestnicz?? w dodatkowych szkoleniach z
                r????nych zakres??w psychologii aby poszerza?? wiedz?? i kompetencje.
                W ramach dba??o??ci o jako???? mojej pracy jestem r??wnie?? w procesie
                terapii w??asnej.
              </Text>
              <Text>
                W swojej pracy stawiam przede wszystkim na indywidualne
                podej??cie do ka??dego pacjenta. Moj?? g????wn?? baz?? jest Terapia
                Schemat??w oraz techniki poznawczo-behawioralne, ale w swoim
                podej??ciu integruje r??wnie?? techniki oparte na uwa??no??ci,
                psychoedukacj?? z zakresu regulacji emocji, neuropsychologii a
                tak??e pracy z cia??em szukaj??c w porozumieniu z klientem
                najlepszych form pomocy. Ponad stosowanymi technikami
                najwa??niejsza dla mnie jest relacja z drugim cz??owiekiem oparta
                na zaufaniu, otwarto??ci na jego potrzeby, wyznawane warto??ci
                oraz zasoby indywidualne, kt??re postrzegam jako motor nap??dowy
                do pokonywania trudno??ci.
              </Text>
              <Text>
                Prowadz?? regularn?? psychoterapi?? (cotygodniowe spotkanie
                trwaj??ce 50 min.) oraz konsultacje psychologiczne (jedno lub
                kilka spotka?? dla os??b potrzebuj??cych dora??nej pomocy). Pracuj??
                tylko z osobami pe??noletnimi.
              </Text>
              <Text>
                Obszary, w kt??rych prowadz?? psychoterapi?? to depresja,
                zaburzenia l??kowe, zaburzenia osobowo??ci, perfekcjonizm, niska
                samoocena, trudno??ci w regulacji emocji, trudno??ci w relacjach
                interpersonalnych. Prowadz?? r??wnie?? konsultacje psychologiczne z
                obszaru og??lnego rozwoju osobistego, pracy nad kompetencjami
                mi??kkimi, a tak??e z poczuciem wypalenia zawodowego, trudno??ci w
                radzeniu sobie ze stresem oraz trudno??ci psychologicznych w
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
