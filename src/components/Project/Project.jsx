import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Project(props) {
    const { title, subtitle, description, link1, tech} = props;

      return (
        <Card style={{ width: '20rem', display: 'flex', justifyContent: 'center', boxShadow: '5px 5px 5px gray' }}>
          <Card.Body>
            <Card.Title style={{display: 'flex', justifyContent: 'center'}}>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{display: 'flex', justifyContent: 'center' }}>{subtitle}</Card.Subtitle>
            <Card.Text style={{display: 'flex', justifyContent: 'center' }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>{description}
            <br />
            <br />
            <Card.Text>{tech}</Card.Text>
            <br />
            
            <Card.Link href={link1} className='projCard' style={{display: 'flex', justifyContent: 'center'}}>GitHub</Card.Link>
            
            
            {/* <Card.Link href={link2} style={{display: 'flex', justifyContent: 'center'}}>Live</Card.Link> */}
          </Card.Body>
        </Card>
      );
    }