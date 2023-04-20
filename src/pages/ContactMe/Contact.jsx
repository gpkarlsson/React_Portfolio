import React from "react";
import Navigation from '../../components/Navigation/Navigation'
// import Header from '../../components/Header'
import Container from "../Portfolio/Container";
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
  <div>
<Form id="contact" className="hide">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Send me a message!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </div>

  );
}

