import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameLogin: "",
      passwordLogin: ""
    };
  }
  getUsername = e => {
    this.setState({ usernameLogin: e.target.value });
  };

  getPassword = e => {
    this.setState({ passwordLogin: e.target.value });
  };

  getDataFromLocalStorage = () => {
    let data = localStorage.getItem("StoreInfo");
    return data;
  };

  convertDatajsonIntoObject = () => {
    let localStorageData = this.getDataFromLocalStorage();
    return JSON.parse(localStorageData);
  };

  loginUser = () => {
    let jsdata = this.convertDatajsonIntoObject();
    console.log(jsdata);
    //console.log(jsdata.firstName)
    let uName = this.state.usernameLogin;
    let uPass = this.state.passwordLogin;
    let uregi = jsdata.userlogin.username;
    let upregi = jsdata.userlogin.password;

    if (uName == uregi && uPass == upregi) {
      alert(`Firstname: ${jsdata.firstName} Lastname: ${jsdata.lastname}`);
    } else {
      alert(`Error`);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Username
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.usernameLogin}
            onChange={this.getUsername}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Password
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.passwordLogin}
            onChange={this.getPassword}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.loginUser}
        >
          Login
        </button>
      </React.Fragment>
    );
  }
}

export default Login;
