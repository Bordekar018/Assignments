import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SurveyAction } from "../Redux/Action/SurveyAction";

let Questions = props => {
  useEffect(() => {
    props.SurveyAction();
  }, []);
  return (
    <div className="App container">
      {props.Question.map(data =>
        <React.Fragment key={data.id}>
          <h1
            className="mt-5"
            style={{ color: "gray", backgroundColor: "White" }}
          >
            {data.title}
          </h1>
          <p className="mt-5" style={{ fontSize: "19px" }}>
            {data.description}
          </p>
          <button
            type="button"
            className="btn btn-danger mt-5 btn-lg pl-4 pr-4 pt-2 pb-2"
          >
            Next
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  let a = state.SurveyQuestion.slice(0, 10);
  console.log(a[0]);
  return {
    Question: state.SurveyQuestion.slice(0, 10)
  };
};
export default connect(mapStateToProps, { SurveyAction })(Questions);
