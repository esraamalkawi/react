import { useState } from "react";
import ProductsItem from "./ProductItem";
import { ProductList } from "./stayles";
import SearchBar from "./SearchBar";

const Productslist = (props) => {
  const [query, setQuery] = useState("");

  let filtered = props.products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        setProduct={props.setProduct}
        key={product.id}
        deleteProducts={props.deleteProducts}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>;
    </>
  );
};

export default Productslist;
