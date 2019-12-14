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
      phone: "",
      date: "",
      email: "",
      userlogin: {
        username: "",
        password: "",
        Cpassword: ""
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

  sendUsername = e => {
    let tempObjtostoreUserName = Object.assign({}, this.state.userlogin);
    console.log(tempObjtostoreUserName);
    tempObjtostoreUserName.username = e.target.value;
    console.log(tempObjtostoreUserName);

    this.setState({ userlogin: tempObjtostoreUserName }); //Doubt
    console.log(tempObjtostoreUserName.password);
  };

  sendPassword = e => {
    let tempObjtostorePassword = Object.assign({}, this.state.userlogin);
    console.log(tempObjtostorePassword);
    tempObjtostorePassword.password = e.target.value;
    this.setState({ userlogin: tempObjtostorePassword });
    console.log(tempObjtostorePassword.username);
  };

  sendCpassword = e => {
    let tempObjtostoreCPassword = Object.assign({}, this.state.userlogin);
    tempObjtostoreCPassword.Cpassword = e.target.value;
    this.setState({ userlogin: tempObjtostoreCPassword });
  };

  store = () => {
    return {
      firstName: this.state.firstName,
      lastname: this.state.lastname,
      gender: this.state.gender,
      address: this.state.address,
      phone: this.state.phone,
      date: this.state.date,
      email: this.state.email,
      userlogin: {
        username: this.state.userlogin.username,
        password: this.state.userlogin.password
      }
    };
  };

  submitInfo = () => {
    let StoreJson = this.store();
    let ConvertoJson = JSON.stringify(StoreJson);
    localStorage.setItem("StoreInfo", ConvertoJson);
    console.log(ConvertoJson);
  };
  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              FirstName
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.firstName}
            onChange={this.sendFirstName}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              LastName
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.lastname}
            onChange={this.sendLastName}
          />
        </div>
        <label>Gender</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <RadioGroup
              name="gender"
              selectedValue={this.state.gender}
              onChange={this.sendGender}
            >
              <Radio value="Male" /> Male
              <br />
              <Radio value="Female" /> Female
              <br />
              <Radio value="Other" /> Other
            </RadioGroup>
          </div>
        </div>

        <div className="form-group row dateSection">
          <label
            htmlFor="example-date-input"
            className="col-1 col-form-label lblDate"
          >
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
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Email
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.email}
            onChange={this.sendEmail}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Contact Number
            </span>
          </div>
          <input
            className="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.phone}
            onChange={this.sendPhoneNo}
          />
        </div>

        <div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Address</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.address}
              onChange={this.sendAddress}
            />
          </div>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Username
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.userlogin.username}
            onChange={this.sendUsername}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Password
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.userlogin.password}
            onChange={this.sendPassword}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Confirm Password
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.userlogin.Cpassword}
            onChange={this.sendCpassword}
          />
        </div>

        <button
          type="button"
          className="btn btn-outline-success"
          onClick={this.submitInfo}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
