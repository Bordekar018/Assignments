import React, { Component } from "react";
import { history } from "../History/History";
import { connect } from "react-redux";
import { SurveyAction } from "../Redux/Action/SurveyAction";

class StartSurvey extends Component {
  componentDidMount() {
    this.props.SurveyAction();
  }
  showQues = () => {
    history.push("/Question");
    window.location.reload();
  };
  render() {
    if (!this.props.a) {
      return null;
    }
    return (
      <button type="button" className="btn btn-primary" onClick={this.showQues}>
        Start The Survey
      </button>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    a: state
  };
};
export default connect(mapStateToProps, { SurveyAction })(StartSurvey);
