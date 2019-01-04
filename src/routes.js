import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import MapViewHome from './components/MapView/MapViewHome';

class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/mapview" component={MapViewHome}/>
            </Switch>
        )
    }
}

export default Routes