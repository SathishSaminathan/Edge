import React from "react";
import { Glyphicon } from "react-bootstrap";

import "./SearchBar.css";

const SearchBar = ({ getSearchKey, IsLoading }) => {
  console.log("Isloading", IsLoading);
  return (
    <div className="container">
      <div className="search_bar">
        <input onChange={e => getSearchKey(e.target.value)} />
        <div className="search_icon">
          {IsLoading ? (
            <div className="loader" />
          ) : (
            <Glyphicon glyph="search" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
