import React, { Component } from 'react'

import HotelList from "../HotelList/HotelList";

import "./Results.css";

class Results extends Component {
    render () {
        return (
            <div className="result_container">
                <span className="results_header"><h2>Results</h2></span>
                <HotelList/>
            </div>
        )
    }
}

export default Results