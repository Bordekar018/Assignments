import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";

export class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.FetchUserData();
  }
  render() {
    return <div />;
  }
}

export default connect(null, { FetchUserData })(UserList);
