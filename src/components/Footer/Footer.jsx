import React from "react";
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
  return (
    // <Nav className="FOOTER_LINKS" defaultActiveKey="/home" as="ul" fixed="bottom" >
    //   <Nav.Item as="li">
    //     <Nav.Link href="/home">Active</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link eventKey="link-1">Link</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   </Nav.Item>
    // </Nav>
    <>
    <h1 id="h1">Gordon Karlsson</h1>
    <h3 id="h3">Web Developer</h3>
    <ul id="LINK_UL" style={{ diplay: 'flex', justifyContent: 'space-around' }}>
      <li><a href='github.com/gpkarlsson'>GitHub</a></li>
      <li><a href='github.com/gpkarlsson'>LinkedIn</a></li>
      <li><a href='github.com/gpkarlsson'>Stack Overflow</a></li>
    </ul>
    </>
    
  );
}