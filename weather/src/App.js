import React, { Component } from "react";
import "./App.css";
import DigitalClock from "./Components/DigitalClock";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" />
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 " />
          <div className="col-sm-12 col-md-4 col-lg-4 n" id="a">
            <DigitalClock />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 " />
        </div>
        <div className="row" />
      </div>
    );
  }
}

export default App;
