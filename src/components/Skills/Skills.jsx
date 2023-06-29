import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardHeader from "react-bootstrap/esm/CardHeader";
// import { ListGroupItem } from "react-bootstrap";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Bulma",
    "Node.js",
    "SQL",
    "Express.js",
    "MongoDB",
    "NoSQL",
    "Git",
    "Agile",
    "REST API Consumption",
    "Broadcom Rally",
    "Manual Software Testing",
    "MySQL",
    "MongoDB",
    "MongoDB Compass",
    "Microsoft Office Suite",
    "WinSCP"
  ];

  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.splice(0, half);
  const secondHalf = skills.splice(-half);

  return (
    <Container align="center">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <Card.Title>Skills</Card.Title>
            </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                <ListGroup variant="flush">
                  {firstHalf.map((skill, index) => (
                    <ListGroup.Item key={index}>{skill}</ListGroup.Item>
                  ))}
                </ListGroup>
                </Col>
                <Col>
                  <ListGroup variant="flush">
                  {secondHalf.map((skill, index) => (
                    <ListGroup.Item key={index}>{skill}</ListGroup.Item>
                  ))}
                </ListGroup>
                </Col> 
                </Row>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
