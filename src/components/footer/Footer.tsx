import { Box, MediaQuery, Modal, Text, createStyles } from "@mantine/core";
import { IconMailOpened, IconMapPin } from "@tabler/icons";

import mapImg from "../../assets/addressImg.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const useStyles = createStyles(() => ({
  sectorContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
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
  mapImage: {
    maxWidth: "90vw",
  },
  modalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  }
}));

const Footer: React.FC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const changePath = (path: string) => {
    navigate(path);
  };

  return (
    <MediaQuery
      query="(max-width: 470px)"
      styles={{ flexDirection: "column", gap: "2rem" }}
    >
      <Box className={classes.mainContainer}>
        <MediaQuery query="(max-width: 470px)" styles={{ margin: "auto" }}>
          <Box
            onClick={() => setOpened(true)}
            className={classes.sectorContainer}
          >
            <Box className={classes.iconContainer}>
              <IconMapPin size={20} stroke={2} className={classes.icon} />
            </Box>
            <Text>Psychoterapia na Dobrej</Text>
            <Text>ul. Dobra 22/24 m.1</Text>
            <Text>00-388 Warszawa</Text>
          </Box>
        </MediaQuery>
        <MediaQuery query="(max-width: 470px)" styles={{ margin: "auto" }}>
          <Box
            onClick={() => changePath("/email")}
            className={classes.sectorContainer}
          >
            <Box className={classes.iconContainer}>
              <IconMailOpened size={20} stroke={2} className={classes.icon} />
            </Box>
            <Text className={classes.pointer}>terapiadobra@gmail.com</Text>
          </Box>
        </MediaQuery>

        <Modal
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          title={
            <Box className={classes.modalHeader}>
              <Text>Psychoterapia na Dobrej</Text>
              <Text>ul. Dobra 22/24 m.1</Text>
              <Text>00-388 Warszawa</Text>
            </Box>
          }
          size='auto'
        >
          <img
            src={mapImg}
            alt="psychoterapia_na_dobrej_mapa"
            className={classes.mapImage}
          />
        </Modal>
      </Box>
    </MediaQuery>
  );
};

export default Footer;
