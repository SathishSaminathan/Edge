import React, { Component } from 'react';

import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";

import Router from "./routes";

import { BrowserRouter } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        {/* <Home/> */}
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
