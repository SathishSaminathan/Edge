import React, { Component } from 'react'

import HotelListItems from "./HotelListItems";

import "./HotelList.css";

class HotelList extends Component {
    render () {
        return (
            <div className="hotel_list_container">
                <HotelListItems/>
            </div>
        )
    }
}

export default HotelList