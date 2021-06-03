import products from "../products";
import ProductsItem from "./ProductItem";
import { ProductList } from "./stayles";

const Productslist = () => {
  const productsList = products.map((product) => (
    <ProductsItem product={product} key={product.id} />
  ));
  return <ProductList>{productsList}</ProductList>;
};

export default Productslist;
