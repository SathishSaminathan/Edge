import React, { Component } from "react";

import Card from "../widgets/Card/Card";

class HotelListItems extends Component {
  renderCards = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(<Card />);
    }
    return cards;
  };
  render() {
    return <div className="cards_list_style">{this.renderCards()}</div>;
  }
}

export default HotelListItems;
