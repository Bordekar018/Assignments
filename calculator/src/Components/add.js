import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstInput: 0,
      secondInput: 0,
      output: 0
    };
  }
  getinputFirst = e => {
    this.setState({ FirstInput: e.target.value });
    console.log(e.target.value);
  };
  getinputSecond = e => {
    this.setState({ secondInput: e.target.value });
    console.log(e.target.value);
  };

  add = e => {
    let addition =
      Number(this.state.FirstInput) + Number(this.state.secondInput);
    this.setState({ output: addition });
    console.log(addition);
    console.log(typeof this.state.FirstInput);

    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <h1>Adding Two Numbers</h1>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <form>
              <input
                type="number"
                className="form-control"
                placeholder="Enter a Number"
                value={this.state.FirstInput}
                onChange={this.getinputFirst}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Enter a Number"
                value={this.state.secondInput}
                onChange={this.getinputSecond}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.add}
              >
                Primary
              </button>
            </form>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <label id="lblOutput">
              {this.state.output}
            </label>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>
      </React.Fragment>
    );
  }
}

export default Add;
