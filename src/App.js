import React, { Component } from 'react';

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Home/>
      </Layout>
    );
  }
}

export default App;
