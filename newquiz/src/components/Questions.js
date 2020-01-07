import React, { Component } from "react";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }
  next = (datakey, key) => {
    if (key == datakey) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        {this.props.QuestionData.map((data, key) =>
          <React.Fragment key={data.id}>
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>
            <button
              onClick={() => {
                this.next(data.id, key);
              }}
            >
              Next
            </button>
            <hr />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Questions;
