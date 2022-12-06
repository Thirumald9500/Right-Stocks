import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login_post } from "../apiservice/apisrevice";
import '../css/home.css';

const Login =() =>{
    const [data,setdata] = useState({
      email:"",
      password:""
    });
    let navigate = useNavigate();
    const handle = (e) => {
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setdata(newdata)
  } 
    const submit = (e) => {
      //console.log(data);
      Login_post(data).then((response)=>{
        //console.log(response.data['data']);
        if (response.data['status'] === 'success'){
            localStorage.setItem('token',response.data['data']['token'])
            return navigate('/home')
        }
      })
    }
  
      return (
        
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
  
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
             // value = {data.email}
              onChange={(e) => handle(e)}
            />
          </div>
  
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
             // value={data.password}
              onChange={(e) => handle(e)}
            />
          </div>
  
          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form></div></div>
      );
    }
  
  
  
  export default Login;