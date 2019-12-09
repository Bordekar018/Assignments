import React, { Component } from "react";
import axios from "axios";
import Products from "./products";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      products: []
    };
  }
  searchItem = e => {
    this.setState({ item: e.target.value });
    console.log(e.target);
  };
  getImgs = async e => {
    e.preventDefault();
    // this.setState({ products: this.state.item }); //error Cannot read property 'map' of undefined
    let daa = await axios.get(
      `https://pixabay.com/api/?key=14542584-cfc2860bdd7dc23fa94fdb78e&q=yellow+${this
        .state.item}&image_type=photo`
    );
    this.setState({ products: daa.data });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row heading ">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 box">
            <form className="form-inline">
              <input
                type="text"
                className="form-control ipbox"
                value={this.state.item}
                onChange={this.searchItem}
              />

              <button
                type="submit"
                className="btn btn-dark btnSub"
                onClick={this.getImgs}
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 " />
        </div>
        <div className="row heading ">
          <Products productProp={this.state.products} />
        </div>
      </div>
    );
  }
}

export default Search;
