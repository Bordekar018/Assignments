import React, { Component } from "react";

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Latitude: "",
      error: ""
    };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ Latitude: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ error: err.message });
      }
    );
  }

  render() {
    if (this.state.Latitude && !this.state.error) {
      return (
        <div>
          <h2 className="neutro">
            Latitude - {this.state.Latitude}
          </h2>
        </div>
      );
    }
    if (!this.state.Latitude && this.state.error) {
      return (
        <div>
          <h2 className="neutro">
            Error - {this.state.error}
          </h2>
        </div>
      );
    } else {
      return (
        <div className="neutro">
          <h2>Loading.....</h2>
        </div>
      );
    }
  }
}

export default Weather;
