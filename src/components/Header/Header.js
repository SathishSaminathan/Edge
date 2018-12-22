import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header__style">
        <span>Logo</span>
        <ul>
          <li className="cool-link">
            <a href="#home">Login</a>
          </li>
          <li className="cool-link">
            <a href="#signup">Sign Up</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
