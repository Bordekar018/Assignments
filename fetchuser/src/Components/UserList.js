import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
export class UserList extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }
  componentDidMount() {
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
            {this.props.UserData.name}
          </h1>
        </div>
      </div>
    );
  }
}
const SendStateToProps = (state, ownProps) => {
  //console.log(state, ownProps);
  console.log(state.PostFetchList.PostList);
  console.log(state.UserFetchList.UsersList);

  return {
    UserData: state.UserFetchList.UsersList.find(
      item => item.id === ownProps.id
    )
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
