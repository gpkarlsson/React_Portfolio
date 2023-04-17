import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function renderLinks() {
  
}

function renderContact() {
  document.getElementById('')
}
export default function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gordon Karlsson</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={renderLinks}>Portfolio</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#contact"onClick={renderContact}>Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

// About Me, Portfolio, Resume