import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signup.css'
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <Container>
      <h1>Registeration Form</h1>
      <Form onSubmit={handleSubmit}>
   
        <Form.Group>
          <Form.Label><b>Name</b></Form.Label>
          <Form.Control 
            type='text'
            value={formData.name}
            name='name'
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control 
            type='email' 
            value={formData.email}
            name='email'
            onChange={handleChange}
            required
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control 
            type='password'
            value={formData.password}
            name='password'
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit'>Register</Button>
        <p>Already have an account?</p><Link to='/login'>Login</Link>
      </Form> 
    </Container>
    </>
  )
}
export default Signup