import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
export class UserList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    if (!this.props.UserData) {
      return null;
    }
    this.props.FetchUserData(this.props.id);
  }
  render() {
    if (!this.props.UserData) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <h1>
            {this.props.UserData.id}
          </h1>
        </div>
      </div>
    );
  }
}
const SendStateToProps = state => {
  console.log(state);

  return {
    UserData: state.UserFetchList.UserList
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
