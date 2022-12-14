import { Box, MediaQuery, Text, createStyles } from "@mantine/core";

import ColorBlock from "../reusable/ColorBlock";
import InfoPanel from "../reusable/InfoPanel";
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
                  psycholo??k??, psychoterapeutk?? w trakcie szkolenia
                </span>{" "}
                w Szkole Psychoterapii ???Crescentia??? posiadaj??cej rekomendacj??
                Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej.
                Uko??czy??am roczny kurs technik Terapii Schematu w Centrum
                Psychoterapii i Poradnictwa ???Phanari???.
              </Text>
              <Text>
                W procesie terapeutycznym szczeg??ln?? wag?? przywi??zuj?? do
                budowania relacji opartej na{" "}
                <span className={classes.bold}>zaufaniu i akceptacji</span>.
                Wa??ne jest te?? dla mnie{" "}
                <span className={classes.bold}>indywidualne podej??cie</span> do
                ka??dej z Os??b oraz szacunek dla tempa pracy, kt??rego potrzebuje.
                Stosuj?? metody oparte na
                <span className={classes.bold}>dowodach naukowych</span>. W
                swojej pracy integruj?? podej??cia terapii
                poznawczo-behawioralnej, a tak??e nurt??w trzeciej fali.
                Szczeg??lnie istotna w pracy i bliska mojemu sercu jest{" "}
                <span className={classes.bold}>terapia schematu</span> - zar??wno
                w zakresie rozumienia ??r??de?? trudno??ci, jak i stosowanych w niej
                metod opartych na do??wiadczeniu. Swoj?? prac?? poddaj?? regularnej{" "}
                <span className={classes.bold}>superwizji</span> i stale
                podnosz?? swoje kwalifikacje zawodowe.
              </Text>
              <Text>
                Prowadz?? psychoterapi?? indywidualn?? os??b doros??ych m.in. w
                takich obszarach jak: zaburzenia l??kowe, depresja, niska
                samoocena i poczucie w??asnej warto??ci, zaburzenia osobowo??ci,
                trudno??ci w relacjach interpersonalnych oraz emocjonalnych.
                Wspieram tak??e osoby znajduj??ce si?? w trudnych sytuacjach
                ??yciowych i takie, kt??re chcia??yby poprawi?? jako???? swojego
                ??ycia.
              </Text>
              <Text>
                Wychodz?? z za??o??enia, ??e to Ty jeste?? ekspertk??/ekspertem od
                swojego ??ycia i do??wiadczenia. By??abym zaszczycona, gdybym mog??a
                towarzyszy?? Ci w podr????y wiod??cej zar??wno do bliskiego{" "}
                <span className={classes.bold}>
                  poznawania siebie i swojej wra??liwej cz????ci
                </span>
                , jak i prowadzenia bardziej{" "}
                <span className={classes.bold}>satysfakcjonuj??cego ??ycia</span>.
              </Text>
              <Text>
                Do??wiadczenie: Na co dzie?? pracuj?? jako psycholog na Oddziale
                Dziennym Psychiatrycznym SZPZLO Warszawa Praga- P????noc, gdzie
                prowadz?? grup?? terapeutyczn?? oraz zaj??cia grupowe. Do??wiadczenie
                zawodowe zdoby??am tak??e pracuj??c w modelu psychiatrii
                ??rodowiskowej w O??rodku Wsparcia przy Stowarzyszeniu ???Pomost??? a
                tak??e w ramach telefonu wsparcia dla os??b, kt??re do??wiadczy??y
                straty bliskich os??b Fundacji ???Nagle Sami??? oraz w gabinecie
                prywatnym.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Anna Ruszkiewicz"
          phone={123456789}
          priceFirst={120}
          priceRegular={150}
        />
      </div>
    </Box>
  );
};

export default ARSection;
