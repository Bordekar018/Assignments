import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
export class UserList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    this.props.FetchUserData(this.props.id);
  }
  render() {
    if (this.props.UserData === undefined) {
      return <h1>Loading....</h1>;
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
  return {
    UserData: state.UserFetchList.UserList
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
