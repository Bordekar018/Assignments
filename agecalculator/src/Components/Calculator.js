import React, { Component } from "react";
import CalculatorUI from "../ComponentUI/CalculatorUI";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInput: ""
    };
  }
  setDate = e => {
    this.setState({ dateInput: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <CalculatorUI dateData={this.state.dateInput} sendDate={this.setDate} />
      </React.Fragment>
    );
  }
}

export default Calculator;
