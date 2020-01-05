import React, { Component } from "react";
import { connect } from "react-redux";

class UpdateProduct extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row crudProduct">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Product Name
                </span>
              </div>
              <input
                type="text"
                name="proname"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                // value={this.state.productName}
                // onChange={this.getInputName}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Product Price
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                name="proprice" //Important For getInput.
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                // value={this.state.productPrice}
                // onChange={this.getInputPrice}
              />
            </div>

            <button
              type="button"
              className="btn btn-info btn-default"
              //   onClick={this.sendDataToFireBase}
            >
              Update
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);

  return state;
};
export default connect(mapStateToProps)(UpdateProduct);
