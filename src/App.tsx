import { Route, HashRouter as Router, Routes } from "react-router-dom";

import ABSection from "./components/Persons/ABSection/ABSection";
import ARSection from "./components/Persons/ARSection/ARSection";
import AWSection from './components/Persons/AWSection/AWSection';
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import OJSection from './components/Persons/OJSection/OJSection';
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
                <Route
                  path="/anna_ruszkiewicz_psychoterapia"
                  element={<ARSection />}
                />
                <Route
                  path="/aleksandra_borowa_psychoterapia"
                  element={<ABSection />}
                />
                <Route
                  path="/adrianna_weremij_psychoterapia"
                  element={<AWSection />}
                />
                <Route
                  path="/olga_jendrzejewicz_psychoterapia"
                  element={<OJSection />}
                />
              </Routes>
              <Footer />
            </Shell>
          </Router>
        </NotificationsProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
