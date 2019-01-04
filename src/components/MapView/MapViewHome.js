import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapViewHome extends Component {
  state = {
    lat: null,
    long: null
  };

  componentDidMount() {
    this.getLocation();
  }

  showPosition = position => {
    console.log(position);
    this.setState(prevState => {
      return {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
    });
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 11.1930592,
          lng: 77.3730865
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAX7iIf-pqfdU-hc9z8F9u0nfyYDb0mekc"
})(MapViewHome);
