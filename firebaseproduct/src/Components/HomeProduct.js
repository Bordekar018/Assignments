import React, { Component } from "react";

export class HomeProduct extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row producthome">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="card text-center cardwidth">
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product Price</p>
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
        </div>
      </div>
    );
  }
}

export default HomeProduct;
