import React, { Component } from "react";

import "./Card.css";
import Rating from "../Rating/Rating";

class Card extends Component {
  render() {
    return (
      <div className="card_container">
        <div className="card_title">
          <h2 className="name">Chola</h2>
          <h2 className="address">Anna Nagar</h2>
        </div>
        <div className="image_fav_area">
          <img
            className="hotel_image"
            src={`https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg`}
          />
          <span className="glyphicon glyphicon-heart fav_icon"></span>
        </div>
        <Rating disable={true} RatingTitle="User Ratings" StarCount={5} RatingValue={2}/>
      </div>
    );
  }
}

export default Card;
