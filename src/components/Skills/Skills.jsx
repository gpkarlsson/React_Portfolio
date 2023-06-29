import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Skills() {
  const skills = ['HTML', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Bulma', 'Node.js', 'SQL', 'Express.js', 'MongoDB', 'NoSQL', 'Git', 'Agile', 'REST API Consumption', 'Broadcom Rally', 'Manual Software Testing', 'MySQL', 'MongoDB', 'MongoDB Compass', 'Microsoft Office Suite'];
  return (
    <Container>
      <Row>
      <Card>
        <Card.Header>
          <Card.Title>Skills</Card.Title>
          <Card.Body>
           <ListGroup>

           </ListGroup>
          </Card.Body>
        </Card.Header>
      </Card>
      </Row>
      </Container>
  )
}
