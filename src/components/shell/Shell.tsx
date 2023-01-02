import {
  AppShell,
  Box,
  Burger,
  Button,
  Footer,
  Group,
  Header,
  MediaQuery,
  Menu,
  NavLink,
  Navbar,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import {
  IconCalendarEvent,
  IconFriends,
  IconMailOpened,
  IconMapPin,
  IconPhone,
  IconReceipt2,
} from "@tabler/icons";
import { ReactNode, useState } from "react";

import { Link } from "react-scroll";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles(() => ({
  mainContainer: {
    padding: "0px",
    // background: "linear-gradient(to right, #1f4037, #99f2c8)",
    // width: "100vw",
  },
  headerGroup: {
    gap: "7px",
    cursor: "pointer",
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

  const changePath = (path: string) => {
    // if ()
    navigate(path);
    setOpened(false);
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
            {/* <NavLink
              onClick={() => {
                changePath("/");
              }}
              label="Zespół"
              icon={<IconActivity size={16} stroke={2} />}
              rightSection={<IconChevronRight size={16} stroke={2} />}
            />
            <NavLink
              onClick={() => {
                changePath("/");
              }}
              label="Cennik"
              icon={<IconActivity size={16} stroke={2} />}
              rightSection={<IconChevronRight size={16} stroke={2} />}
            />
            <NavLink
              onClick={() => {
                changePath("/champions");
              }}
              label="Kontakt"
              icon={<IconActivity size={16} stroke={2} />}
              rightSection={<IconChevronRight size={16} stroke={2} />}
            />
            <NavLink
              onClick={() => {
                changePath("/dices");
              }}
              label="Terminarze"
              icon={<IconActivity size={16} stroke={2} />}
              rightSection={<IconChevronRight size={16} stroke={2} />}
            /> */}

            <Link
              spy={true}
              smooth={true}
              offset={-50}
              to="about"
              duration={500}
            >
              <Group
                className={classes.headerGroup}
                onClick={() => setOpened(false)}
              >
                <IconCalendarEvent size={16} stroke={2} />
                <Text>O nas</Text>
              </Group>
            </Link>

            <Link
              spy={true}
              smooth={true}
              offset={0}
              to="slider"
              duration={500}
            >
              <Group
                className={classes.headerGroup}
                onClick={() => setOpened(false)}
              >
                <IconFriends size={16} stroke={2} />
                <Text>Zespół</Text>
              </Group>
            </Link>

            {/* <Menu shadow="md" width={160}>
              <Menu.Target>
                <Group className={classes.headerGroup}>
                  <IconFriends size={16} stroke={2} />
                  <Text>Zespół</Text>
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => {}}>Anna Ruszkiewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Aleksandra Borowa</Menu.Item>
                <Menu.Item onClick={() => {}}>Olga Jędrzejewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Adrianna Weremij</Menu.Item>
              </Menu.Dropdown>
            </Menu> */}

            <Menu shadow="md" width={160}>
              <Menu.Target>
                <Group className={classes.headerGroup}>
                  <IconReceipt2 size={16} stroke={2} />
                  <Text>Cennik</Text>
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => {}}>Anna Ruszkiewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Aleksandra Borowa</Menu.Item>
                <Menu.Item onClick={() => {}}>Olga Jędrzejewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Adrianna Weremij</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Group className={classes.headerGroup}>
              <IconPhone size={16} stroke={2} />
              <Text onClick={() => navigate("/kontakt")}>Kontakt</Text>
            </Group>

            {/* <Menu shadow="md" width={160}>
              <Menu.Target>
                <Group className={classes.headerGroup}>
                  <IconCalendarEvent size={16} stroke={2} />
                  <Text>Terminarze</Text>
                </Group>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item onClick={() => {}}>Anna Ruszkiewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Aleksandra Borowa</Menu.Item>
                <Menu.Item onClick={() => {}}>Olga Jędrzejewicz</Menu.Item>
                <Menu.Item onClick={() => {}}>Adrianna Weremij</Menu.Item>
              </Menu.Dropdown>
            </Menu> */}
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
                  query="(max-width: 660px)"
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
                  query="(max-width: 660px)"
                  styles={{ width: "100%" }}
                >
                  <MediaQuery
                    query="(min-width: 660px)"
                    styles={{ marginLeft: "auto" }}
                  >
                    <Group>
                      <MediaQuery
                        query="(min-width: 660px)"
                        styles={{ display: "none" }}
                      >
                        <IconMailOpened
                          size={20}
                          stroke={2}
                          onClick={() => console.log("essa")}
                        />
                      </MediaQuery>

                      <Link
                        onClick={() => changePath("/")}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        to="about"
                        duration={500}
                      >
                        <Group className={classes.headerGroup}>
                          <IconCalendarEvent size={16} stroke={2} />
                          <Text>O nas</Text>
                        </Group>
                      </Link>

                      <Link
                        onClick={() => changePath("/")}
                        spy={true}
                        smooth={true}
                        to="slider"
                        duration={500}
                      >
                        <Group className={classes.headerGroup}>
                          <IconFriends size={16} stroke={2} />
                          <Text>Zespół</Text>
                        </Group>
                      </Link>

                      <Group className={classes.tabs}>
                        {/* <Menu shadow="md" width={160}>
                          <Menu.Target> */}
                        {/* <Link smooth={true} to="slider" duration={500}>
                          <Group className={classes.headerGroup}>
                            <IconFriends size={16} stroke={2} />
                            <Text>Zespół</Text>
                          </Group>
                        </Link> */}
                        {/* </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item onClick={() => {}}>
                              Anna Ruszkiewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Aleksandra Borowa
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Olga Jędrzejewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Adrianna Weremij
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu> */}

                        <Menu shadow="md" width={160}>
                          <Menu.Target>
                            <Group className={classes.headerGroup}>
                              <IconReceipt2 size={16} stroke={2} />
                              <Text>Cennik</Text>
                            </Group>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item onClick={() => {}}>
                              Anna Ruszkiewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Aleksandra Borowa
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Olga Jędrzejewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Adrianna Weremij
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>

                        <Group className={classes.headerGroup}>
                          <IconPhone size={16} stroke={2} />
                          <Text onClick={() => {}}>Kontakt</Text>
                        </Group>

                        {/* <Menu shadow="md" width={160}>
                          <Menu.Target>
                            <Group className={classes.headerGroup}>
                              <IconCalendarEvent size={16} stroke={2} />
                              <Text>Terminarze</Text>
                            </Group>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item onClick={() => {}}>
                              Anna Ruszkiewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Aleksandra Borowa
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Olga Jędrzejewicz
                            </Menu.Item>
                            <Menu.Item onClick={() => {}}>
                              Adrianna Weremij
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu> */}
                      </Group>
                    </Group>
                  </MediaQuery>
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
