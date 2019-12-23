import React, { Component } from "react";
import { connect } from "react-redux";
import { FetchPostData } from "../redux/Action/postAction";

export class PostList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);

    this.props.FetchPostData();
  }
  render() {
    if (!this.props.UserPost) {
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
  return {
    UserPost: state.PostFetchList.PostList
  };
};
export default connect(SendStateToProps, { FetchPostData })(PostList);
