import React, { Component } from "react";

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
  render() {
    console.log(this.props);
    return this.props.QuestionData.map((data, key) => {
      if (this.state.arrayToStoredata == data.id) {
        return (
          <React.Fragment>
            <h1>
              {console.log(typeof this.state.arrayToStoredata)}
              {data.title}
            </h1>
            <button type="button" class="btn btn-primary" onClick={this.next}>
              next
            </button>
          </React.Fragment>
        );
      }
    });
    // return (
    //   <React.Fragment>
    //     {this.props.QuestionData.map((data, key) =>
    //       <React.Fragment key={data.id}>
    //         <h1>
    //           {console.log(this.state.arrayToStoredata)}
    //           {data.title}
    //         </h1>
    //         <p>
    //           {data.description}
    //         </p>
    //         <button>Next</button>
    //         <hr />
    //       </React.Fragment>
    //     )}
    //   </React.Fragment>
    // );
  }
}

export default Questions;
