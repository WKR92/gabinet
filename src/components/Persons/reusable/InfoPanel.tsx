import { Box, MediaQuery, Text, createStyles } from "@mantine/core";
import { IconBusinessplan, IconPhoneCall } from "@tabler/icons";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "100%",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    marginTop: "2rem",
    background: "linear-gradient(to right, #1f4037, #99f2c8)",
  },
  sectorContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
}));

interface IInfoPanel {
  id?: string;
  phone: number;
  priceFirst: number;
  priceRegular: number;
}

const InfoPanel: React.FC<IInfoPanel> = ({
  phone,
  priceFirst,
  priceRegular,
}) => {
  const { classes } = useStyles();

  return (
    <MediaQuery
      query="(max-width: 500px)"
      styles={{ flexDirection: "column", gap: '1rem' }}
    >
      <div className={`${classes.mainContainer} info-panel-main-container`}>
        <Box className={classes.sectorContainer}>
          <IconPhoneCall size={20} stroke={2} />
          <Text>{phone}</Text>
        </Box>
        <Box className={classes.sectorContainer}>
          <IconBusinessplan size={20} stroke={2} />
          <Text>Pierwsza wizyta: {priceFirst} zł</Text>
        </Box>
        <Box className={classes.sectorContainer}>
          <IconBusinessplan size={20} stroke={2} />
          <Text>Kolejne wizyty: {priceRegular} zł</Text>
        </Box>
      </div>
    </MediaQuery>
  );
};

export default InfoPanel;
