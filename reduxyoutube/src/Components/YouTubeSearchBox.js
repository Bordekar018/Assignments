import React, { Component } from "react";
import searchIcon from "../Uploads/searchIcon.png";
import { Field, reduxForm } from "redux-form";

export class YouTubeSearchBox extends Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="input-group mb-3 searchBox">
          <Field
            className="form-control"
            name="search" //name: You Can Access Search Field Using This....
            placeholder="Search"
            component="input"
            type="text"
          />
          <div className="input-group-append SearchDiv">
            <button
              className="btn btn-outline-secondary btnSearch"
              type="submit"
              id="button-addon2"
            >
              <img src={searchIcon} className="btnImg" alt="YouTube" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export const YoutubeSearch = reduxForm({
  form: "Youtube" //Reference "Form Name" ....
})(YouTubeSearchBox);
