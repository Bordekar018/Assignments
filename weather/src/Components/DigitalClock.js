import React, { Component } from "react";

export class DigitalClock extends Component {
  constructor(props) {
    super(props);

    this.getHrs = this.getHrs.bind(this);
    this.getMins = this.getMins.bind(this);
    this.getSecs = this.getSecs.bind(this);
  }

  state = {
    hours: new Date(),
    mins: new Date(),
    seconds: new Date()
  };

  getHrs() {
    let Time = new Date();
    this.setState({ hours: Time.getHours() });
  }

  getMins() {
    let Time = new Date();
    this.setState({ mins: Time.getMinutes() });
  }

  getSecs() {
    let Time = new Date();
    this.setState({ seconds: Time.getSeconds() });
  }

  componentDidMount() {
    setInterval(() => {
      this.getHrs();
    }, 1000);
    setInterval(() => {
      this.getMins();
    }, 1000);
    setInterval(() => {
      this.getSecs();
    }, 1000);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-2 col-lg-2 box">
          <h1 class="content">
            {this.state.hours.toString()}
          </h1>
        </div>

        <div className="col-sm-12 col-md-2 col-lg-2 box">
          <h1 class="content">
            {this.state.mins.toString()}
          </h1>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 box">
          <h1 class="content">
            {this.state.seconds.toString()}
          </h1>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 box">am</div>
      </div>
    );
  }
}

export default DigitalClock;
