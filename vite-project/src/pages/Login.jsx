import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

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
      <h1>Login Form</h1>
      <Form onSubmit={handleSubmit}>
   
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
        <Button variant='primary' type='submit'>Login</Button>
      </Form>
    </Container>
    </>
  )
}

export default Login