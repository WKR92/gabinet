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

const useStyles = createStyles(() => ({
  mainContainer: {
    padding: "0px",
  },
  headerGroup: {
    gap: "7px",
    cursor: "pointer",
    // background: "linear-gradient(to right, #1f4037, #99f2c8)",
    // padding: "1rem",
  },
  headerMainContainer: {
    width: "100%",
    background: "transparent",
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

  // const paintPriceSection = () => {
  //   const section = document.querySelector('.info-panel-main-container') as HTMLElement;
  //   section.style.background = "blue";
  //   section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  // };

  const changePath = (path: string, section?: string) => {
    navigate(path);
    setOpened(false);
    setTimeout(() => {
      scroll(section ? section : "");
    }, 100);

    // if (section === "price") paintPriceSection();
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
            <Group
              className={classes.headerGroup}
              onClick={() => changePath("/", "about")}
            >
              <IconCalendarEvent size={16} stroke={2} />
              <Text>O nas</Text>
            </Group>

            <Group
              className={classes.headerGroup}
              onClick={() => changePath("/", "slider")}
            >
              <IconFriends size={16} stroke={2} />
              <Text>Zespół</Text>
            </Group>

            <Menu shadow="md" width={160}>
              <Menu.Target>
                <Group className={classes.headerGroup}>
                  <IconReceipt2 size={16} stroke={2} />
                  <Text>Cennik</Text>
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  onClick={() =>
                    changePath("/adrianna_weremij_psychoterapia", "price")
                  }
                >
                  Adrianna Weremij
                </Menu.Item>
                <Menu.Item
                  onClick={() =>
                    changePath("/olga_jendrzejewicz_psychoterapia", "price")
                  }
                >
                  Olga Jędrzejewicz
                </Menu.Item>
                <Menu.Item
                  onClick={() =>
                    changePath("/anna_ruszkiewicz_psychoterapia", "price")
                  }
                >
                  Anna Ruszkiewicz
                </Menu.Item>
                <Menu.Item
                  onClick={() =>
                    changePath("/aleksandra_borowa_psychoterapia", "price")
                  }
                >
                  Aleksandra Borowa
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Group className={classes.headerGroup}>
              <IconPhone size={16} stroke={2} />
              <Text onClick={() => navigate("/kontakt")}>Kontakt</Text>
            </Group>
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
                  <Text
                    className={classes.mail}
                    onClick={() => console.log("mail")}
                  >
                    terapiadobra@gmail.com
                  </Text>
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
                        onClick={() => console.log("essa")}
                        className={classes.headerGroup}
                      >
                        <IconMailOpened size={20} stroke={2} />
                        <Text>mail</Text>
                      </Group>
                    </MediaQuery>
                    
                    {/* <MediaQuery
                      query="(max-width: 440px)"
                      styles={{
                        background:
                          "linear-gradient(to right, #1f4037, #99f2c8)",
                        padding: "1rem",
                      }}
                    > */}
                      <Group
                        onClick={() => changePath("/", "about")}
                        className={classes.headerGroup}
                      >
                        <IconCalendarEvent size={16} stroke={2} />
                        <Text>O nas</Text>
                      </Group>
                    {/* </MediaQuery> */}

                    <Group
                      onClick={() => changePath("/", "slider")}
                      className={classes.headerGroup}
                    >
                      <IconFriends size={16} stroke={2} />
                      <Text>Zespół</Text>
                    </Group>

                    <Group className={classes.tabs}>
                      <Menu shadow="md" width={160}>
                        <Menu.Target>
                          <Group className={classes.headerGroup}>
                            <IconReceipt2 size={16} stroke={2} />
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
                    <Group onClick={() => {}} className={classes.headerGroup}>
                      <IconPhone size={16} stroke={2} />
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
