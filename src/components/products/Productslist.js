import { useState } from "react";
import ProductsItem from "./ProductItem";
import { ProductList } from "../stayles";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Productslist = () => {
  const [query, setQuery] = useState("");
  const products = useSelector((state) => state.products.products);
  let filtered = products
    .filter((product) =>
      product.name.toUpperCase().includes(query.toUpperCase())
    )
    .map((product) => (
      <ProductsItem
        product={product}
        // setProduct={props.setProduct}
        key={product.id}
        // deleteProducts={props.deleteProducts}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>
      {/* <Link to="/products/form">
        <button type="button" className="btn btn-default">
          Form
        </button>
      </Link> */}
    </>
  );
};

export default Productslist;
