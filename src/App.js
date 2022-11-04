import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/global/Dashboard";
import Team from "./scenes/global/Team";
import Invoice from "./scenes/global/Invoice";
import Contacts from "./scenes/global/Contacs";
import Bar from "./scenes/global/Bar";
import Form from "./scenes/global/Form";
import Line from "./scenes/global/Line";
import Pie from "./scenes/global/Pie";
import FAQ from "./scenes/global/FAQ";
import Geography from "./scenes/global/Geography";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
