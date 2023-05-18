// Dependency Injections
import React from 'react'
import Card from 'react-bootstrap/Card';

// Export and create Project component, pass props into each Project component.
export default function Project(props) {
  const { title, subtitle, description, link1, link2, tech } = props;

  return (
    <Card style={{ width: '20rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '5px 5px 5px gray' }}>
      <Card.Body>
        <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ display: 'flex', justifyContent: 'center' }}>{subtitle}</Card.Subtitle>
        <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>
        </Card.Text>{description}
        <br />
        <br />
        <Card.Text>{tech}</Card.Text>
      </Card.Body>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem 1rem 1rem' }}>
        <Card.Link href={link1} className='projCard'>GitHub</Card.Link>
        <Card.Link href={link2}>Deployment</Card.Link>
      </div>
    </Card>
  );
}