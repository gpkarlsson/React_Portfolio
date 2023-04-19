import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Landing from '../../pages/Home/Landing'

function renderLinks() {
  //onClick -> clickHandler -> Render page associated with clicked link

  //Portfolio clicked -> render Portfolio cards
  
  //About Me link clicked -> Render AboutMe page

  //ContactMe clicked -> render ContactMe page
  
  //Home clicked -> render Home page
  
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