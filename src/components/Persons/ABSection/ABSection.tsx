import { Box, MediaQuery, Text, createStyles } from "@mantine/core";

import ColorBlock from "../reusable/ColorBlock";
import InfoPanel from "../reusable/InfoPanel";
import ola_b_big from "../../../assets/ola_big.jpg";
import ola_b_small from "../../../assets/ola_b_small_2.jpg";

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
                src={ola_b_big}
                className={classes.image}
                alt="aleksandra_borowa_psychoterapia"
              />
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(min-width: 1000px)"
            styles={{ width: "99.9vw", padding: "1rem", display: "none" }}
          >
            <Box className={classes.circleImageContainer}>
              <img
                src={ola_b_small}
                className={classes.circleImage}
                alt="aleksandra_borowa_psychoterapia"
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
              <h1 className={classes.title}>Aleksandra Borowa</h1>
              <ColorBlock />
              <Text className={classes.firstText}>
                Jestem psycholo??k??, psychoterapeutk?? w trakcie szkolenia.
                Absolwentk?? psychologii na Uniwersytecie Warszawskim. Szkolenie
                psychoterapeutyczne odbywam w szkole terapii
                poznawczo-behawioralnej ???Crescentia??? rekomendowanej przez
                Polskie Towarzystwo Terapii Poznawczej i Behawioralnej.
              </Text>
              <Text>
                Na co dzie?? pracuj?? na Oddziale Dziennym Psychiatrycznym SZPZLO
                Warszawa Praga-P????noc. Jestem w trakcie rocznego szkolenia z
                Terapii Schemat??w w Centrum Psychoterapii i Poradnictwa
                ???Phanari???.
              </Text>
              <Text>
                Pomagam osobom w odkrywaniu i poszerzaniu ??wiadomo??ci
                dotycz??cych w??asnych emocji i potrzeb, a tak??e zmagaj??cymi si?? z
                l??kiem, fobiami, poczuciem d??ugotrwa??ego smutku, depresj??, nisk??
                samoocen?? i poczuciem w??asnej warto??ci. Wspieram osoby
                do??wiadczaj??ce silnego stresu, napi??cia, a tak??e kryzysu w ??yciu
                zawodowym oraz osobistym. Pomagam w trudno??ciach zwi??zanymi z
                budowaniem relacji.
              </Text>
              <Text>
                W terapii najwa??niejsze jest dla mnie zbudowanie relacji opartej
                na poczuciu bezpiecze??stwa i akceptacji. Stosuj?? metody oparte
                na dowodach naukowych, a swoj?? prac?? poddaj?? regularnej
                superwizji.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Aleksandra Borowa"
          phone={123456789}
          priceFirst={120}
          priceRegular={150}
        />
      </div>
    </Box>
  );
};

export default ARSection;
