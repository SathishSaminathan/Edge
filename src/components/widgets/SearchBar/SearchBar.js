import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

import "./SearchBar.css";

class SearchBar extends Component {

  componentDidMount(){
    this.refs.input_ref.focus();
  }

  render() {
    const { getSearchKey, IsLoading } = this.props;
    console.log("Isloading", IsLoading);
    return (
        <div className="search_bar">
          <input ref="input_ref" onChange={e => getSearchKey(e.target.value)} placeholder="find hotels near me"/>
          <div className="search_icon">
            {IsLoading ? (
              <div className="search_loader" />
            ) : (
              <Glyphicon glyph="search" />
            )}
          </div>
        </div>
    );
  }
}

export default SearchBar;
