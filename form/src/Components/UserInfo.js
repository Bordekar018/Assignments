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
          <h4>
            `Firstname: {}
          </h4>
          <h4>
            Lastname: {}
          </h4>
          <h4>
            Contact Number: {}
          </h4>
          <h4>
            Email:{}
          </h4>
        </div>
      </div>
    );
  }
}

export default UserInfo;
