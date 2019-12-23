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
    if (!this.props.UserData) {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.UserData.map(data =>
          <React.Fragment key={data.id}>
            <li>
              {data.username}
            </li>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
const SendStateToProps = state => {
  return {
    UserData: state.UserFetchList.UserList
  };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
