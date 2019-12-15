import React, { Component } from "react";
import { RadioGroup, Radio } from "react-radio-group";
import SimpleReactValidator from "simple-react-validator";

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
        password: ""
      }
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
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
    if (this.validator.allValid()) {
      let StoreJson = this.store();
      let ConvertoJson = JSON.stringify(StoreJson);
      localStorage.setItem("StoreInfo", ConvertoJson);
      console.log(ConvertoJson);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };
  render() {
    return (
      <form class="loginContainer">
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
          {this.validator.message(
            "firstName",
            this.state.firstName,
            "required|min:2"
          )}
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
          {this.validator.message(
            "lastname",
            this.state.lastname,
            "required|min:2"
          )}
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

        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Date
            </span>
          </div>
          <input
            className="form-control"
            type="date"
            value={this.state.date}
            onChange={this.sendDate}
            id="example-date-input"
          />
          {this.validator.message("date", this.state.date, "required")}
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
          {this.validator.message("email", this.state.email, "required|email")}
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Contact Number
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.phone}
            onChange={this.sendPhoneNo}
          />
          {this.validator.message(
            "phone",
            this.state.phone,
            "required|phone|max:10"
          )}
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
            {this.validator.message("address", this.state.address, "required")}
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
          {this.validator.message(
            "username",
            this.state.userlogin.username,
            "required|alpha_num|min:2"
          )}
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Password
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={this.state.userlogin.password}
            onChange={this.sendPassword}
          />
          {this.validator.message(
            "password",
            this.state.userlogin.password,
            "required|alpha_num|min:3"
          )}
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
