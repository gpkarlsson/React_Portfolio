import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Landing() {
  return (
    <>
    <h1 id="h1">Gordon Karlsson</h1>
    <h3 id="h3">Web Developer</h3>
    <ul id="LINK_UL">
      <li>Something</li>
      <li>Something else?</li>
      <li>Who Knows</li>
    </ul>

    <Card className="MAIN_CARD" style={{ width: '18rem'  }}>
      <Card.Img variant="top" src="holder.js/100px180" />
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