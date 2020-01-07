import React, { Component } from "react";
import { history } from "../History/history";

export class TakeaSurvey extends Component {
  routeToQuestion = () => {
    history.push("/Question");
    window.location.reload();
  };
  render() {
    //console.log(this.props)

    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.routeToQuestion}
          style={{ marginTop: "100px", marginLeft: "500px" }}
        >
          Start the survey
        </button>
      </div>
    );
  }
}

export default TakeaSurvey;
