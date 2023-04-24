// Dependency Injections
import React from "react";
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <>
    <div className="d-flex justify-content-center">
      <Form id="contact" className="col-md-6">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Send me a message!</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="email functionality coming soon..."/>
        </Form.Group>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
    <div className="d-flex justify-content-center mt-5">
    <p style={{}}>I can be reached via email at <a href="mailto:gpkarlsson72@gmail.com">gpkarlsson72@gmail.com</a>.</p>
    </div>
    </>
  );
}