import { useState } from "react";
import ShopsItem from "./ShopsItem";
import { ProductList } from "../stayles";
import SearchBar from "../SearchBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShopsList = () => {
  const [query, setQuery] = useState("");
  const shops = useSelector((state) => state.shops.shops);
  let filtered = shops
    .filter((shop) => shop.name.toUpperCase().includes(query.toUpperCase()))
    .map((shop) => (
      <ShopsItem
        shop={shop}
        // setshop={props.setshop}
        key={shop.id}
        // deleteshops={props.deleteshops}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductList>{filtered}</ProductList>
      {/* <Link to="/shops/form">
        <button type="button" className="btn btn-default">
          Form
        </button>
      </Link> */}
    </>
  );
};

export default ShopsList;
