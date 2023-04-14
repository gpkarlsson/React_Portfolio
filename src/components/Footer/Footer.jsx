import React from "react";
import Nav from 'react-bootstrap/Nav';

export default function ListExample() {
  return (
    <Nav className="FOOTER_LINKS" defaultActiveKey="/home" as="ul" fixed="bottom" >
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}