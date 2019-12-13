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
      email: "",
      userlogin: {
        username: "",
        password: ""
      }
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
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              FirstName
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.firstName}
            onChange={this.sendFirstName}
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              LastName
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.lastname}
            onChange={this.sendLastName}
          />
        </div>
        <label>Gender</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <RadioGroup
              name="gender"
              selectedValue={this.state.gender}
              onChange={this.sendGender}
            >
              <Radio value="Male" />Male
              <br />
              <Radio value="Female" />Female
              <br />
              <Radio value="Other" />Other
            </RadioGroup>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="example-date-input" className="col-1 col-form-label">
            Date
          </label>
          <div className="col-11">
            <input
              className="form-control"
              type="date"
              value={this.state.date}
              onChange={this.sendDate}
              id="example-date-input"
            />
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Email
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.email}
            onChange={this.sendEmail}
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Contact Number
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.phone}
            onChange={this.sendPhoneNo}
          />
        </div>

        <div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Address</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.address}
              onChange={this.sendAddress}
            />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={this.alertinfo}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
