import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase-init'
import './Login.css'

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'


   
  const [
    signInWithEmailAndPassword,
    user,
   
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if(user){
    navigate(from , {replace : true})
  }


  const handleEmail = event => {
    setEmail(event.target.value);
 
 }
 const handlePassword = event => {
     setPassword(event.target.value);
 
 }
 const handleLogin = event => {
  event.preventDefault();

  signInWithEmailAndPassword(email,password);
}





  return (
    <>
    
    <div className='login-container'>
            <h3 className='text-center'>Welcome to Login</h3>
          <div className='mx-auto'>
          <Form onSubmit={handleLogin}  className=' form-container ' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={ handleEmail} type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  
  
  {/* <Button variant="btn btn-outline-primary d-block w-100 mb-3 d-flex justify-content-center align-items-center gap-2" type="submit">
   Login  With  <FcGoogle></FcGoogle> 
  </Button> */}
  <p>{error}</p>
  <Button variant="btn btn-outline-dark d-block w-100 mb-3" type="submit">
    Login
  </Button>
  <Form.Text className=" register-text ">
     Not a member <Link to="/register" className='text-dark'>Register</Link>
    </Form.Text>
</Form>
  </div>

        </div>
    </>
   
  );
};

export default Login;