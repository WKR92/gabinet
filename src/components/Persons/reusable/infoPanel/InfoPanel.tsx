import "./infoPanel.scss";

import { Box, MediaQuery, Text, createStyles } from "@mantine/core";
import { IconBusinessplan, IconPhoneCall } from "@tabler/icons";
import { useEffect, useState } from "react";
import {
  usePriceContext,
  useUpdatePriceContext,
} from "../../../context/PriceContext";

import { useNavigate } from "react-router-dom";
import { useUpdateTherapistContext } from "../../../context/TherapistContext";

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
  bold: {
    fontWeight: "bold",
  },
}));

interface IInfoPanel {
  name: string;
  id?: string;
  phone: number;
  price: number;
  site: string;
}

const InfoPanel: React.FC<IInfoPanel> = ({ name, phone, price, site }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const updateTherapistContext = useUpdateTherapistContext();
  const updatePriceContext = useUpdatePriceContext();
  const priceContext = usePriceContext();
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    if (priceContext) {
      setAnimClass("highlightPrice");
    }

    return () => {
      updatePriceContext(false);
    };
  }, [priceContext]);

  const changePath = (path: string) => {
    navigate(path);
  };

  const goToFormForSpecificTherapist = () => {
    updateTherapistContext(name);
    changePath("/email");
  };

  return (
    <MediaQuery
      query="(max-width: 835px)"
      styles={{ flexDirection: "column", gap: "1rem" }}
    >
      <div className={`${classes.mainContainer} info-panel-main-container`}>
        <Box className="anim1" onClick={() => goToFormForSpecificTherapist()}>
          <span>Napisz do mnie</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </Box>
        <Box className={classes.sectorContainer}>
          <IconPhoneCall size={20} stroke={2} />
          <Text>{phone}</Text>
        </Box>
        <Box className={`${classes.sectorContainer} ${animClass}`}>
          <IconBusinessplan size={20} stroke={2} />
          <Text>
            Koszt wizyty: <span className={classes.bold}>{price}</span> zł
          </Text>
        </Box>
        <a href={site} target="_blank">
          <Box className="anim2">
            <span>Portal Twój Psycholog</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </Box>
        </a>
      </div>
    </MediaQuery>
  );
};

export default InfoPanel;
