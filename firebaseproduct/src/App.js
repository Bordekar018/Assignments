import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

import LoginAdmin from "./Components/LoginAdmin";

import Home from "./Components/Home";

function App() {
  return (
    <div className="mainBox">
      <Navigation />
      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LoginAdmin} />
      </React.Fragment>
    </div>
  );
}

export default App;
