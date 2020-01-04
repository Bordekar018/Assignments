import React, { Component } from "react";

export class CRUDProduct extends Component {
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
                name="proname" //Important For getInput.
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
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
                type="text"
                className="form-control"
                name="proprice" //Important For getInput.
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <button type="button" className="btn btn-info btn-default">
              Add Data
            </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
      </div>
    );
  }
}

export default CRUDProduct;
