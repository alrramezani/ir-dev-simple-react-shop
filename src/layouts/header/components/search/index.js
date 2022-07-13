import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchContainer } from "./style";
import { debounce } from "lodash";
import useSearch from "./useSearch";
const Search = () => {
  const [setKey] = useSearch();
  const handelChange = debounce((value) => {
    if (value.length >= 3) {
      setKey(value);
    }
  }, 1000);
  const inputRef = useRef(null);
  return (
    <SearchContainer>
      <input
        placeholder="Search..."
        ref={inputRef}
        onChange={(e) => {
          handelChange(e.target.value);
        }}
      />
      <FiSearch className="search-key"/>
    </SearchContainer>
  );
};

export default Search;
