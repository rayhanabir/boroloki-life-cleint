import React, { useState } from "react";
import {Alert, Form, Spinner } from "react-bootstrap";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
    const [userData, setUserData] = useState({});
    const {isLoading, authError,user, signInUser, signInGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const updatedInfo = {...userData}
        updatedInfo[field] = value;
        setUserData(updatedInfo);
        
    }
    const handleSubmit = e =>{
        e.preventDefault()
        signInUser(userData.email, userData.password, location, navigate)
        
    }
    const handleGoogleLogin =()=>{
      signInGoogle(location, navigate);
    }
  return (
    <>
      <section id="login">
        <div className="login_container">
          {!isLoading && <div className="login_form">
              <h3>Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" 
              name="email"
              onBlur={handleBlur}
              placeholder="Enter email" />   
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control type="password" 
              name="password"
              onBlur={handleBlur}
              placeholder="Password" />
            </Form.Group>
            <button className="login_btn">Login</button>
          </Form>
          <p className="text-center mt-2">New User? please Register <Link to='/register'>Register</Link></p>
            <button className="login_btn" onClick={handleGoogleLogin}><FcGoogle/> Sign in Using Google</button>
          </div>}
          {isLoading && <Spinner animation="border" variant="secondary" />} 
        </div>
        
        {user.email && <Alert className='w-50 d-block m-auto p-3' variant='success'>User Logged in Successfully</Alert>}
        {authError && <Alert className='w-50 m-auto p-3'variant='danger'>{authError}</Alert>}
      </section>
    </>
  );
};

export default Login;
