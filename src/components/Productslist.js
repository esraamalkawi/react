import { useState } from "react";
import products from "../products";
import ProductsItem from "./ProductItem";
import { ProductList } from "./stayles";
import SearchBar from "./SearchBar";

const Productslist = () => {
  const [query, setQuery] = useState("");

  let filtered = products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => <ProductsItem product={product} key={product.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>;
    </>
  );
};

export default Productslist;
