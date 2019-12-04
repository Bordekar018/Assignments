import React, { Component } from "react";

export class DigitalClock extends Component {
  state = {
    date: new Date()
  };
  currentTime() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    setInterval(() => {
      this.currentTime();
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default DigitalClock;
