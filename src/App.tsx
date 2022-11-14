import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import Shell from "./components/shell/Shell";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ModalsProvider>
        <NotificationsProvider position="top-right" zIndex={2077} limit={5}>
          <Router>
            <Shell id="shell">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/champions" element={<Team />}></Route>
                <Route path="/cards" element={<Card />}></Route>
                <Route path="/dices" element={<Dices />}></Route> */}
              </Routes>
            </Shell>
          </Router>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
