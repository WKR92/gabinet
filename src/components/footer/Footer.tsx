import { Box, MediaQuery, Text, createStyles } from "@mantine/core";
import { IconMailOpened, IconMapPin } from "@tabler/icons";

const useStyles = createStyles(() => ({
  sectorContainer: {
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    marginBottom: "1rem",
  },
  mainContainer: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    background: "linear-gradient(to right, #1f4037, #99f2c8)",
    marginTop: "1rem",
  },
  pointer: {
    cursor: "pointer",
  },
}));

const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <MediaQuery
      query="(max-width: 470px)"
      styles={{ flexDirection: "column", gap: "2rem" }}
    >
      <Box className={classes.mainContainer}>
        <MediaQuery query="(max-width: 470px)" styles={{ margin: "auto" }}>
          <Box className={classes.sectorContainer}>
            <Box className={classes.iconContainer}>
              <IconMapPin size={20} stroke={2} className={classes.icon} />
            </Box>
            <Text>Psychoterapia na Dobrej</Text>
            <Text>ul. Dobra 22/24 m.1</Text>
            <Text>00-388 Warszawa</Text>
          </Box>
        </MediaQuery>
        <MediaQuery query="(max-width: 470px)" styles={{ margin: "auto" }}>
          <Box className={classes.sectorContainer}>
            <Box className={classes.iconContainer}>
              <IconMailOpened size={20} stroke={2} className={classes.icon} />
            </Box>
            <Text
              className={classes.pointer}
              onClick={() => console.log("clicked")}
            >
              terapiadobra@gmail.com
            </Text>
          </Box>
        </MediaQuery>
      </Box>
    </MediaQuery>
  );
};

export default Footer;
