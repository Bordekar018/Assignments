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
        Hii
        {this.props.UserData.map(data =>
          <li>
            {data.username}
          </li>
        )}
      </React.Fragment>
    );
  }
}
const SendStateToProps = state => {
  console.log(state.UserList);
  return { UserData: state.UserList };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
