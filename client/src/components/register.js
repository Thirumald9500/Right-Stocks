import React, { Component } from "react";
import { Register_post } from "../apiservice/apisrevice"; 
import '../css/home.css';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    //const { fname, lname, email, password,isadmin } = this.state;
    //console.log(this.state);
    Register_post(this.state).then((res)=>{
      console.log(res,'register');
    });
  }
  
  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
       

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </form></div></div>
    );
  }
}