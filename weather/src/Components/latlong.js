import React, { Component } from "react";

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Latitude: "",
      Error: ""
    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ Latitude: position.coords.latitude });
      },
      err => {
        console.log(err);
      }
    );
    return (
      <div>
        <h2>
          Latitude:{this.state.Latitude}
          {/* , Error:{this.state.Error} */}
        </h2>
      </div>
    );
  }
}

export default Weather;
