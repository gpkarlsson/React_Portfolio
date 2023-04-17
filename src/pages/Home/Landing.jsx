import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

export default function Landing() {
  return (
    <>
    <h1 id="h1">Gordon Karlsson</h1>
    <h3 id="h3">Web Developer</h3>
    <ul id="LINK_UL" style={{ diplay: 'flex', justifyContent: 'space-around' }}>
      <li>GitHub</li>
      <li>LinkedIn</li>
      <li>Stack Overflow</li>
    </ul>
    
<Card className="MAIN_CARD" style={{ width: '18rem', display: 'flex', justifyContent: 'center'  }}>
      <Card.Img as={Image} variant="top" src="../src/assets/portfoliopic.jpg" />
      <Card.Body>
        <Card.Title>About Me ? Prob needs to be in the middle, huh?</Card.Title>
        <Card.Text>
         
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    
    </>
  );
}