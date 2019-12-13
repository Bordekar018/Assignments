import React, { Component } from "react";
i;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastname: "",
      address: "",
      option: "React"
    };
  }

  sendFirstName = event => {
    this.setState({ firstName: event.target.value });
    console.log(event.target);
  };

  sendLastName = event => {
    this.setState({ lastname: event.target.value });
    console.log(event.target);
  };

  sendAddress = event => {
    this.setState({ address: event.target.value });
    console.log(event.target);
  };

  selectOption = event => {
    this.setState({ option: event.target.value });
    console.log(event.target);
  };

  alertinfo = () => {
    alert(
      `Firstname: ${this.state.firstName} Address: ${this.state
        .address} lang: ${this.state.option}`
    );
  };
  render() {
    return (
      <form>
        <div>
          <label>FirstName: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.sendFirstName}
          />
        </div>
        <div>
          <label>LastName: </label>
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.sendLastName}
          />
        </div>
        <div>
          <label>Gender: </label>
        </div>
        <div>
          <label>Address: </label>
          <textarea
            type="textarea"
            value={this.state.address}
            onChange={this.sendAddress}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.option} onChange={this.selectOption}>
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <div>
          <button type="submit" onClick={this.alertinfo}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
