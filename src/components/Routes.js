import Home from "./Home";
import Productslist from "./products/Productslist";
import ShopList from "./shops/ShopList";
import ProductDetail from "./products/ProuductDetail";
import FormProduct from "./products/FormProduct";
import ShopDetail from "./shops/ShopDetail";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import Signup from "./Signup";
const Routes = (props) => {
  return (
    <Switch>
      <Route
        path={["/shops/:shopId/products/new", "/products/:productsSlug/edit"]}
      >
        <FormProduct />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/shops/:shopId">
        <ShopDetail />
      </Route>
      <Route path="/products/:productsSlug">
        <ProductDetail />
      </Route>

      <Route path="/products">
        <Productslist products={props.products} />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
