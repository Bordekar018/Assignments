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
    console.log(this.props.UserData);

    return (
      <React.Fragment>
        Hii
        {/* {this.data.map(data =>
          <li>
            {data.name}
          </li>
        )} */}
      </React.Fragment>
    );
  }
}
const SendStateToProps = state => {
  console.log(state.UserList);
  return { UserData: state.UserList };
};
export default connect(SendStateToProps, { FetchUserData })(UserList);
