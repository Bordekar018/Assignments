import React, { Component } from "react";

export class Questions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        {this.props.QuestionData.map(data =>
          <React.Fragment key={data.id}>
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>
            <hr />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Questions;
