//components
import Home from "./components/Home";
import Productslist from "./components/Productslist";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStayle, ThemeButton } from "./components/stayles";
import ProductDetail from "./components/ProuductDetail";

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
  const [product, setProduct] = useState(null);
  const setView = () => {
    if (product)
      return <ProductDetail product={product} setProduct={setProduct} />;
    else return <Productslist setProduct={setProduct} />;
  };

  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStayle />
        <ThemeButton onClick={changeTheme}> {iconName} </ThemeButton>
        <Home />
        {/* <Productslist setProduct={setProduct} />
        <ProductDetail product={product} /> */}
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
