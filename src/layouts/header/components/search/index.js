import React from "react";
import { FiSearch } from "react-icons/fi";
import { SearchContainer } from "./style";
const Search = () => {
  return (
    <SearchContainer>
      <input placeholder="Search..." />
      <FiSearch />
    </SearchContainer>
  );
};

export default Search;
