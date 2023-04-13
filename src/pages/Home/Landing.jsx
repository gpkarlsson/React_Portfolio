import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Landing() {
  return (
    <>
    <h1 id="h1">Gordon Karlsson</h1>
    <h3 id="h3">Web Developer</h3>
    <ul id="LINK_UL">
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <Container>
      <Row>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
    </>
  );
}