import React, { Component } from "react";

export class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: ""
    };
  }

  getDataFromLocalStorage = () => {
    let data = localStorage.getItem("StoreInfo");
    return data;
  };

  convertDatajsonIntoObject = () => {
    let localStorageData = this.getDataFromLocalStorage();
    return JSON.parse(localStorageData);
  };

  printData = () => {
    let data = this.convertDatajsonIntoObject();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h4>
            `Firstname: {this.state.firstname}
          </h4>
          <h4>
            Lastname: {}
          </h4>
          <h4>
            Contact Number: {}
          </h4>
          <h4>
            Email:{}
          </h4>
        </div>
      </div>
    );
  }
}

export default UserInfo;
