import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card_container">
        <div className="card_title">
          <h2 className="name">Hotel Name</h2>
          <h2 className="address">Hotel Address</h2>
        </div>
        <div className="image_rating_area">
          <img
            alt="hai"
            style={{
              width: 350,
              height: 250
            }}
            src={`https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg`}
          />
        </div>
      </div>
    );
  }
}

export default Card;
