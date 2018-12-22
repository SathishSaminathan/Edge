import React, { Component } from 'react';

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
      </Layout>
    );
  }
}

export default App;
