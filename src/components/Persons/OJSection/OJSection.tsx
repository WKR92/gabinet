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
              <h1 className={classes.title}>Olga Jędrzejewicz</h1>
              <ColorBlock />
              <Text className={classes.firstText}>
                Jestem psycholożką i psychoterapeutką poznawczo-behawioralną w
                procesie certyfikacji, a także interwentką kryzysową. Prowadzę
                konsultacje oraz psychoterapię indywidualną osób dorosłych, a
                także udzielam wsparcia osobom będącym w trudnych sytuacjach
                życiowych. W swojej pracy cenię metody o udokumentowanej
                skuteczności.
              </Text>
              <Text>
                Poza klasyczną terapią poznawczo-behawioralną, korzystam z
                dorobku tzw. trzeciej fali terapii poznawczo-behawioralnych, a w
                szczególności terapii ACT oraz z technik terapii schematu.
              </Text>
              <Text>
                W swojej pracy kieruję się zasadami Kodeksu Etyczno-Zawodowego
                Psychologa PTP oraz Kodeksu Etycznego PTTB. Jestem członkinią
                Polskiego Towarzystwa Psychoterapii Poznawczej i Behawioralnej
                im. prof. Zdzisława Bizonia.
              </Text>
              <Text>
                Zależy mi na skuteczności i aktualności wprowadzanych metod,
                dlatego jako praktyk stale szkolę się oraz korzystam regularnie
                z superwizji. W relacji terapeutycznej cenię szacunek,
                akceptację, współpracę, podmiotowość klienta. Możliwość pracy
                terapeutycznej traktuję jako przywilej towarzyszenia ludziom w
                tym, co osobiste i trudne i staram się z jak największą
                ostrożnością podchodzić do każdego klienta, który obdarza mnie
                zaufaniem. Prywatnie wolne chwile spędzam spacerując bądź
                delektując się dobrą książką i herbatą, ciesząc się prostymi
                przyjemnościami. Lubię taniec.
              </Text>
              <Text>
                Obszary wsparcia
                <ul>
                  <li>
                    pracuję z osobami które doświadczyły kryzysu lub zmagają się
                    z trudną sytuacją życiową
                  </li>
                  <li>
                    wspieram moich klientów w rozwiązywaniu trudności życiowych
                  </li>
                  <li>
                    prowadzę psychoterapię CBT zaburzeń nastroju, depresji,
                    zaburzeń lękowych, w tym OCD, fobii społecznej, agorafobii,
                    fobii specyficznych, GAD, napadów paniki
                  </li>
                  <li>
                    udzielam wsparcia osobom, które cierpią z powodu niskiej
                    samooceny
                  </li>
                  <li>
                    wspieram osoby mierzące się z dużym poziomem lęku w różnych
                    sytuacjach
                  </li>
                  <li>
                    pracuję z osobami, które przeżywają duże napięcie zawodowe,
                    doświadczają spadku motywacji lub braku zainteresowania
                    czynnościami, które do tej pory sprawiały im radość
                  </li>
                  <li>
                    pomagam osobom, które doświadczają trudności z nazywaniem,
                    rozumieniem i regulacją emocji
                  </li>
                  <li>
                    pomagam osobom, które przeżywają trudności powodowane przez
                    funkcjonowanie nieprzystosowawczych schematów
                  </li>
                  <li>
                    pracuję z osobami, które chciałyby pogłębić swój rozwój
                    osobisty
                  </li>
                  <li>
                    wspieram osoby przeżywające żałobę, rozstanie, będące na
                    przełomie różnych etapów w życiu
                  </li>
                  <li>
                    pomagam osobom, które przeżywają trudności w relacjach
                  </li>
                </ul>
              </Text>
              <Text>
                Doświadczenie zdobywałam pracując w Stowarzyszeniu Pomost, oraz
                na stażach w klinice Psychomedic oraz w Szpitalu Nowowiejskim, w
                gabinetach ITPB i Psychomedic. Mam również doświadczenie terapii
                własnej.
              </Text>
            </Box>
          </MediaQuery>
        </Box>
      </MediaQuery>
      <div id="price">
        <InfoPanel
          name="Olga Jędrzejewicz"
          phone={123456789}
          priceFirst={120}
          priceRegular={150}
        />
      </div>
    </Box>
  );
};

export default ARSection;
