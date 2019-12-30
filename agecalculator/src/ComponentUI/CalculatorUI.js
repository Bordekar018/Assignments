import React from "react";
import { connect } from "react-redux";
import { calculateAge } from "../Redux/Action/calculateAction";

function CalculatorUI(props) {
  console.log(props);

  return (
    <div className="container-fluid backGroundC">
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <form className="loginContainer">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput" className="lbldesc">
                What's your age??
              </label>
              <input
                type="date"
                className="form-control"
                id="txtInputBirthDate"
                value={props.dateData}
                onChange={props.sendDate}
              />
            </div>
            <button
              type="button"
              className="btn btn-default btn-block btnsuccess"
              id="btnSubmit"
              onClick={() => props.calculateAge(props.dateData)}
            >
              Calculate
            </button>
            <div className="form-group op">
              <label id="lblhead">Your age is...</label>
              <label id="lblAgeOP" />
            </div>
          </form>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 emptyContainer" />
      </div>
    </div>
  );
}

const mapstateToProps = state => {
  console.log(state);

  return state;
};
export default connect(mapstateToProps, { calculateAge })(CalculatorUI);
