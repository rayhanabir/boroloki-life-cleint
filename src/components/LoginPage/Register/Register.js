import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const [userData, setUserData] = useState({});
    const {signUpUser,user, signInGoogle, isLoading, authError} = useAuth();
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
        if(userData.password !==userData.password1){
            return;
        }
        signUpUser(userData.email, userData.password, location, navigate)
    }
    return (
        <>

          <section id="register">
        <div className="register_container">
          {!isLoading && <div className="register_form">
              <h3>Register</h3>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1" controlId="registerName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control 
              type="text"
              name="name"
              onBlur={handleBlur}
              placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="registerEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email" 
                name='email'
                required
                onBlur={handleBlur}
                placeholder="Enter email" />   
            </Form.Group>
            <Form.Group className="mb-1" controlId="registerPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control 
              type="password" 
              name='password'
              required
              onBlur={handleBlur}
              placeholder="Your Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
              type="password" 
              name="password1"
              onBlur={handleBlur}
              required
              placeholder="Confirm Password" />
            </Form.Group>
            <button className="register_btn">Login</button>
          </Form>
          <p className="text-center mt-2">Already Registered? please Login <Link to='/login'>Login</Link></p>
            <button className="register_btn" onClick={signInGoogle}>Sign in Using Google</button>
          </div>}
          {isLoading && <Spinner animation="border" variant="secondary" />}
        </div>
        
        {user.email && <Alert className='w-50 m-auto p-3' variant='success'>User Created Successfully</Alert>}
        {authError && <Alert className='w-50 m-auto p-3' variant="danger">{authError}</Alert>}
      </section>  
        </>
    );
};

export default Register;