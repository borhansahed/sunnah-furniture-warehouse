import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../firebase-init';


  

const Register = () => {
    const [email , setEmail] = useState('');
     const [password , setPassword] = useState('');
     const [confirmPassword , setConfirmPassword] = useState('');
     const [error , setError] = useState('');
    const navigate = useNavigate();
   
const [
        createUserWithEmailAndPassword,user
       
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification: true});

      if(user){
        navigate('/home');
      }
 
 const handleEmail = event => {
   setEmail(event.target.value);

}
const handlePassword = event => {
    setPassword(event.target.value);

}
const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);

}
const handleRegister = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
      setError( 'your two password did not match');
      return;
    }
    if(password.length < 6){
      setError('Password must be 6 characters')
      return;
    }
    
    createUserWithEmailAndPassword(email , password);
}


    
    return (
       <>
        <div>
        
        <div className='login-container'>
        <h3 className='text-center'>Please Register your account</h3>
      <div   className='mx-auto'>
      <Form onSubmit={handleRegister} className=' form-container ' >
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Your name</Form.Label>
<Form.Control type="text" placeholder="Enter Name" />

</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control onBlur={handlePassword}  type="password" placeholder="Password" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Confirm Password</Form.Label>
<Form.Control onBlur={handleConfirmPassword}  type="password" placeholder="Password" required />
</Form.Group>
<p>{error}</p>

{/* <Button variant="btn btn-outline-primary d-block w-100 mb-3 d-flex justify-content-center align-items-center gap-2" type="submit">
Register With  <FcGoogle></FcGoogle> 
</Button> */}
<Button variant="btn btn-outline-dark d-block w-100 mb-3" type="submit">
Register
</Button>
<Form.Text className=" register-text">
 Already have a account <Link to="/login" className='text-dark'>Login</Link>
</Form.Text>
</Form>
      </div>
    </div>
    </div>
    {/* <SocialLogin></SocialLogin> */}
    </>
    );
};

export default Register;