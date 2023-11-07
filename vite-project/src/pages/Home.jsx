import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <Container>
        <h1>Welcome to Our App</h1>
        <p>We're are here to serve you..</p>
        <Button variant='primary' type='submit'>GET STARTED!</Button>
    </Container>
    </>
    )
}

export default Home
