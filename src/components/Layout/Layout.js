import React, { Component } from "react";

import Loader from "../widgets/Loader/Loader";

class Layout extends Component {
  state = {
    PageLoader: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        PageLoader: false
      });
    }, 1000);
  }

  render() {
      const {PageLoader}= this.state
    return PageLoader ? (
      <Loader />
    ) : (
      <React.Fragment>{this.props.children}</React.Fragment>
    );
  }
}

export default Layout;
