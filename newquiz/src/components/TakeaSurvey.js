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
      <React.Fragment>
        <div className="container">
          <div className="loginContainer aa">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.routeToQuestion}
              style={{ marginLeft: "450px" }}
            >
              Start the survey
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TakeaSurvey;
