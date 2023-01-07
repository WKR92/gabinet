import {
  AppShell,
  Burger,
  Group,
  Header,
  MediaQuery,
  Menu,
  Navbar,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCalendarEvent,
  IconFriends,
  IconMailOpened,
  IconPhone,
  IconReceipt2,
} from "@tabler/icons";
import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => ({
  mainContainer: {
    padding: "0px",
  },
  headerGroup: {
    gap: "7px",
    cursor: "pointer",
  },
  headerMainContainer: {
    width: "100%",
    background: "transparent",
  },
  burgerMenuItem: {
    background: "linear-gradient(to left, #1f4037, #99f2c8)",
    marginBottom: ".5rem",
  },
  mail: {
    cursor: "pointer",
  },
  tabs: {
    marginLeft: "auto",
  },
  nav: {
    maxHeight: "fit-content",
    gap: ".5rem",
  },

  phoneHeaderGroup: {
    "&:hover": {
      [`.${getRef("iconPhone")}`]: {
        transform: "rotate(90deg)",
      },
    },
  },
  iconPhone: {
    ref: getRef("iconPhone"),
  },
  priceHeaderGroup: {
    "&:hover": {
      [`.${getRef("iconPrice")}`]: {
        transform: "rotate(70deg)",
      },
    },
  },
  iconPrice: {
    ref: getRef("iconPrice"),
  },
  timeHeaderGroup: {
    "&:hover": {
      [`.${getRef("iconTeam")}`]: {
        transform: "rotate(70deg)",
      },
    },
  },
  iconTeam: {
    ref: getRef("iconTeam"),
  },
  aboutHeaderGroup: {
    "&:hover": {
      [`.${getRef("iconAbout")}`]: {
        transform: "rotate(70deg)",
      },
    },
  },
  iconAbout: {
    ref: getRef("iconAbout"),
  },
  mailHeaderGroup: {
    "&:hover": {
      [`.${getRef("iconMail")}`]: {
        transform: "rotate(70deg)",
      },
    },
  },
  iconMail: {
    ref: getRef("iconMail"),
  },
  mailUnderline: {
    "&:hover": {
      [`.${getRef("mailText")}`]: {
        "&:after": {
          right: "0",
        },
        "&:before": {
          left: "0",
          content: "'Napisz do nas'",
        }
      },
    },
  },
  mailText: {
    ref: getRef("mailText"),
    position: "relative",
    padding: "0 .5rem",

    "&:after": {
      content: "''",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "100%",
      background: "linear-gradient(to right, #1f4037, #99f2c8)",
      transition: "all 1s ease",
    },

    "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "100%",
      right: "0",
      transition: "all 2s ease",
      textAlign: "center",
    },
  },
}));

type IProps = {
  children: ReactNode;
  id: string;
};

const Shell: React.FC<IProps> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const navigate = useNavigate();

  const scroll = (id: string) => {
    const section = document.querySelector(`#${id}`) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const changePath = (path?: string, section?: string, burger = false) => {
    if (path) {
      navigate(path);
      setOpened(false);
    }

    if (section && !burger)
      setTimeout(() => {
        scroll(section ? section : "");
      }, 100);

    if (section && burger) {
      setOpened(false);
      setTimeout(() => {
        scroll(section ? section : "");
      }, 100);
    }
  };

  return (
    <AppShell
      className={classes.mainContainer}
      navbarOffsetBreakpoint={0}
      padding={0}
      navbar={
        <MediaQuery query="(min-width: 440px)" styles={{ display: "none" }}>
          <Navbar
            className={classes.nav}
            p="xs"
            hiddenBreakpoint="xs"
            hidden={!opened}
          >
            <MediaQuery
              query="(max-width: 440px)"
              styles={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
                padding: "1rem",
              }}
            >
              <Group
                onClick={() => changePath("/email")}
                className={`${classes.headerGroup} ${classes.mailHeaderGroup}`}
              >
                <IconMailOpened
                  size={16}
                  stroke={2}
                  className={classes.iconMail}
                />
                <Text>Napisz do nas</Text>
              </Group>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 440px)"
              styles={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
                padding: "1rem",
              }}
            >
              <Group
                className={classes.headerGroup}
                onClick={() => changePath("/", "about")}
              >
                <IconCalendarEvent size={16} stroke={2} />
                <Text>O nas</Text>
              </Group>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 440px)"
              styles={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
                padding: "1rem",
              }}
            >
              <Group
                className={classes.headerGroup}
                onClick={() => changePath("/", "slider")}
              >
                <IconFriends size={16} stroke={2} />
                <Text>Zespół</Text>
              </Group>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 440px)"
              styles={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
                padding: "1rem",
              }}
            >
              <Menu shadow="md" width={"90vw"}>
                <Menu.Target>
                  <Group className={classes.headerGroup}>
                    <IconReceipt2 size={16} stroke={2} />
                    <Text>Cennik</Text>
                  </Group>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    className={classes.burgerMenuItem}
                    onClick={() =>
                      changePath("/adrianna_weremij_psychoterapia", "price")
                    }
                  >
                    Adrianna Weremij
                  </Menu.Item>
                  <Menu.Item
                    className={classes.burgerMenuItem}
                    onClick={() =>
                      changePath("/olga_jendrzejewicz_psychoterapia", "price")
                    }
                  >
                    Olga Jędrzejewicz
                  </Menu.Item>
                  <Menu.Item
                    className={classes.burgerMenuItem}
                    onClick={() =>
                      changePath("/anna_ruszkiewicz_psychoterapia", "price")
                    }
                  >
                    Anna Ruszkiewicz
                  </Menu.Item>
                  <Menu.Item
                    className={classes.burgerMenuItem}
                    onClick={() =>
                      changePath("/aleksandra_borowa_psychoterapia", "price")
                    }
                  >
                    Aleksandra Borowa
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </MediaQuery>

            <MediaQuery
              query="(max-width: 440px)"
              styles={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
                padding: "1rem",
              }}
            >
              <Group
                onClick={() => changePath(undefined, "footer", true)}
                className={classes.headerGroup}
              >
                <IconPhone size={16} stroke={2} />
                <Text>Kontakt</Text>
              </Group>
            </MediaQuery>
          </Navbar>
        </MediaQuery>
      }
      header={
        <Header height={50} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery query="(min-width: 440px)" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <MediaQuery query="(max-width: 440px)" styles={{ display: "none" }}>
              <Group className={classes.headerMainContainer}>
                <MediaQuery
                  query="(max-width: 570px)"
                  styles={{ display: "none" }}
                >
                  <div className={classes.mailUnderline}>
                    <Text
                      className={`${classes.mail} ${classes.mailText}`}
                      onClick={() => changePath("/email")}
                    >
                      terapiadobra@gmail.com
                    </Text>
                  </div>
                </MediaQuery>
                <MediaQuery
                  query="(min-width: 570px)"
                  styles={{ marginLeft: "auto" }}
                >
                  <Group>
                    <MediaQuery
                      query="(min-width: 570px)"
                      styles={{ display: "none" }}
                    >
                      <Group
                        onClick={() => changePath("/email")}
                        className={`${classes.headerGroup} ${classes.mailHeaderGroup}`}
                      >
                        <IconMailOpened
                          size={16}
                          stroke={2}
                          className={classes.iconMail}
                        />
                        <Text>Mail</Text>
                      </Group>
                    </MediaQuery>

                    <Group
                      onClick={() => changePath("/", "about")}
                      className={`${classes.headerGroup} ${classes.aboutHeaderGroup}`}
                    >
                      <IconCalendarEvent
                        size={16}
                        stroke={2}
                        className={classes.iconAbout}
                      />
                      <Text>O nas</Text>
                    </Group>

                    <Group
                      onClick={() => changePath("/", "slider")}
                      className={`${classes.headerGroup} ${classes.timeHeaderGroup}`}
                    >
                      <IconFriends
                        size={16}
                        stroke={2}
                        className={classes.iconTeam}
                      />
                      <Text>Zespół</Text>
                    </Group>

                    <Group className={classes.tabs}>
                      <Menu shadow="md" width={160}>
                        <Menu.Target>
                          <Group
                            className={`${classes.headerGroup} ${classes.priceHeaderGroup}`}
                          >
                            <IconReceipt2
                              size={16}
                              stroke={2}
                              className={classes.iconPrice}
                            />
                            <Text>Cennik</Text>
                          </Group>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            onClick={() =>
                              changePath(
                                "/adrianna_weremij_psychoterapia",
                                "price"
                              )
                            }
                          >
                            Adrianna Weremij
                          </Menu.Item>
                          <Menu.Item
                            onClick={() =>
                              changePath(
                                "/olga_jendrzejewicz_psychoterapia",
                                "price"
                              )
                            }
                          >
                            Olga Jędrzejewicz
                          </Menu.Item>
                          <Menu.Item
                            onClick={() =>
                              changePath(
                                "/anna_ruszkiewicz_psychoterapia",
                                "price"
                              )
                            }
                          >
                            Anna Ruszkiewicz
                          </Menu.Item>
                          <Menu.Item
                            onClick={() =>
                              changePath(
                                "/aleksandra_borowa_psychoterapia",
                                "price"
                              )
                            }
                          >
                            Aleksandra Borowa
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Group>
                    <Group
                      onClick={() => changePath(undefined, "footer")}
                      className={`${classes.headerGroup} ${classes.phoneHeaderGroup}`}
                    >
                      <IconPhone
                        size={16}
                        stroke={2}
                        className={classes.iconPhone}
                      />
                      <Text>Kontakt</Text>
                    </Group>
                  </Group>
                </MediaQuery>
              </Group>
            </MediaQuery>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};

export default Shell;
