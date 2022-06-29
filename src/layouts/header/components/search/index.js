import React from 'react';
import {FiSearch} from 'react-icons/fi'
import {SearchContainer} from "./style/search";
const Search = () => {
    return (
        <SearchContainer >
            <span>Search...</span> <FiSearch/>
        </SearchContainer>
    );
};

export default Search;