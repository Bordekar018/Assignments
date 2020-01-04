import React, { Component } from "react";

export class HomeProduct extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row producthome">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" />
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div class="card text-center cardwidth">
              <div class="card-body">
                <h5 class="card-title">Product Name</h5>
                <p class="card-text">Product Price</p>
                <button class="btn btn-primary">Add To Cart</button>
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
