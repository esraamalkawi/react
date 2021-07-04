//components
import Routes from "./components/Routes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStayle, ThemeButton } from "./components/stayles";

import _products from "./products";

import NavBar from "./components/Nav";

function App() {
  const products = useSelector((state) => state.products.products);
  const loadingProducts = useSelector((state) => state.products.loading);
  const loadingShops = useSelector((state) => state.products.loading);
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
  // const [product, setProduct] = useState(null);
  // const setView = () => {
  //   if (product)
  //     return (
  //       <ProductDetail
  //         product={product}
  //         setProduct={setProduct}
  //         deleteProducts={deleteProducts}
  //       />
  //     );
  //   else
  //     return (
  //       <Productslist
  //         setProduct={setProduct}
  //         products={products}
  //         deleteProducts={deleteProducts}
  //       />
  //     );
  // };
  // const [products, setProducts] = useState(_products);
  // const deleteProducts = (productId) => {
  //   const afterDelete = products.filter((product) => productId !== product.id);
  //   setProducts(afterDelete);
  // setProduct(null);
  // }
  //const shops = useSelector((state) => state.shops.shops);
  //const shopId = useParams().shopId;
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <GlobalStayle />
        <ThemeButton onClick={changeTheme}> {iconName} </ThemeButton>
        <NavBar iconName={iconName} />
        {loadingProducts || loadingShops ? (
          <h3>loading...</h3>
        ) : (
          <Routes products={products} />
        )}

        {/* 
       
        {/* {setView()} */}
      </ThemeProvider>
    </div>
  );
}
export default App;
