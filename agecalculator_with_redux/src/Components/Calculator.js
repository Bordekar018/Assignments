import React, { Component } from "react";
import { calculateAge } from "../Redux/Action/CalculatorAction";
import { connect } from "react-redux";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getInput: ""
    };
  }

  getInputOnChange = e => {
    this.setState({ getInput: e.target.value });
  };

  render() {
    console.log(typeof this.state.getInput);

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
                  name="age"
                  value={this.state.getInput}
                  onChange={this.getInputOnChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-default btn-block btnsuccess"
                id="btnSubmit"
                onClick={() => this.props.calculateAge(this.state.getInput)}
              >
                Calculate
              </button>
              <div className="form-group op">
                <label id="lblhead">
                  Your age is...<h3>
                    {/* {props.year} years, {props.month} months, {props.day} days */}
                  </h3>
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

let mapStateToProps = state => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps, { calculateAge })(Calculator);
