import React, { Component } from "react";
import { history } from "../History/history";
import Questions from "./Questions";

export class TakeaSurvey extends Component {
  routeToQuestion = () => {
    history.push("/Question");
    window.location.reload();
  };
  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.routeToQuestion}
        >
          Start the survey
        </button>
      </React.Fragment>
    );
  }
}

export default TakeaSurvey;
