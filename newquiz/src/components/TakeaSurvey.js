import React, { Component } from "react";
import { history } from "../History/history";

export class TakeaSurvey extends Component {
  routeToQuestion = () => {
    history.push("/Question");
    window.location.reload();
  };
  render() {
    //console.log(this.props.QuestionSet);

    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.routeToQuestion}
      >
        Start the survey
      </button>
    );
  }
}

export default TakeaSurvey;
