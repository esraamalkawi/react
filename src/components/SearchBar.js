import React from "react";
// Styling
import { SearchBarStyled } from "./stayles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a cake name"
    />
  );
};

export default SearchBar;
