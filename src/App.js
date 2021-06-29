//components
import Home from "./components/Home";
import Productslist from "./components/products/Productslist";
import ShopList from "./components/shops/ShopList";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStayle, ThemeButton } from "./components/stayles";
import ProductDetail from "./components/products/ProuductDetail";
import _products from "./products";
import { Route, Switch, useParams } from "react-router";
import NavBar from "./components/Nav";
import FormProduct from "./components/products/FormProduct";
import ShopDetail from "./components/shops/ShopDetail";
import { useSelector } from "react-redux";

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
        <Switch>
          <Route
            path={[
              "/shops/:shopId/products/new",
              "/products/:productsSlug/edit",
            ]}
          >
            <FormProduct />
          </Route>
          <Route path="/products/:productsSlug">
            <ProductDetail
            // products={products}
            // deleteProducts={deleteProducts}
            />
          </Route>
          <Route path="/shops/:shopId">
            <ShopDetail
            // products={products}
            // deleteProducts={deleteProducts}
            />
          </Route>
          <Route path="/products">
            <Productslist
            // setProduct={setProduct}
            // products={products}
            // deleteProducts={deleteProducts}
            />
          </Route>
          <Route path="/shops">
            <ShopList
            // setProduct={setProduct}
            // products={products}
            // deleteProducts={deleteProducts}
            />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* 
       
        {/* {setView()} */}
      </ThemeProvider>
    </div>
  );
}
export default App;
