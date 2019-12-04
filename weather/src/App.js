import React, { Component } from "react";
import DigitalClock from "./Components/DigitalClock";
import Weather from "./Components/latlong";

class App extends Component {
  render() {
    return (
      <div className="BackGround">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <Weather />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 n" />
            <div className="col-sm-12 col-md-4 col-lg-4 " />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 " />
            <div className="col-sm-12 col-md-4 col-lg-4 n" id="a">
              <DigitalClock />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 " />
          </div>
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default App;
