import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchUserData } from "../redux/Action/action";
import { FetchPostData } from "../redux/Action/postAction";

export class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.FetchUserData();
    this.props.FetchPostData();
  }
  render() {
    if (!this.props.UserData) {
      return null;
    }
    if (!this.props.UserPost) {
      return null;
    }
    return (
      <div className="row">
        <div className="col-lg-6">
          {this.props.UserData.map(data =>
            <React.Fragment key={data.id}>
              <li>
                {data.username}
              </li>
            </React.Fragment>
          )}
        </div>
        <div className="col-lg-6">
          {this.props.UserPost.map(data =>
            <React.Fragment key={data.id}>
              <li>
                {data.title}
              </li>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
const SendStateToProps = state => {
  console.log(state.UserFetchList.UserList);
  console.log(state.PostFetchList.PostList);
  return {
    UserData: state.UserFetchList.UserList,
    UserPost: state.PostFetchList.PostList
  };
};
export default connect(SendStateToProps, { FetchUserData, FetchPostData })(
  UserList
);
