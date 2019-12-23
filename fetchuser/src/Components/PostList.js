import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchPostData } from "../redux/Action/postAction";
import { FetchUserData } from "../redux/Action/action";
export class PostList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.FetchUserData());
    this.props.FetchUserData();
    this.props.FetchPostData();
  }
  render() {
    if (!this.props.UserPost) {
      return null;
    }
    if (!this.props.UserData) {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.UserPost.map(data =>
          <div className="card" key={data.id}>
            <div className="card-body">
              <h5 className="card-title">
                Blog {data.id}
              </h5>
              <p className="card-text">
                {data.title}
              </p>
              <button className="btn btn-primary">See Author</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const SendStateToProps = state => {
  console.log(state.PostFetchList.PostList);
  console.log(state.UserFetchList.UserList);
  return {
    UserData: state.UserFetchList.UserList,
    UserPost: state.PostFetchList.PostList
  };
};
export default connect(SendStateToProps, { FetchPostData, FetchUserData })(
  PostList
);
