//components
import Home from "./components/Home";
import Productslist from "./components/Productslist";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStayle, ThemeButton } from "./components/stayles";

function App() {
  const [currentTheme, setcurrentTheme] = useState(theme.light);
  const [iconName, seticonName] = useState("Dark theme");
  const changeTheme = () => {
    if (currentTheme === theme.light) {
      setcurrentTheme(theme.dark);
      seticonName("Light theme");
    }
    if (currentTheme === theme.dark) {
      setcurrentTheme(theme.light);
      seticonName("Dark theme");
    }
  };
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStayle />
        <ThemeButton onClick={changeTheme}> {iconName} </ThemeButton>
        <Home />
        <Productslist />
      </ThemeProvider>
    </div>
  );
}

export default App;
