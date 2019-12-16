import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 " />
          <div className="col-lg-6 groupTogether">
            <h1 className="mainTag">User Information</h1>
            <h4 className="heading">
              Firstname - {}
            </h4>
            <h4 className="heading">
              Lastname - {}
            </h4>
            <h4 className="heading">
              Contact Number - {}
            </h4>
            <h4 className="heading">
              Email - {}
            </h4>
          </div>
          <div className="col-lg-3 " />
        </div>
      </div>
    );
  }
}

export default UserInfo;
