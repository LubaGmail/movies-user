import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as authService from '../services/authService';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const {username, password} = this.state.data;
    try {
      const {data: jwt} = await authService.login(username, password);
      localStorage.setItem('token', jwt);

      // this.props.history.push('/');
      // reload spa
      window.location = ('/');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data);
        const errors = {...this.state.errors};
        errors.username = error.response.data;
        this.setState({errors});
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
