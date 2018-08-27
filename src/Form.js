import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";

export default class Form extends React.Component {
  constructor(props){
    super(props)
  }

  state = {
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    birthDate: null,
    birthDateString: "",
    birthDateError: "",
    superpower: "",
    superpowerError: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeDate = (event, date) => {
    this.setState({
      birthDate: date,
      birthDateString: date.toLocaleDateString(),
    });
  }

  validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      lastNameError: "",
      birthDateError: "",
      superpowerError: "",
    };

    if(this.state.birthDateString.length < 1) {
      isError = true;
      errors.birthDateError = "Please enter birth date!";
    }

    if (!/^[ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮäôľĺĽĹa-zA-Z]{2,20}$/.test(this.state.firstName)) {
      isError = true;
      errors.firstNameError = "Please enter valid name!";
    }

    if (!/^[ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮäôľĺĽĹa-zA-Z]{2,20}$/.test(this.state.lastName)) {
      isError = true;
      errors.lastNameError = "Please enter valid last name!";
    }

    if (!/^[ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮäôľĺĽĹa-zA-Z]{2,20}$/.test(this.state.superpower)) {
      isError = true;
      errors.superpowerError = "Please enter valid superpower!";
    }

    this.setState(errors);
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        birthDate: null,
        birthDateError: "",
        superpower: "",
        superpowerError: "",
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="firstName"
          hintText="First name"
          floatingLabelText="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <DatePicker 
          name="birthDate"
          hintText="Birth Date"
          floatingLabelText="Birth Date"
          value={this.state.birthDate}
          onChange={this.changeDate}
          errorText={this.state.birthDateError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="superpower"
          hintText="Superpower"
          floatingLabelText="Superpower"
          value={this.state.superpower}
          onChange={e => this.change(e)}
          errorText={this.state.superpowerError}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Add" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
