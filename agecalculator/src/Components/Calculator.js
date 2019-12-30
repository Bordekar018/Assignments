import React, { Component } from "react";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInput: "",
      ageOP: 0
    };
  }
  setDate = e => {
    this.setState({ dateInput: e.target.value });
  };
  calAge = date => {
    let dateObj = new Date();
    let convertedAgeToString = date.toString();
    let sliceConvertedString = convertedAgeToString.slice(0, 4);
    this.setState({ ageOP: dateObj.getFullYear() - sliceConvertedString });
  };

  render() {
    return (
      <div className="container-fluid backGroundC">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <form className="loginContainer">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput" className="lbldesc">
                  What's your age??
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="txtInputBirthDate"
                  value={this.state.dateInput}
                  onChange={this.setDate}
                />
              </div>
              <button
                type="button"
                className="btn btn-default btn-block btnsuccess"
                id="btnSubmit"
                onClick={() => this.calAge(this.state.dateInput)}
              >
                Calculate
              </button>
              <div className="form-group op">
                <label id="lblhead">
                  Your age is...<h3>{this.state.ageOP}</h3>
                </label>
              </div>
            </form>
          </div>

          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />
        </div>
      </div>
    );
  }
}

export default Calculator;
