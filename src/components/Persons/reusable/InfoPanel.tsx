import { Box, MediaQuery, Text, createStyles } from "@mantine/core";
import { IconBusinessplan, IconMailOpened, IconPhoneCall } from "@tabler/icons";

import { useNavigate } from "react-router-dom";
import { useUpdateTherapistContext } from "../../context/TheraphistContext";

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
  pointer: {
    cursor: "pointer",
  },
}));

interface IInfoPanel {
  name: string;
  id?: string;
  phone: number;
  priceFirst: number;
  priceRegular: number;
}

const InfoPanel: React.FC<IInfoPanel> = ({
  name,
  phone,
  priceFirst,
  priceRegular,
}) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const updateTherapistContext = useUpdateTherapistContext();

  const changePath = (path: string) => {
    navigate(path);
  };

  const goToFormForSpecificTherapist = () => {
    updateTherapistContext(name);
    changePath("/email");
  }

  return (
    <MediaQuery
      query="(max-width: 500px)"
      styles={{ flexDirection: "column", gap: "1rem" }}
    >
      <div className={`${classes.mainContainer} info-panel-main-container`}>
        <Box
          onClick={() => goToFormForSpecificTherapist()}
          className={`${classes.sectorContainer} ${classes.pointer}`}
        >
          <IconMailOpened size={20} stroke={2} />
          <Text>Klinij i napisz do mnie</Text>
        </Box>
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
