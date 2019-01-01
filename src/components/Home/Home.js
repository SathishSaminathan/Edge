import React, { Component } from "react";
import { debounce } from "lodash";

import SearchBar from "../widgets/SearchBar";

class Home extends Component {
  state = {
    SearchKey: "",
    IsLoading: false
  };

  handleSearch = debounce(SearchKey => {
    this.setState((nextProps, prevState) => {
      return {
        SearchKey,
        IsLoading: true
      };
    }, this.cancelLoading);
  }, 1000);

  cancelLoading = () => {
    setTimeout(() => {
      this.setState(() => {
        return {
          IsLoading: false
        };
      });
    }, 1000);
  };
  render() {
    const { IsLoading } = this.state;
    return (
      <React.Fragment>
        <SearchBar IsLoading={IsLoading} getSearchKey={this.handleSearch} />
      </React.Fragment>
    );
  }
}

export default Home;
