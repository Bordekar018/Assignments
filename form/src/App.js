import React, { Component } from "react";
import "./ComponentCSS/App.css";
import Form from "./Components/Form";
import Login from "./Components/Login";
import UserInfo from "./Components/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="BG">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 formcontent">
              <Form />
            </div>
            <div className="col-lg-6 logincontent">
              <Login />
            </div>
          </div>
          <UserInfo />
        </div>
      </div>
    );
  }
}

export default App;
