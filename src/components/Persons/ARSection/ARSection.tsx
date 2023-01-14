import { Box, MediaQuery, Text, createStyles } from "@mantine/core";

import ColorBlock from "../reusable/ColorBlock";
import InfoPanel from "../reusable/infoPanel/InfoPanel";
import annaR_big from "../../../assets/ania_big.jpg";
import anna_small from "../../../assets/ania_circle_2.jpg";

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
                src={annaR_big}
                className={classes.image}
                alt="anna_ruszkiewicz_psychoterapia"
              />
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(min-width: 1000px)"
            styles={{ width: "99.9vw", padding: "1rem", display: "none" }}
          >
            <Box className={classes.circleImageContainer}>
              <img
                src={anna_small}
                className={classes.circleImage}
                alt="anna_ruszkiewicz_psychoterapia"
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
              <h1 className={classes.title}>Anna Ruszkiewicz</h1>
              <ColorBlock />
              <Text>
                Jestem{" "}
                <span className={classes.bold}>
                  psycholożką, psychoterapeutką w trakcie szkolenia
                </span>{" "}
                w Szkole Psychoterapii „Crescentia” posiadającej rekomendację
                Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej.
                Ukończyłam roczny cykl szkoleń Terapii Schematu w Centrum
                Psychoterapii i Poradnictwa „Phanari”.
              </Text>
              <Text>
                Prowadzę psychoterapię indywidualną osób dorosłych m.in. w
                takich obszarach jak: zaburzenia lękowe, depresja, niska
                samoocena i poczucie własnej wartości, zaburzenia osobowości,
                trudności w relacjach interpersonalnych oraz emocjonalnych.
                Wspieram także osoby znajdujące się w trudnych sytuacjach
                życiowych i takie, które chciałyby poprawić jakość swojego
                życia.
              </Text>
              <Text>
                W procesie terapeutycznym szczególną wagę przywiązuję do
                budowania relacji opartej na{" "}
                <span className={classes.bold}>zaufaniu i akceptacji</span>.
                Ważne jest też dla mnie{" "}
                <span className={classes.bold}>indywidualne podejście</span> do
                każdej z Osób oraz szacunek dla tempa pracy, którego potrzebuje.
                Stosuję metody oparte na
                <span className={classes.bold}>dowodach naukowych</span>. W
                swojej pracy integruję podejścia terapii
                poznawczo-behawioralnej, a także nurtów trzeciej fali.
                Szczególnie istotna w pracy i bliska mojemu sercu jest{" "}
                <span className={classes.bold}>terapia schematu</span> - zarówno
                w zakresie rozumienia źródeł trudności, jak i stosowanych w niej
                metod opartych na doświadczeniu. Swoją pracę poddaję regularnej{" "}
                <span className={classes.bold}>superwizji</span> i stale
                podnoszę swoje kwalifikacje zawodowe.
              </Text>
              <Text>
                Wychodzę z założenia, że to Ty jesteś ekspertką/ekspertem od
                swojego życia i doświadczenia. Byłabym zaszczycona, gdybym mogła
                towarzyszyć Ci w podróży wiodącej zarówno do bliskiego{" "}
                <span className={classes.bold}>
                  poznawania siebie i swojej wrażliwej części
                </span>
                , jak i prowadzenia bardziej{" "}
                <span className={classes.bold}>satysfakcjonującego życia</span>.
              </Text>
              <Text>
                <span className={classes.bold}>Doświadczenie:</span> Na co dzień
                pracuję jako psycholog na Oddziale Dziennym Psychiatrycznym
                SZPZLO Warszawa Praga- Północ, gdzie prowadzę grupę
                terapeutyczną oraz zajęcia grupowe. Doświadczenie zawodowe
                zdobyłam także pracując w modelu psychiatrii środowiskowej w
                Ośrodku Wsparcia przy Stowarzyszeniu „Pomost” a także w ramach
                telefonu wsparcia dla osób, które doświadczyły straty bliskich
                osób Fundacji „Nagle Sami” oraz w gabinecie prywatnym.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Anna Ruszkiewicz"
          phone={799705505}
          price={160}
          site="https://twojpsycholog.pl/profil-psychologa/anna-ruszkiewicz-2228"
        />
      </div>
    </Box>
  );
};

export default ARSection;
