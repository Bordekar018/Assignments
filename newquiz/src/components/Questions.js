import React, { Component } from "react";
import { history } from "../History/history";

export class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayToStoredata: 1
    };
  }
  next = () => {
    this.setState({ arrayToStoredata: this.state.arrayToStoredata + 1 });
  };
  submit = () => {
    alert("Thank You");
    history.push("/Survey");
    window.location.reload();
  };
  render() {
    //console.log(this.props)
    if (this.state.arrayToStoredata < 11) {
      return this.props.QuestionData.map(data => {
        if (this.state.arrayToStoredata === data.id) {
          return (
            <React.Fragment key={data.id}>
              <h1>
                {/* {console.log(typeof this.state.arrayToStoredata)} */}
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.next}
              >
                next
              </button>
            </React.Fragment>
          );
        }
      });
    } else {
      return (
        <button type="button" className="btn btn-primary" onClick={this.submit}>
          Submit
        </button>
      );
    }
  }
}

export default Questions;
