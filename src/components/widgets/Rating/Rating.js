import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

import "./Rating.css";

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StarCount: this.props.StarCount,
      RatingValue: this.props.RatingValue,
      RatingTitle: this.props.RatingTitle,
      disable:this.props.disable,
    };
    this.renderStar = this.renderStar.bind(this);
    this.checkStars = this.checkStars.bind(this);
  }

  checkStars(value) {
    this.setState(
      prevState => {
        return {
          RatingValue: value + 1
        };
      },
      () => this.renderStar()
    );
  }

  renderStar() {
    const { RatingValue, StarCount, disable } = this.state;
    console.log("RatingValue", RatingValue);
    const stars = [];
    for (let i = 0; i < StarCount; i++)
      stars.push(
        <span
          key={i}
          
          onClick={() => {!disable && this.checkStars(i)}}
          className={`
            ${
              i + 1 <= RatingValue
                ? `${
                    RatingValue > 3
                      ? "fa fa-star star_rating star_checked success"
                      : RatingValue === 3
                      ? " fa fa-star star_rating star_checked warning"
                      : "fa fa-star star_rating star_checked danger"
                  }`
                : `fa fa-star star_rating`
            }` }
        />
      );
    return stars;
  }
  render() {
    const { RatingTitle, disable } = this.state;
    return (
      <div className="rating_style">
        <div className={`rating_star_area ${disable && "disabled"}`}>
          {RatingTitle && <span className="rating_title">{RatingTitle}</span>}
          {this.renderStar()}
        </div>
        <div className="average_rating">
          <span>4.5</span>
        </div>
      </div>
    );
  }
}

export default Ratings;
