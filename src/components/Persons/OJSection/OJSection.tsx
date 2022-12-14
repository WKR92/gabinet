import { Box, MediaQuery, Text, createStyles } from "@mantine/core";

import ColorBlock from "../reusable/ColorBlock";
import InfoPanel from "../reusable/InfoPanel";
import olga_j_big from "../../../assets/olga_big.jpg";
import olga_j_small from "../../../assets/olga_circle_2.jpg";

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
                src={olga_j_big}
                className={classes.image}
                alt="olga_jendrzejewicz_psychoterapia"
              />
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(min-width: 1000px)"
            styles={{ width: "99.9vw", padding: "1rem", display: "none" }}
          >
            <Box className={classes.circleImageContainer}>
              <img
                src={olga_j_small}
                className={classes.circleImage}
                alt="olga_jendrzejewicz_psychoterapia"
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
              <h1 className={classes.title}>Olga J??drzejewicz</h1>
              <ColorBlock />
              <Text className={classes.firstText}>
                Jestem psycholo??k?? i psychoterapeutk?? poznawczo-behawioraln?? w
                procesie certyfikacji, a tak??e interwentk?? kryzysow??. Prowadz??
                konsultacje oraz psychoterapi?? indywidualn?? os??b doros??ych, a
                tak??e udzielam wsparcia osobom b??d??cym w trudnych sytuacjach
                ??yciowych. W swojej pracy ceni?? metody o udokumentowanej
                skuteczno??ci.
              </Text>
              <Text>
                Poza klasyczn?? terapi?? poznawczo-behawioraln??, korzystam z
                dorobku tzw. trzeciej fali terapii poznawczo-behawioralnych, a w
                szczeg??lno??ci terapii ACT oraz z technik terapii schematu.
              </Text>
              <Text>
                W swojej pracy kieruj?? si?? zasadami Kodeksu Etyczno-Zawodowego
                Psychologa PTP oraz Kodeksu Etycznego PTTB. Jestem cz??onkini??
                Polskiego Towarzystwa Psychoterapii Poznawczej i Behawioralnej
                im. prof. Zdzis??awa Bizonia.
              </Text>
              <Text>
                Zale??y mi na skuteczno??ci i aktualno??ci wprowadzanych metod,
                dlatego jako praktyk stale szkol?? si?? oraz korzystam regularnie
                z superwizji. W relacji terapeutycznej ceni?? szacunek,
                akceptacj??, wsp????prac??, podmiotowo???? klienta. Mo??liwo???? pracy
                terapeutycznej traktuj?? jako przywilej towarzyszenia ludziom w
                tym, co osobiste i trudne i staram si?? z jak najwi??ksz??
                ostro??no??ci?? podchodzi?? do ka??dego klienta, kt??ry obdarza mnie
                zaufaniem. Prywatnie wolne chwile sp??dzam spaceruj??c b??d??
                delektuj??c si?? dobr?? ksi????k?? i herbat??, ciesz??c si?? prostymi
                przyjemno??ciami. Lubi?? taniec.
              </Text>
              <Text>
                Obszary wsparcia
                <ul>
                  <li>
                    pracuj?? z osobami kt??re do??wiadczy??y kryzysu lub zmagaj?? si??
                    z trudn?? sytuacj?? ??yciow??
                  </li>
                  <li>
                    wspieram moich klient??w w rozwi??zywaniu trudno??ci ??yciowych
                  </li>
                  <li>
                    prowadz?? psychoterapi?? CBT zaburze?? nastroju, depresji,
                    zaburze?? l??kowych, w tym OCD, fobii spo??ecznej, agorafobii,
                    fobii specyficznych, GAD, napad??w paniki
                  </li>
                  <li>
                    udzielam wsparcia osobom, kt??re cierpi?? z powodu niskiej
                    samooceny
                  </li>
                  <li>
                    wspieram osoby mierz??ce si?? z du??ym poziomem l??ku w r????nych
                    sytuacjach
                  </li>
                  <li>
                    pracuj?? z osobami, kt??re prze??ywaj?? du??e napi??cie zawodowe,
                    do??wiadczaj?? spadku motywacji lub braku zainteresowania
                    czynno??ciami, kt??re do tej pory sprawia??y im rado????
                  </li>
                  <li>
                    pomagam osobom, kt??re do??wiadczaj?? trudno??ci z nazywaniem,
                    rozumieniem i regulacj?? emocji
                  </li>
                  <li>
                    pomagam osobom, kt??re prze??ywaj?? trudno??ci powodowane przez
                    funkcjonowanie nieprzystosowawczych schemat??w
                  </li>
                  <li>
                    pracuj?? z osobami, kt??re chcia??yby pog????bi?? sw??j rozw??j
                    osobisty
                  </li>
                  <li>
                    wspieram osoby prze??ywaj??ce ??a??ob??, rozstanie, b??d??ce na
                    prze??omie r????nych etap??w w ??yciu
                  </li>
                  <li>
                    pomagam osobom, kt??re prze??ywaj?? trudno??ci w relacjach
                  </li>
                </ul>
              </Text>
              <Text>
                Do??wiadczenie zdobywa??am pracuj??c w Stowarzyszeniu Pomost, oraz
                na sta??ach w klinice Psychomedic oraz w Szpitalu Nowowiejskim, w
                gabinetach ITPB i Psychomedic. Mam r??wnie?? do??wiadczenie terapii
                w??asnej.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Olga J??drzejewicz"
          phone={123456789}
          priceFirst={120}
          priceRegular={150}
        />
      </div>
    </Box>
  );
};

export default ARSection;
