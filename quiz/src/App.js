import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import StartSurvey from "./Components/StartSurvey";
import Questions from "./Components/Questions";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={StartSurvey} />
        <Route path="/home" exact component={StartSurvey} />
        <Route path="/Question" exact component={Questions} />
      </Switch>
    </div>
  );
}

export default App;
