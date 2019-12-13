import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastname: "",
      gender: "Male",
      address: "",
      option: "React",
      phone: "",
      date: "",
      email: ""
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

  sendGender = value => {
    this.setState({ gender: value });
    console.log(value);
  };
  sendPhoneNo = e => {
    this.setState({ phone: e.target.value });
    console.log(this.state.phone);
  };
  sendDate = e => {
    this.setState({ date: e.target.value });
    console.log(this.state.date);
  };

  sendEmail = e => {
    this.setState({ email: e.target.value });
  };
  alertinfo = () => {
    alert(
      `Firstname: ${this.state.firstName} Address: ${this.state
        .address} lang: ${this.state.option} ${this.state.date}`
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

          <RadioGroup
            name="gender"
            selectedValue={this.state.gender}
            onChange={this.sendGender}
          >
            <Radio value="Male" />Male
            <Radio value="Female" />Female
            <Radio value="Other" />Other
          </RadioGroup>
        </div>
        <div className="form-group row">
          <label htmlFor="example-date-input" className="col-2 col-form-label">
            Date
          </label>
          <div className="col-10">
            <input
              className="form-control"
              type="date"
              value={this.state.date}
              onChange={this.sendDate}
              id="example-date-input"
            />
          </div>
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.sendEmail}
          />
        </div>
        <div>
          <label>Phone number: </label>
          <input
            type="Number"
            value={this.state.phone}
            onChange={this.sendPhoneNo}
          />
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
          <button type="submit" onClick={this.alertinfo}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
