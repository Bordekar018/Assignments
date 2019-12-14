import React, { Component } from "react";
import "./ComponentCSS/App.css";
import Form from "./Components/Form";
import Login from "./Components/Login";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 formcontent">
            <Form />
          </div>
          <div className="col-lg-6 logincontent">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
